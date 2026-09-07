#!/usr/bin/env node

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const DATA_FILE = resolve(ROOT, 'kanji-data.js');
const OUTPUT_DIR = resolve(ROOT, 'stroke-data');
const OUTPUT_FILE = resolve(OUTPUT_DIR, 'kanjivg-strokes.js');
const AUDIT_FILE = resolve(OUTPUT_DIR, 'coverage.json');
const SOURCE_BASE = 'https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji';
const SPECIAL_SYMBOLS = new Set(['々']);

function readKanjiList(source) {
  const matches = [...source.matchAll(/["']kanji["']\s*:\s*["']([^"']+)["']/g)].map(match => match[1]);
  if (!matches.length) throw new Error('No kanji entries found in kanji-data.js');
  return matches;
}

function fileNameFor(character) {
  return `${character.codePointAt(0).toString(16).padStart(5, '0')}.svg`;
}

function decodeXml(value) {
  return value.replaceAll('&quot;', '"').replaceAll('&apos;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&amp;', '&');
}

function parseSvg(svg, character) {
  const paths = [...svg.matchAll(/<path\b[^>]*\bd="([^"]+)"[^>]*\/?>(?:<\/path>)?/g)].map(match => decodeXml(match[1]));
  const numbers = [...svg.matchAll(/<text\b([^>]*)>\s*\d+\s*<\/text>/g)].map(match => {
    const attributes = match[1];
    const x = attributes.match(/\bx="([^"]+)"/)?.[1];
    const y = attributes.match(/\by="([^"]+)"/)?.[1];
    const matrix = attributes.match(/\btransform="matrix\([^)]*?\s(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\)"/);
    return { x: Number(x ?? matrix?.[1]), y: Number(y ?? matrix?.[2]) };
  }).filter(point => Number.isFinite(point.x) && Number.isFinite(point.y));
  if (!paths.length) throw new Error(`No stroke paths found for ${character}`);
  return { paths, numbers: numbers.slice(0, paths.length) };
}

async function fetchSvg(character) {
  const fileName = fileNameFor(character);
  const response = await fetch(`${SOURCE_BASE}/${fileName}`);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return parseSvg(await response.text(), character);
}

async function main() {
  const characters = readKanjiList(await readFile(DATA_FILE, 'utf8'));
  const strokeData = {};
  const missing = [];
  const special = [];

  for (const character of characters) {
    if (SPECIAL_SYMBOLS.has(character)) {
      special.push(character);
      continue;
    }
    try {
      strokeData[character] = await fetchSvg(character);
      process.stdout.write(`✓ ${character}\n`);
    } catch (error) {
      missing.push({ character, error: error.message });
      process.stdout.write(`✗ ${character}: ${error.message}\n`);
    }
  }

  const audit = {
    generatedAt: new Date().toISOString(),
    source: 'https://github.com/KanjiVG/kanjivg',
    totalItems: characters.length,
    kanji: characters.length - special.length,
    available: Object.keys(strokeData).length,
    missing,
    special
  };

  await mkdir(OUTPUT_DIR, { recursive: true });
  const header = `/* KanjiVG data © Ulrich Apel, CC BY-SA 3.0. https://kanjivg.tagaini.net/ */\n`;
  await writeFile(OUTPUT_FILE, `${header}window.KanjiVGStrokeData=${JSON.stringify(strokeData)};\n`);
  await writeFile(AUDIT_FILE, `${JSON.stringify(audit, null, 2)}\n`);

  console.log(`\nCoverage: ${audit.available}/${audit.kanji} kanji; ${special.length} special; ${missing.length} missing.`);
  if (missing.length) process.exitCode = 1;
}

await main();
