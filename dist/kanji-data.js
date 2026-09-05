(function () {
  'use strict';
  const characters = `四 五 六 七 八 九 十 百 千 万 円 日 月 火 水 木 金 土 王 山 田 川 人 力 男 父 女 母 子 好 方 々 小 少 中 大 夕 多 内 外 上 下 工 左 右 家 入 出 門 開 閉 所 近 口 耳 目 手 心 寺 時 半 間 分 今 何 年 回 毎 聞 見 思 言 語 話 会 生 先 私 友 学 校 本 字 文 対 書 化 公 立 犬 鳥 馬 羊 牛 魚 虫 米 来 番 行 待 持 帰 白 良 食 物 雨 雪 電 風 元 天 気 石 早 草 花 林 森 旅 車 首 道 駅 町 市 京 玉 国 北 南 西 東 足 走 起 止 正 歩 休 体 指 背 自 鼻 寝 新 古 美 若 長 太 高 安 楽 明 広 有 前 名 後 族 様 主 未 姉 妹 兄 弟 住 室 部 屋 和 洋 知 科 教 枚 英 音`.split(' ');
  const meanings = `four|five|six|seven|eight|nine|ten|hundred|thousand|ten thousand|yen; circle|day; sun|month; moon|fire|water|tree; wood|gold; money|earth; soil|king|mountain|rice field|river|person|power|man|father|woman|mother|child|like|direction|repetition mark|small|few|middle; inside|big|evening|many|inside|outside|up; above|down; below|craft|left|right|home|enter|exit|gate|open|close|place|near|mouth|ear|eye|hand|heart|temple|time|half|interval|minute; part|now|what|year|times|every|hear; listen|see|think|say|language|speak|meet|life; birth|before|I; private|friend|study|school|book; origin|character|sentence|opposite|write|change|public|stand|dog|bird|horse|sheep|cow|fish|insect|rice|come|number; turn|go|wait|hold|return|white|good|eat|thing|rain|snow|electricity|wind|origin|sky; heaven|spirit; weather|stone|early|grass|flower|woods|forest|travel|car|neck|road|station|town|city|capital|jewel|country|north|south|west|east|foot|run|rise|stop|correct|walk|rest|body|finger|back|self|nose|sleep|new|old|beautiful|young|long|thick; fat|high|safe; cheap|fun|bright|wide|have|front|name|behind|family; tribe|manner|main|not yet|older sister|younger sister|older brother|younger brother|live|room|section|roof; shop|harmony|western|know|science|teach|counter for flat objects|English|sound`.split('|');
  const details = {
    '四': ['シ','よん、よ、よっ','shi','yon, yo, yottsu',5,'囗',['四月 (しがつ) — April','四人 (よにん) — four people']],
    '五': ['ゴ','いつ、いつつ','go','itsu, itsutsu',4,'二',['五月 (ごがつ) — May','五人 (ごにん) — five people']],
    '六': ['ロク','む、むつ、むい','roku','mu, mutsu, mui',4,'八',['六月 (ろくがつ) — June','六日 (むいか) — sixth day']],
    '七': ['シチ','なな、なの','shichi','nana, nano',2,'一',['七月 (しちがつ) — July','七日 (なのか) — seventh day']],
    '八': ['ハチ','や、やつ、よう','hachi','ya, yatsu, you',2,'八',['八月 (はちがつ) — August','八日 (ようか) — eighth day']],
    '九': ['キュウ、ク','ここの','kyuu, ku','kokono',2,'乙',['九月 (くがつ) — September','九日 (ここのか) — ninth day']],
    '十': ['ジュウ','とお、と','juu','too, to',2,'十',['十月 (じゅうがつ) — October','十日 (とおか) — tenth day']],
    '日': ['ニチ、ジツ','ひ、か','nichi, jitsu','hi, ka',4,'日',['日本 (にほん) — Japan','日曜日 (にちようび) — Sunday']],
    '月': ['ゲツ、ガツ','つき','getsu, gatsu','tsuki',4,'月',['月曜日 (げつようび) — Monday','一月 (いちがつ) — January']],
    '火': ['カ','ひ','ka','hi',4,'火',['火山 (かざん) — volcano','火曜日 (かようび) — Tuesday']],
    '水': ['スイ','みず','sui','mizu',4,'水',['水曜日 (すいようび) — Wednesday','水 (みず) — water']],
    '木': ['モク、ボク','き','moku, boku','ki',4,'木',['木曜日 (もくようび) — Thursday','木 (き) — tree']],
    '金': ['キン、コン','かね','kin, kon','kane',8,'金',['金曜日 (きんようび) — Friday','お金 (おかね) — money']],
    '土': ['ド、ト','つち','do, to','tsuchi',3,'土',['土曜日 (どようび) — Saturday','土 (つち) — soil']],
    '山': ['サン','やま','san','yama',3,'山',['山 (やま) — mountain','火山 (かざん) — volcano']],
    '川': ['セン','かわ','sen','kawa',3,'川',['川 (かわ) — river','小川 (おがわ) — stream']],
    '人': ['ジン、ニン','ひと','jin, nin','hito',2,'人',['日本人 (にほんじん) — Japanese person','人々 (ひとびと) — people']],
    '々': ['—','—','—','—',null,'—',['人々 (ひとびと) — people','時々 (ときどき) — sometimes'],'Repeats the previous kanji.']
  };
  const data = characters.map((kanji, index) => {
    const d = details[kanji] || ['—','—','—','—',null,'—',[]];
    return { id: index + 1, kanji, meaning: meanings[index] || '—', onyomi: d[0], kunyomi: d[1], onRomaji: d[2], kunRomaji: d[3], strokeCount: d[4], radical: d[5], examples: d[6], description: d[7] || '', strokes: null };
  });
  window.KanjiGardenData = Object.freeze(data);
}());
