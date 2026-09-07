'use strict';

const CACHE_NAME = 'kanji-garden-shell-v4';
const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './kanji-data.js',
  './progress.js',
  './stroke-data/kanjivg-strokes.js',
  './tracing.js',
  './app.js',
  './pwa.js',
  './manifest.webmanifest',
  './assets/pig-mascot.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './og.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(APP_SHELL.map(function (path) {
          return new Request(new URL(path, self.registration.scope), { cache: 'reload' });
        }));
      })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (names) {
        return Promise.all(names.filter(function (name) {
          return name.startsWith('kanji-garden-') && name !== CACHE_NAME;
        }).map(function (name) { return caches.delete(name); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(function (response) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(request, copy); });
          return response;
        })
        .catch(function () {
          return caches.match(request, { ignoreSearch: true })
            .then(function (cached) { return cached || caches.match('./index.html'); });
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then(function (cached) {
      const update = fetch(request).then(function (response) {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(request, copy); });
        }
        return response;
      }).catch(function () { return cached; });
      return cached || update;
    })
  );
});
