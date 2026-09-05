// Readings, meanings, stroke counts, and radicals are based on EDRDG KANJIDIC2 (2026-09-05).
// Example vocabulary is checked against EDRDG JMdict and curated for young learners.
(function () {
  'use strict';
  const data = [
  {
    "onyomi": "シ",
    "kunyomi": "よん、よつ",
    "onRomaji": "shi",
    "kunRomaji": "yon, yotsu",
    "meaning": "four",
    "strokeCount": 5,
    "radical": "囗",
    "id": 1,
    "kanji": "四",
    "examples": [
      "四月 (しがつ) — April",
      "四人 (よにん) — four people"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ゴ",
    "kunyomi": "いつ、いつつ",
    "onRomaji": "go",
    "kunRomaji": "itsu, itsutsu",
    "meaning": "five",
    "strokeCount": 4,
    "radical": "二",
    "id": 2,
    "kanji": "五",
    "examples": [
      "五月 (ごがつ) — May",
      "五人 (ごにん) — five people"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ロク",
    "kunyomi": "む、むつ",
    "onRomaji": "roku",
    "kunRomaji": "mu, mutsu",
    "meaning": "six",
    "strokeCount": 4,
    "radical": "八",
    "id": 3,
    "kanji": "六",
    "examples": [
      "六月 (ろくがつ) — June",
      "六日 (むいか) — the sixth day"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シチ",
    "kunyomi": "なな、ななつ",
    "onRomaji": "shichi",
    "kunRomaji": "nana, nanatsu",
    "meaning": "seven",
    "strokeCount": 2,
    "radical": "一",
    "id": 4,
    "kanji": "七",
    "examples": [
      "七月 (しちがつ) — July",
      "七日 (なのか) — the seventh day"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ハチ",
    "kunyomi": "や、やつ",
    "onRomaji": "hachi",
    "kunRomaji": "ya, yatsu",
    "meaning": "eight",
    "strokeCount": 2,
    "radical": "八",
    "id": 5,
    "kanji": "八",
    "examples": [
      "八月 (はちがつ) — August",
      "八日 (ようか) — the eighth day"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "キュウ",
    "kunyomi": "ここの、ここのつ",
    "onRomaji": "kyuu",
    "kunRomaji": "kokono, kokonotsu",
    "meaning": "nine",
    "strokeCount": 2,
    "radical": "乙",
    "id": 6,
    "kanji": "九",
    "examples": [
      "九月 (くがつ) — September",
      "九日 (ここのか) — the ninth day"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ジュウ",
    "kunyomi": "とお、と",
    "onRomaji": "juu",
    "kunRomaji": "too, to",
    "meaning": "ten",
    "strokeCount": 2,
    "radical": "十",
    "id": 7,
    "kanji": "十",
    "examples": [
      "十月 (じゅうがつ) — October",
      "十日 (とおか) — the tenth day"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ヒャク",
    "kunyomi": "—",
    "onRomaji": "hyaku",
    "kunRomaji": "—",
    "meaning": "hundred",
    "strokeCount": 6,
    "radical": "白",
    "id": 8,
    "kanji": "百",
    "examples": [
      "百円 (ひゃくえん) — one hundred yen",
      "百人 (ひゃくにん) — one hundred people"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "セン",
    "kunyomi": "—",
    "onRomaji": "sen",
    "kunRomaji": "—",
    "meaning": "thousand",
    "strokeCount": 3,
    "radical": "十",
    "id": 9,
    "kanji": "千",
    "examples": [
      "千円 (せんえん) — one thousand yen",
      "千人 (せんにん) — one thousand people"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "マン",
    "kunyomi": "—",
    "onRomaji": "man",
    "kunRomaji": "—",
    "meaning": "ten thousand",
    "strokeCount": 3,
    "radical": "一",
    "id": 10,
    "kanji": "万",
    "examples": [
      "一万 (いちまん) — ten thousand",
      "万円 (まんえん) — ten thousand yen"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "エン",
    "kunyomi": "まるい、まる",
    "onRomaji": "en",
    "kunRomaji": "marui, maru",
    "meaning": "yen; circle",
    "strokeCount": 4,
    "radical": "冂",
    "id": 11,
    "kanji": "円",
    "examples": [
      "円 (えん) — yen",
      "円形 (えんけい) — circle"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ニチ、ジツ",
    "kunyomi": "ひ、か",
    "onRomaji": "nichi, jitsu",
    "kunRomaji": "hi, ka",
    "meaning": "day; sun",
    "strokeCount": 4,
    "radical": "日",
    "id": 12,
    "kanji": "日",
    "examples": [
      "日本 (にほん) — Japan",
      "日曜日 (にちようび) — Sunday"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ゲツ、ガツ",
    "kunyomi": "つき",
    "onRomaji": "getsu, gatsu",
    "kunRomaji": "tsuki",
    "meaning": "month; moon",
    "strokeCount": 4,
    "radical": "月",
    "id": 13,
    "kanji": "月",
    "examples": [
      "月曜日 (げつようび) — Monday",
      "一月 (いちがつ) — January"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "カ",
    "kunyomi": "ひ、び",
    "onRomaji": "ka",
    "kunRomaji": "hi, bi",
    "meaning": "fire",
    "strokeCount": 4,
    "radical": "火",
    "id": 14,
    "kanji": "火",
    "examples": [
      "火山 (かざん) — volcano",
      "火曜日 (かようび) — Tuesday"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "スイ",
    "kunyomi": "みず",
    "onRomaji": "sui",
    "kunRomaji": "mizu",
    "meaning": "water",
    "strokeCount": 4,
    "radical": "水",
    "id": 15,
    "kanji": "水",
    "examples": [
      "水曜日 (すいようび) — Wednesday",
      "水田 (すいでん) — rice paddy"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "モク、ボク",
    "kunyomi": "き、こ",
    "onRomaji": "moku, boku",
    "kunRomaji": "ki, ko",
    "meaning": "tree; wood",
    "strokeCount": 4,
    "radical": "木",
    "id": 16,
    "kanji": "木",
    "examples": [
      "木曜日 (もくようび) — Thursday",
      "大木 (たいぼく) — large tree"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "キン",
    "kunyomi": "かね",
    "onRomaji": "kin",
    "kunRomaji": "kane",
    "meaning": "gold; money",
    "strokeCount": 8,
    "radical": "金",
    "id": 17,
    "kanji": "金",
    "examples": [
      "金曜日 (きんようび) — Friday",
      "お金 (おかね) — money"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ド",
    "kunyomi": "つち",
    "onRomaji": "do",
    "kunRomaji": "tsuchi",
    "meaning": "earth; soil",
    "strokeCount": 3,
    "radical": "土",
    "id": 18,
    "kanji": "土",
    "examples": [
      "土曜日 (どようび) — Saturday",
      "土地 (とち) — land"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "オウ",
    "kunyomi": "—",
    "onRomaji": "ou",
    "kunRomaji": "—",
    "meaning": "king",
    "strokeCount": 4,
    "radical": "玉",
    "id": 19,
    "kanji": "王",
    "examples": [
      "王子 (おうじ) — prince",
      "女王 (じょおう) — queen"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "サン",
    "kunyomi": "やま",
    "onRomaji": "san",
    "kunRomaji": "yama",
    "meaning": "mountain",
    "strokeCount": 3,
    "radical": "山",
    "id": 20,
    "kanji": "山",
    "examples": [
      "山 (やま) — mountain",
      "火山 (かざん) — volcano",
      "山道 (やまみち) — mountain path"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "デン",
    "kunyomi": "た",
    "onRomaji": "den",
    "kunRomaji": "ta",
    "meaning": "rice field",
    "strokeCount": 5,
    "radical": "田",
    "id": 21,
    "kanji": "田",
    "examples": [
      "田んぼ (たんぼ) — rice field",
      "水田 (すいでん) — rice paddy"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "セン",
    "kunyomi": "かわ",
    "onRomaji": "sen",
    "kunRomaji": "kawa",
    "meaning": "river",
    "strokeCount": 3,
    "radical": "川 / 巛",
    "id": 22,
    "kanji": "川",
    "examples": [
      "川 (かわ) — river",
      "小川 (おがわ) — stream"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ジン、ニン",
    "kunyomi": "ひと",
    "onRomaji": "jin, nin",
    "kunRomaji": "hito",
    "meaning": "person",
    "strokeCount": 2,
    "radical": "人",
    "id": 23,
    "kanji": "人",
    "examples": [
      "一人 (ひとり) — one person",
      "日本人 (にほんじん) — Japanese person"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "リョク",
    "kunyomi": "ちから",
    "onRomaji": "ryoku",
    "kunRomaji": "chikara",
    "meaning": "power",
    "strokeCount": 2,
    "radical": "力",
    "id": 24,
    "kanji": "力",
    "examples": [
      "力 (ちから) — strength",
      "力持ち (ちからもち) — strong person"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ダン",
    "kunyomi": "おとこ",
    "onRomaji": "dan",
    "kunRomaji": "otoko",
    "meaning": "man",
    "strokeCount": 7,
    "radical": "田",
    "id": 25,
    "kanji": "男",
    "examples": [
      "男の子 (おとこのこ) — boy",
      "男性 (だんせい) — man"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "フ",
    "kunyomi": "ちち",
    "onRomaji": "fu",
    "kunRomaji": "chichi",
    "meaning": "father",
    "strokeCount": 4,
    "radical": "父",
    "id": 26,
    "kanji": "父",
    "examples": [
      "父 (ちち) — father",
      "お父さん (おとうさん) — dad"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ジョ",
    "kunyomi": "おんな",
    "onRomaji": "jo",
    "kunRomaji": "onna",
    "meaning": "woman",
    "strokeCount": 3,
    "radical": "女",
    "id": 27,
    "kanji": "女",
    "examples": [
      "女の子 (おんなのこ) — girl",
      "女性 (じょせい) — woman"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ボ",
    "kunyomi": "はは",
    "onRomaji": "bo",
    "kunRomaji": "haha",
    "meaning": "mother",
    "strokeCount": 5,
    "radical": "毋",
    "id": 28,
    "kanji": "母",
    "examples": [
      "母 (はは) — mother",
      "お母さん (おかあさん) — mom"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シ",
    "kunyomi": "こ、ね",
    "onRomaji": "shi",
    "kunRomaji": "ko, ne",
    "meaning": "child",
    "strokeCount": 3,
    "radical": "子",
    "id": 29,
    "kanji": "子",
    "examples": [
      "子ども (こども) — child",
      "男の子 (おとこのこ) — boy"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "コウ",
    "kunyomi": "このむ、すく",
    "onRomaji": "kou",
    "kunRomaji": "konomu, suku",
    "meaning": "like",
    "strokeCount": 6,
    "radical": "女",
    "id": 30,
    "kanji": "好",
    "examples": [
      "好き (すき) — liked",
      "大好き (だいすき) — love very much"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ホウ",
    "kunyomi": "かた",
    "onRomaji": "hou",
    "kunRomaji": "kata",
    "meaning": "direction; way",
    "strokeCount": 4,
    "radical": "方",
    "id": 31,
    "kanji": "方",
    "examples": [
      "夕方 (ゆうがた) — evening",
      "方角 (ほうがく) — direction"
    ],
    "description": "",
    "strokes": null
  },
  {
    "meaning": "repetition mark",
    "id": 32,
    "kanji": "々",
    "examples": [
      "人々 (ひとびと) — people",
      "時々 (ときどき) — sometimes"
    ],
    "description": "Repeats the previous kanji.",
    "strokes": null,
    "onyomi": "—",
    "kunyomi": "—",
    "onRomaji": "—",
    "kunRomaji": "—",
    "strokeCount": null,
    "radical": "—"
  },
  {
    "onyomi": "ショウ",
    "kunyomi": "ちいさい、こ",
    "onRomaji": "shou",
    "kunRomaji": "chiisai, ko",
    "meaning": "small",
    "strokeCount": 3,
    "radical": "小",
    "id": 33,
    "kanji": "小",
    "examples": [
      "小さい (ちいさい) — small",
      "小学校 (しょうがっこう) — elementary school"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ショウ",
    "kunyomi": "すくない、すこし",
    "onRomaji": "shou",
    "kunRomaji": "sukunai, sukoshi",
    "meaning": "few",
    "strokeCount": 4,
    "radical": "小",
    "id": 34,
    "kanji": "少",
    "examples": [
      "少ない (すくない) — few",
      "少し (すこし) — a little"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "チュウ",
    "kunyomi": "なか、うち",
    "onRomaji": "chuu",
    "kunRomaji": "naka, uchi",
    "meaning": "middle; inside",
    "strokeCount": 4,
    "radical": "丨",
    "id": 35,
    "kanji": "中",
    "examples": [
      "中 (なか) — inside",
      "中学校 (ちゅうがっこう) — junior high school"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ダイ、タイ",
    "kunyomi": "おおきい、おお",
    "onRomaji": "dai, tai",
    "kunRomaji": "ookii, oo",
    "meaning": "big",
    "strokeCount": 3,
    "radical": "大",
    "id": 36,
    "kanji": "大",
    "examples": [
      "大きい (おおきい) — big",
      "大学 (だいがく) — university"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "セキ",
    "kunyomi": "ゆう",
    "onRomaji": "seki",
    "kunRomaji": "yuu",
    "meaning": "evening",
    "strokeCount": 3,
    "radical": "夕",
    "id": 37,
    "kanji": "夕",
    "examples": [
      "夕方 (ゆうがた) — evening",
      "夕日 (ゆうひ) — evening sun"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "タ",
    "kunyomi": "おおい、まさに",
    "onRomaji": "ta",
    "kunRomaji": "ooi, masani",
    "meaning": "many",
    "strokeCount": 6,
    "radical": "夕",
    "id": 38,
    "kanji": "多",
    "examples": [
      "多い (おおい) — many",
      "多分 (たぶん) — probably"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ナイ",
    "kunyomi": "うち",
    "onRomaji": "nai",
    "kunRomaji": "uchi",
    "meaning": "inside",
    "strokeCount": 4,
    "radical": "冂",
    "id": 39,
    "kanji": "内",
    "examples": [
      "室内 (しつない) — indoors",
      "国内 (こくない) — within the country"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ガイ",
    "kunyomi": "そと、ほか",
    "onRomaji": "gai",
    "kunRomaji": "soto, hoka",
    "meaning": "outside",
    "strokeCount": 5,
    "radical": "夕",
    "id": 40,
    "kanji": "外",
    "examples": [
      "外 (そと) — outside",
      "外国 (がいこく) — foreign country"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ジョウ",
    "kunyomi": "うえ、あげる",
    "onRomaji": "jou",
    "kunRomaji": "ue, ageru",
    "meaning": "up; above",
    "strokeCount": 3,
    "radical": "一",
    "id": 41,
    "kanji": "上",
    "examples": [
      "上 (うえ) — above",
      "上手 (じょうず) — skillful"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "カ",
    "kunyomi": "した、さげる",
    "onRomaji": "ka",
    "kunRomaji": "shita, sageru",
    "meaning": "down; below",
    "strokeCount": 3,
    "radical": "一",
    "id": 42,
    "kanji": "下",
    "examples": [
      "下 (した) — below",
      "地下 (ちか) — underground"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "コウ、ク",
    "kunyomi": "—",
    "onRomaji": "kou, ku",
    "kunRomaji": "—",
    "meaning": "craft",
    "strokeCount": 3,
    "radical": "工",
    "id": 43,
    "kanji": "工",
    "examples": [
      "工作 (こうさく) — crafts",
      "大工 (だいく) — carpenter"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "サ",
    "kunyomi": "ひだり",
    "onRomaji": "sa",
    "kunRomaji": "hidari",
    "meaning": "left",
    "strokeCount": 5,
    "radical": "工",
    "id": 44,
    "kanji": "左",
    "examples": [
      "左 (ひだり) — left",
      "左手 (ひだりて) — left hand"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ウ、ユウ",
    "kunyomi": "みぎ",
    "onRomaji": "u, yuu",
    "kunRomaji": "migi",
    "meaning": "right",
    "strokeCount": 5,
    "radical": "口",
    "id": 45,
    "kanji": "右",
    "examples": [
      "右 (みぎ) — right",
      "右手 (みぎて) — right hand"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "カ",
    "kunyomi": "いえ、うち",
    "onRomaji": "ka",
    "kunRomaji": "ie, uchi",
    "meaning": "home",
    "strokeCount": 10,
    "radical": "宀",
    "id": 46,
    "kanji": "家",
    "examples": [
      "家 (いえ) — home",
      "家族 (かぞく) — family"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ニュウ",
    "kunyomi": "はいる、いれる",
    "onRomaji": "nyuu",
    "kunRomaji": "hairu, ireru",
    "meaning": "enter",
    "strokeCount": 2,
    "radical": "入",
    "id": 47,
    "kanji": "入",
    "examples": [
      "入る (はいる) — to enter",
      "入口 (いりぐち) — entrance"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シュツ",
    "kunyomi": "でる、だす",
    "onRomaji": "shutsu",
    "kunRomaji": "deru, dasu",
    "meaning": "exit",
    "strokeCount": 5,
    "radical": "凵",
    "id": 48,
    "kanji": "出",
    "examples": [
      "出る (でる) — to go out",
      "出口 (でぐち) — exit"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "モン",
    "kunyomi": "かど",
    "onRomaji": "mon",
    "kunRomaji": "kado",
    "meaning": "gate",
    "strokeCount": 8,
    "radical": "門",
    "id": 49,
    "kanji": "門",
    "examples": [
      "門 (もん) — gate",
      "校門 (こうもん) — school gate"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "カイ",
    "kunyomi": "あける、ひらく",
    "onRomaji": "kai",
    "kunRomaji": "akeru, hiraku",
    "meaning": "open",
    "strokeCount": 12,
    "radical": "門",
    "id": 50,
    "kanji": "開",
    "examples": [
      "開ける (あける) — to open",
      "開店 (かいてん) — opening a shop"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ヘイ",
    "kunyomi": "しめる、とじる",
    "onRomaji": "hei",
    "kunRomaji": "shimeru, tojiru",
    "meaning": "close",
    "strokeCount": 11,
    "radical": "門",
    "id": 51,
    "kanji": "閉",
    "examples": [
      "閉める (しめる) — to close",
      "閉店 (へいてん) — shop closing"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ショ",
    "kunyomi": "ところ、どころ",
    "onRomaji": "sho",
    "kunRomaji": "tokoro, dokoro",
    "meaning": "place",
    "strokeCount": 8,
    "radical": "戸 / 戶",
    "id": 52,
    "kanji": "所",
    "examples": [
      "場所 (ばしょ) — place",
      "台所 (だいどころ) — kitchen"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "キン",
    "kunyomi": "ちかい",
    "onRomaji": "kin",
    "kunRomaji": "chikai",
    "meaning": "near",
    "strokeCount": 7,
    "radical": "辵 / 辶",
    "id": 53,
    "kanji": "近",
    "examples": [
      "近い (ちかい) — near",
      "近所 (きんじょ) — neighborhood"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "コウ",
    "kunyomi": "くち",
    "onRomaji": "kou",
    "kunRomaji": "kuchi",
    "meaning": "mouth",
    "strokeCount": 3,
    "radical": "口",
    "id": 54,
    "kanji": "口",
    "examples": [
      "口 (くち) — mouth",
      "入口 (いりぐち) — entrance"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ジ",
    "kunyomi": "みみ",
    "onRomaji": "ji",
    "kunRomaji": "mimi",
    "meaning": "ear",
    "strokeCount": 6,
    "radical": "耳",
    "id": 55,
    "kanji": "耳",
    "examples": [
      "耳 (みみ) — ear",
      "耳元 (みみもと) — near the ear"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "モク",
    "kunyomi": "め",
    "onRomaji": "moku",
    "kunRomaji": "me",
    "meaning": "eye",
    "strokeCount": 5,
    "radical": "目",
    "id": 56,
    "kanji": "目",
    "examples": [
      "目 (め) — eye",
      "目的 (もくてき) — purpose"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シュ",
    "kunyomi": "て、た",
    "onRomaji": "shu",
    "kunRomaji": "te, ta",
    "meaning": "hand",
    "strokeCount": 4,
    "radical": "手",
    "id": 57,
    "kanji": "手",
    "examples": [
      "手 (て) — hand",
      "上手 (じょうず) — skillful"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シン",
    "kunyomi": "こころ、ごころ",
    "onRomaji": "shin",
    "kunRomaji": "kokoro, gokoro",
    "meaning": "heart",
    "strokeCount": 4,
    "radical": "心",
    "id": 58,
    "kanji": "心",
    "examples": [
      "心 (こころ) — heart",
      "安心 (あんしん) — relief"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ジ",
    "kunyomi": "てら",
    "onRomaji": "ji",
    "kunRomaji": "tera",
    "meaning": "temple",
    "strokeCount": 6,
    "radical": "寸",
    "id": 59,
    "kanji": "寺",
    "examples": [
      "寺 (てら) — temple",
      "お寺 (おてら) — Buddhist temple"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ジ",
    "kunyomi": "とき、どき",
    "onRomaji": "ji",
    "kunRomaji": "toki, doki",
    "meaning": "time",
    "strokeCount": 10,
    "radical": "日",
    "id": 60,
    "kanji": "時",
    "examples": [
      "時間 (じかん) — time",
      "時計 (とけい) — clock"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ハン",
    "kunyomi": "なかば",
    "onRomaji": "han",
    "kunRomaji": "nakaba",
    "meaning": "half",
    "strokeCount": 5,
    "radical": "十",
    "id": 61,
    "kanji": "半",
    "examples": [
      "半分 (はんぶん) — half",
      "半年 (はんとし) — half a year"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "カン",
    "kunyomi": "あいだ、ま",
    "onRomaji": "kan",
    "kunRomaji": "aida, ma",
    "meaning": "interval",
    "strokeCount": 12,
    "radical": "門",
    "id": 62,
    "kanji": "間",
    "examples": [
      "時間 (じかん) — time",
      "人間 (にんげん) — human being"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ブン",
    "kunyomi": "わける、わけ",
    "onRomaji": "bun",
    "kunRomaji": "wakeru, wake",
    "meaning": "minute; part",
    "strokeCount": 4,
    "radical": "刀",
    "id": 63,
    "kanji": "分",
    "examples": [
      "半分 (はんぶん) — half",
      "自分 (じぶん) — oneself"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "コン",
    "kunyomi": "いま",
    "onRomaji": "kon",
    "kunRomaji": "ima",
    "meaning": "now",
    "strokeCount": 4,
    "radical": "人",
    "id": 64,
    "kanji": "今",
    "examples": [
      "今 (いま) — now",
      "今日 (きょう) — today"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "カ",
    "kunyomi": "なに、なん",
    "onRomaji": "ka",
    "kunRomaji": "nani, nan",
    "meaning": "what",
    "strokeCount": 7,
    "radical": "人",
    "id": 65,
    "kanji": "何",
    "examples": [
      "何 (なに) — what",
      "何人 (なんにん) — how many people"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ネン",
    "kunyomi": "とし",
    "onRomaji": "nen",
    "kunRomaji": "toshi",
    "meaning": "year",
    "strokeCount": 6,
    "radical": "干",
    "id": 66,
    "kanji": "年",
    "examples": [
      "今年 (ことし) — this year",
      "一年 (いちねん) — one year"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "カイ",
    "kunyomi": "まわる、まわり",
    "onRomaji": "kai",
    "kunRomaji": "mawaru, mawari",
    "meaning": "times",
    "strokeCount": 6,
    "radical": "囗",
    "id": 67,
    "kanji": "回",
    "examples": [
      "一回 (いっかい) — once",
      "今回 (こんかい) — this time"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "マイ",
    "kunyomi": "ごと、ごとに",
    "onRomaji": "mai",
    "kunRomaji": "goto, gotoni",
    "meaning": "every",
    "strokeCount": 6,
    "radical": "毋",
    "id": 68,
    "kanji": "毎",
    "examples": [
      "毎日 (まいにち) — every day",
      "毎年 (まいとし) — every year"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ブン",
    "kunyomi": "きく、きこえる",
    "onRomaji": "bun",
    "kunRomaji": "kiku, kikoeru",
    "meaning": "hear; listen",
    "strokeCount": 14,
    "radical": "耳",
    "id": 69,
    "kanji": "聞",
    "examples": [
      "聞く (きく) — to listen",
      "新聞 (しんぶん) — newspaper"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ケン",
    "kunyomi": "みる、みえる",
    "onRomaji": "ken",
    "kunRomaji": "miru, mieru",
    "meaning": "see",
    "strokeCount": 7,
    "radical": "見",
    "id": 70,
    "kanji": "見",
    "examples": [
      "見る (みる) — to see",
      "花見 (はなみ) — flower viewing"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シ",
    "kunyomi": "おもう",
    "onRomaji": "shi",
    "kunRomaji": "omou",
    "meaning": "think",
    "strokeCount": 9,
    "radical": "心",
    "id": 71,
    "kanji": "思",
    "examples": [
      "思う (おもう) — to think",
      "思い出 (おもいで) — memory"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ゲン",
    "kunyomi": "いう、こと",
    "onRomaji": "gen",
    "kunRomaji": "iu, koto",
    "meaning": "say",
    "strokeCount": 7,
    "radical": "言",
    "id": 72,
    "kanji": "言",
    "examples": [
      "言う (いう) — to say",
      "言葉 (ことば) — word"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ゴ",
    "kunyomi": "かたる、かたらう",
    "onRomaji": "go",
    "kunRomaji": "kataru, katarau",
    "meaning": "language",
    "strokeCount": 14,
    "radical": "言",
    "id": 73,
    "kanji": "語",
    "examples": [
      "日本語 (にほんご) — Japanese language",
      "英語 (えいご) — English"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ワ",
    "kunyomi": "はなす、はなし",
    "onRomaji": "wa",
    "kunRomaji": "hanasu, hanashi",
    "meaning": "speak",
    "strokeCount": 13,
    "radical": "言",
    "id": 74,
    "kanji": "話",
    "examples": [
      "話す (はなす) — to speak",
      "電話 (でんわ) — telephone"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "カイ",
    "kunyomi": "あう、あわせる",
    "onRomaji": "kai",
    "kunRomaji": "au, awaseru",
    "meaning": "meet",
    "strokeCount": 6,
    "radical": "人",
    "id": 75,
    "kanji": "会",
    "examples": [
      "会う (あう) — to meet",
      "会社 (かいしゃ) — company"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "セイ、ショウ",
    "kunyomi": "いきる、うまれる、なま",
    "onRomaji": "sei, shou",
    "kunRomaji": "ikiru, umareru, nama",
    "meaning": "life; birth",
    "strokeCount": 5,
    "radical": "生",
    "id": 76,
    "kanji": "生",
    "examples": [
      "生きる (いきる) — to live",
      "学生 (がくせい) — student"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "セン",
    "kunyomi": "さき、まず",
    "onRomaji": "sen",
    "kunRomaji": "saki, mazu",
    "meaning": "before",
    "strokeCount": 6,
    "radical": "儿",
    "id": 77,
    "kanji": "先",
    "examples": [
      "先生 (せんせい) — teacher",
      "先週 (せんしゅう) — last week"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シ",
    "kunyomi": "わたくし、わたし",
    "onRomaji": "shi",
    "kunRomaji": "watakushi, watashi",
    "meaning": "I; private",
    "strokeCount": 7,
    "radical": "禾",
    "id": 78,
    "kanji": "私",
    "examples": [
      "私 (わたし) — I",
      "私立 (しりつ) — private"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ユウ",
    "kunyomi": "とも",
    "onRomaji": "yuu",
    "kunRomaji": "tomo",
    "meaning": "friend",
    "strokeCount": 4,
    "radical": "又",
    "id": 79,
    "kanji": "友",
    "examples": [
      "友だち (ともだち) — friend",
      "友人 (ゆうじん) — friend"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ガク",
    "kunyomi": "まなぶ",
    "onRomaji": "gaku",
    "kunRomaji": "manabu",
    "meaning": "study",
    "strokeCount": 8,
    "radical": "子",
    "id": 80,
    "kanji": "学",
    "examples": [
      "学校 (がっこう) — school",
      "学ぶ (まなぶ) — to learn"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "コウ",
    "kunyomi": "—",
    "onRomaji": "kou",
    "kunRomaji": "—",
    "meaning": "school",
    "strokeCount": 10,
    "radical": "木",
    "id": 81,
    "kanji": "校",
    "examples": [
      "学校 (がっこう) — school",
      "校門 (こうもん) — school gate"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ホン",
    "kunyomi": "もと",
    "onRomaji": "hon",
    "kunRomaji": "moto",
    "meaning": "book; origin",
    "strokeCount": 5,
    "radical": "木",
    "id": 82,
    "kanji": "本",
    "examples": [
      "本 (ほん) — book",
      "日本 (にほん) — Japan"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ジ",
    "kunyomi": "—",
    "onRomaji": "ji",
    "kunRomaji": "—",
    "meaning": "character",
    "strokeCount": 6,
    "radical": "子",
    "id": 83,
    "kanji": "字",
    "examples": [
      "文字 (もじ) — letter",
      "漢字 (かんじ) — kanji"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ブン",
    "kunyomi": "ふみ",
    "onRomaji": "bun",
    "kunRomaji": "fumi",
    "meaning": "sentence",
    "strokeCount": 4,
    "radical": "文",
    "id": 84,
    "kanji": "文",
    "examples": [
      "文章 (ぶんしょう) — sentence",
      "作文 (さくぶん) — composition"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "タイ",
    "kunyomi": "—",
    "onRomaji": "tai",
    "kunRomaji": "—",
    "meaning": "opposite",
    "strokeCount": 7,
    "radical": "寸",
    "id": 85,
    "kanji": "対",
    "examples": [
      "反対 (はんたい) — opposite",
      "対話 (たいわ) — dialogue"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ショ",
    "kunyomi": "かく",
    "onRomaji": "sho",
    "kunRomaji": "kaku",
    "meaning": "write",
    "strokeCount": 10,
    "radical": "曰",
    "id": 86,
    "kanji": "書",
    "examples": [
      "書く (かく) — to write",
      "図書館 (としょかん) — library"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "カ",
    "kunyomi": "ばける、ばかす",
    "onRomaji": "ka",
    "kunRomaji": "bakeru, bakasu",
    "meaning": "change",
    "strokeCount": 4,
    "radical": "匕",
    "id": 87,
    "kanji": "化",
    "examples": [
      "化学 (かがく) — chemistry",
      "文化 (ぶんか) — culture"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "コウ",
    "kunyomi": "おおやけ",
    "onRomaji": "kou",
    "kunRomaji": "ooyake",
    "meaning": "public",
    "strokeCount": 4,
    "radical": "八",
    "id": 88,
    "kanji": "公",
    "examples": [
      "公園 (こうえん) — park",
      "公立 (こうりつ) — public"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "リツ",
    "kunyomi": "たつ、たてる",
    "onRomaji": "ritsu",
    "kunRomaji": "tatsu, tateru",
    "meaning": "stand",
    "strokeCount": 5,
    "radical": "立",
    "id": 89,
    "kanji": "立",
    "examples": [
      "立つ (たつ) — to stand",
      "国立 (こくりつ) — national"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ケン",
    "kunyomi": "いぬ",
    "onRomaji": "ken",
    "kunRomaji": "inu",
    "meaning": "dog",
    "strokeCount": 4,
    "radical": "犬",
    "id": 90,
    "kanji": "犬",
    "examples": [
      "犬 (いぬ) — dog",
      "子犬 (こいぬ) — puppy"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "チョウ",
    "kunyomi": "とり",
    "onRomaji": "chou",
    "kunRomaji": "tori",
    "meaning": "bird",
    "strokeCount": 11,
    "radical": "鳥",
    "id": 91,
    "kanji": "鳥",
    "examples": [
      "鳥 (とり) — bird",
      "小鳥 (ことり) — small bird"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "バ",
    "kunyomi": "うま、ま",
    "onRomaji": "ba",
    "kunRomaji": "uma, ma",
    "meaning": "horse",
    "strokeCount": 10,
    "radical": "馬",
    "id": 92,
    "kanji": "馬",
    "examples": [
      "馬 (うま) — horse",
      "子馬 (こうま) — foal"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ヨウ",
    "kunyomi": "ひつじ",
    "onRomaji": "you",
    "kunRomaji": "hitsuji",
    "meaning": "sheep",
    "strokeCount": 6,
    "radical": "羊",
    "id": 93,
    "kanji": "羊",
    "examples": [
      "羊 (ひつじ) — sheep",
      "子羊 (こひつじ) — lamb"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ギュウ",
    "kunyomi": "うし",
    "onRomaji": "gyuu",
    "kunRomaji": "ushi",
    "meaning": "cow",
    "strokeCount": 4,
    "radical": "牛",
    "id": 94,
    "kanji": "牛",
    "examples": [
      "牛 (うし) — cow",
      "牛肉 (ぎゅうにく) — beef"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ギョ",
    "kunyomi": "うお、さかな",
    "onRomaji": "gyo",
    "kunRomaji": "uo, sakana",
    "meaning": "fish",
    "strokeCount": 11,
    "radical": "魚",
    "id": 95,
    "kanji": "魚",
    "examples": [
      "魚 (さかな) — fish",
      "金魚 (きんぎょ) — goldfish"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "チュウ",
    "kunyomi": "むし",
    "onRomaji": "chuu",
    "kunRomaji": "mushi",
    "meaning": "insect",
    "strokeCount": 6,
    "radical": "虫",
    "id": 96,
    "kanji": "虫",
    "examples": [
      "虫 (むし) — insect",
      "虫歯 (むしば) — cavity"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ベイ",
    "kunyomi": "こめ、よね",
    "onRomaji": "bei",
    "kunRomaji": "kome, yone",
    "meaning": "rice",
    "strokeCount": 6,
    "radical": "米",
    "id": 97,
    "kanji": "米",
    "examples": [
      "米 (こめ) — rice",
      "白米 (はくまい) — white rice"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ライ",
    "kunyomi": "くる",
    "onRomaji": "rai",
    "kunRomaji": "kuru",
    "meaning": "come",
    "strokeCount": 7,
    "radical": "木",
    "id": 98,
    "kanji": "来",
    "examples": [
      "来る (くる) — to come",
      "来年 (らいねん) — next year"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "バン",
    "kunyomi": "つがい",
    "onRomaji": "ban",
    "kunRomaji": "tsugai",
    "meaning": "number; turn",
    "strokeCount": 12,
    "radical": "田",
    "id": 99,
    "kanji": "番",
    "examples": [
      "一番 (いちばん) — number one",
      "番号 (ばんごう) — number"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "コウ、ギョウ",
    "kunyomi": "いく、おこなう",
    "onRomaji": "kou, gyou",
    "kunRomaji": "iku, okonau",
    "meaning": "go",
    "strokeCount": 6,
    "radical": "行",
    "id": 100,
    "kanji": "行",
    "examples": [
      "行く (いく) — to go",
      "旅行 (りょこう) — trip"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "タイ",
    "kunyomi": "まつ",
    "onRomaji": "tai",
    "kunRomaji": "matsu",
    "meaning": "wait",
    "strokeCount": 9,
    "radical": "彳",
    "id": 101,
    "kanji": "待",
    "examples": [
      "待つ (まつ) — to wait",
      "待ち時間 (まちじかん) — waiting time"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ジ",
    "kunyomi": "もつ",
    "onRomaji": "ji",
    "kunRomaji": "motsu",
    "meaning": "hold",
    "strokeCount": 9,
    "radical": "手 / 扌",
    "id": 102,
    "kanji": "持",
    "examples": [
      "持つ (もつ) — to hold",
      "気持ち (きもち) — feeling"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "キ",
    "kunyomi": "かえる",
    "onRomaji": "ki",
    "kunRomaji": "kaeru",
    "meaning": "return",
    "strokeCount": 10,
    "radical": "巾",
    "id": 103,
    "kanji": "帰",
    "examples": [
      "帰る (かえる) — to return",
      "帰国 (きこく) — return to one's country"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ハク",
    "kunyomi": "しろ、しら",
    "onRomaji": "haku",
    "kunRomaji": "shiro, shira",
    "meaning": "white",
    "strokeCount": 5,
    "radical": "白",
    "id": 104,
    "kanji": "白",
    "examples": [
      "白い (しろい) — white",
      "白鳥 (はくちょう) — swan"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "リョウ",
    "kunyomi": "よい、いい",
    "onRomaji": "ryou",
    "kunRomaji": "yoi, ii",
    "meaning": "good",
    "strokeCount": 7,
    "radical": "艮",
    "id": 105,
    "kanji": "良",
    "examples": [
      "良い (よい) — good",
      "仲良し (なかよし) — good friends"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ショク",
    "kunyomi": "たべる、くう",
    "onRomaji": "shoku",
    "kunRomaji": "taberu, kuu",
    "meaning": "eat",
    "strokeCount": 9,
    "radical": "食",
    "id": 106,
    "kanji": "食",
    "examples": [
      "食べる (たべる) — to eat",
      "食事 (しょくじ) — meal"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ブツ",
    "kunyomi": "もの",
    "onRomaji": "butsu",
    "kunRomaji": "mono",
    "meaning": "thing",
    "strokeCount": 8,
    "radical": "牛",
    "id": 107,
    "kanji": "物",
    "examples": [
      "物 (もの) — thing",
      "食べ物 (たべもの) — food"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ウ",
    "kunyomi": "あめ、あま",
    "onRomaji": "u",
    "kunRomaji": "ame, ama",
    "meaning": "rain",
    "strokeCount": 8,
    "radical": "雨",
    "id": 108,
    "kanji": "雨",
    "examples": [
      "雨 (あめ) — rain",
      "大雨 (おおあめ) — heavy rain"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "セツ",
    "kunyomi": "ゆき",
    "onRomaji": "setsu",
    "kunRomaji": "yuki",
    "meaning": "snow",
    "strokeCount": 11,
    "radical": "雨",
    "id": 109,
    "kanji": "雪",
    "examples": [
      "雪 (ゆき) — snow",
      "雪山 (ゆきやま) — snowy mountain"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "デン",
    "kunyomi": "—",
    "onRomaji": "den",
    "kunRomaji": "—",
    "meaning": "electricity",
    "strokeCount": 13,
    "radical": "雨",
    "id": 110,
    "kanji": "電",
    "examples": [
      "電気 (でんき) — electricity",
      "電話 (でんわ) — telephone"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "フウ、フ",
    "kunyomi": "かぜ、かざ",
    "onRomaji": "fuu, fu",
    "kunRomaji": "kaze, kaza",
    "meaning": "wind",
    "strokeCount": 9,
    "radical": "風",
    "id": 111,
    "kanji": "風",
    "examples": [
      "風 (かぜ) — wind",
      "台風 (たいふう) — typhoon"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ゲン、ガン",
    "kunyomi": "もと",
    "onRomaji": "gen, gan",
    "kunRomaji": "moto",
    "meaning": "origin",
    "strokeCount": 4,
    "radical": "儿",
    "id": 112,
    "kanji": "元",
    "examples": [
      "元気 (げんき) — well",
      "元日 (がんじつ) — New Year's Day"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "テン",
    "kunyomi": "あめ、あま",
    "onRomaji": "ten",
    "kunRomaji": "ame, ama",
    "meaning": "sky; heaven",
    "strokeCount": 4,
    "radical": "大",
    "id": 113,
    "kanji": "天",
    "examples": [
      "天気 (てんき) — weather",
      "天国 (てんごく) — heaven"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "キ",
    "kunyomi": "—",
    "onRomaji": "ki",
    "kunRomaji": "—",
    "meaning": "spirit; weather",
    "strokeCount": 6,
    "radical": "气",
    "id": 114,
    "kanji": "気",
    "examples": [
      "元気 (げんき) — well",
      "天気 (てんき) — weather"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "セキ",
    "kunyomi": "いし",
    "onRomaji": "seki",
    "kunRomaji": "ishi",
    "meaning": "stone",
    "strokeCount": 5,
    "radical": "石",
    "id": 115,
    "kanji": "石",
    "examples": [
      "石 (いし) — stone",
      "宝石 (ほうせき) — jewel"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ソウ",
    "kunyomi": "はやい",
    "onRomaji": "sou",
    "kunRomaji": "hayai",
    "meaning": "early",
    "strokeCount": 6,
    "radical": "日",
    "id": 116,
    "kanji": "早",
    "examples": [
      "早い (はやい) — early",
      "早起き (はやおき) — waking early"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ソウ",
    "kunyomi": "くさ、ぐさ",
    "onRomaji": "sou",
    "kunRomaji": "kusa, gusa",
    "meaning": "grass",
    "strokeCount": 9,
    "radical": "艸 / 艹",
    "id": 117,
    "kanji": "草",
    "examples": [
      "草 (くさ) — grass",
      "草花 (くさばな) — plants and flowers"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "カ",
    "kunyomi": "はな",
    "onRomaji": "ka",
    "kunRomaji": "hana",
    "meaning": "flower",
    "strokeCount": 7,
    "radical": "艸 / 艹",
    "id": 118,
    "kanji": "花",
    "examples": [
      "花 (はな) — flower",
      "花火 (はなび) — fireworks"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "リン",
    "kunyomi": "はやし",
    "onRomaji": "rin",
    "kunRomaji": "hayashi",
    "meaning": "woods",
    "strokeCount": 8,
    "radical": "木",
    "id": 119,
    "kanji": "林",
    "examples": [
      "林 (はやし) — woods",
      "山林 (さんりん) — mountain forest"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シン",
    "kunyomi": "もり",
    "onRomaji": "shin",
    "kunRomaji": "mori",
    "meaning": "forest",
    "strokeCount": 12,
    "radical": "木",
    "id": 120,
    "kanji": "森",
    "examples": [
      "森 (もり) — forest",
      "森林 (しんりん) — woodland"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "リョ",
    "kunyomi": "たび",
    "onRomaji": "ryo",
    "kunRomaji": "tabi",
    "meaning": "travel",
    "strokeCount": 10,
    "radical": "方",
    "id": 121,
    "kanji": "旅",
    "examples": [
      "旅 (たび) — journey",
      "旅行 (りょこう) — trip"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シャ",
    "kunyomi": "くるま",
    "onRomaji": "sha",
    "kunRomaji": "kuruma",
    "meaning": "car",
    "strokeCount": 7,
    "radical": "車",
    "id": 122,
    "kanji": "車",
    "examples": [
      "車 (くるま) — car",
      "電車 (でんしゃ) — train"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シュ",
    "kunyomi": "くび",
    "onRomaji": "shu",
    "kunRomaji": "kubi",
    "meaning": "neck",
    "strokeCount": 9,
    "radical": "首",
    "id": 123,
    "kanji": "首",
    "examples": [
      "首 (くび) — neck",
      "手首 (てくび) — wrist"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ドウ",
    "kunyomi": "みち",
    "onRomaji": "dou",
    "kunRomaji": "michi",
    "meaning": "road",
    "strokeCount": 12,
    "radical": "辵 / 辶",
    "id": 124,
    "kanji": "道",
    "examples": [
      "道 (みち) — road",
      "歩道 (ほどう) — sidewalk"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "エキ",
    "kunyomi": "—",
    "onRomaji": "eki",
    "kunRomaji": "—",
    "meaning": "station",
    "strokeCount": 14,
    "radical": "馬",
    "id": 125,
    "kanji": "駅",
    "examples": [
      "駅 (えき) — station",
      "駅前 (えきまえ) — in front of the station"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "チョウ",
    "kunyomi": "まち",
    "onRomaji": "chou",
    "kunRomaji": "machi",
    "meaning": "town",
    "strokeCount": 7,
    "radical": "田",
    "id": 126,
    "kanji": "町",
    "examples": [
      "町 (まち) — town",
      "町中 (まちなか) — downtown"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シ",
    "kunyomi": "いち",
    "onRomaji": "shi",
    "kunRomaji": "ichi",
    "meaning": "city",
    "strokeCount": 5,
    "radical": "巾",
    "id": 127,
    "kanji": "市",
    "examples": [
      "市 (し) — city",
      "市立 (しりつ) — municipal"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "キョウ",
    "kunyomi": "みやこ",
    "onRomaji": "kyou",
    "kunRomaji": "miyako",
    "meaning": "capital",
    "strokeCount": 8,
    "radical": "亠",
    "id": 128,
    "kanji": "京",
    "examples": [
      "東京 (とうきょう) — Tokyo",
      "上京 (じょうきょう) — going to Tokyo"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ギョク",
    "kunyomi": "たま、だま",
    "onRomaji": "gyoku",
    "kunRomaji": "tama, dama",
    "meaning": "jewel",
    "strokeCount": 5,
    "radical": "玉",
    "id": 129,
    "kanji": "玉",
    "examples": [
      "玉 (たま) — ball",
      "目玉 (めだま) — eyeball"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "コク",
    "kunyomi": "くに",
    "onRomaji": "koku",
    "kunRomaji": "kuni",
    "meaning": "country",
    "strokeCount": 8,
    "radical": "囗",
    "id": 130,
    "kanji": "国",
    "examples": [
      "国 (くに) — country",
      "外国 (がいこく) — foreign country"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ホク",
    "kunyomi": "きた",
    "onRomaji": "hoku",
    "kunRomaji": "kita",
    "meaning": "north",
    "strokeCount": 5,
    "radical": "匕",
    "id": 131,
    "kanji": "北",
    "examples": [
      "北 (きた) — north",
      "北風 (きたかぜ) — north wind"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ナン",
    "kunyomi": "みなみ",
    "onRomaji": "nan",
    "kunRomaji": "minami",
    "meaning": "south",
    "strokeCount": 9,
    "radical": "十",
    "id": 132,
    "kanji": "南",
    "examples": [
      "南 (みなみ) — south",
      "南口 (みなみぐち) — south exit"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "セイ",
    "kunyomi": "にし",
    "onRomaji": "sei",
    "kunRomaji": "nishi",
    "meaning": "west",
    "strokeCount": 6,
    "radical": "襾",
    "id": 133,
    "kanji": "西",
    "examples": [
      "西 (にし) — west",
      "西口 (にしぐち) — west exit"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "トウ",
    "kunyomi": "ひがし",
    "onRomaji": "tou",
    "kunRomaji": "higashi",
    "meaning": "east",
    "strokeCount": 8,
    "radical": "木",
    "id": 134,
    "kanji": "東",
    "examples": [
      "東 (ひがし) — east",
      "東京 (とうきょう) — Tokyo"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ソク",
    "kunyomi": "あし、たりる",
    "onRomaji": "soku",
    "kunRomaji": "ashi, tariru",
    "meaning": "foot",
    "strokeCount": 7,
    "radical": "足",
    "id": 135,
    "kanji": "足",
    "examples": [
      "足 (あし) — foot",
      "足音 (あしおと) — footsteps"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ソウ",
    "kunyomi": "はしる",
    "onRomaji": "sou",
    "kunRomaji": "hashiru",
    "meaning": "run",
    "strokeCount": 7,
    "radical": "走",
    "id": 136,
    "kanji": "走",
    "examples": [
      "走る (はしる) — to run",
      "走者 (そうしゃ) — runner"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "キ",
    "kunyomi": "おきる、おこす",
    "onRomaji": "ki",
    "kunRomaji": "okiru, okosu",
    "meaning": "rise",
    "strokeCount": 10,
    "radical": "走",
    "id": 137,
    "kanji": "起",
    "examples": [
      "起きる (おきる) — to wake up",
      "早起き (はやおき) — waking early"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シ",
    "kunyomi": "とまる、とめる",
    "onRomaji": "shi",
    "kunRomaji": "tomaru, tomeru",
    "meaning": "stop",
    "strokeCount": 4,
    "radical": "止",
    "id": 138,
    "kanji": "止",
    "examples": [
      "止まる (とまる) — to stop",
      "中止 (ちゅうし) — cancellation"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "セイ",
    "kunyomi": "ただしい、ただす",
    "onRomaji": "sei",
    "kunRomaji": "tadashii, tadasu",
    "meaning": "correct",
    "strokeCount": 5,
    "radical": "止",
    "id": 139,
    "kanji": "正",
    "examples": [
      "正しい (ただしい) — correct",
      "正月 (しょうがつ) — New Year"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ホ",
    "kunyomi": "あるく、あゆむ",
    "onRomaji": "ho",
    "kunRomaji": "aruku, ayumu",
    "meaning": "walk",
    "strokeCount": 8,
    "radical": "止",
    "id": 140,
    "kanji": "歩",
    "examples": [
      "歩く (あるく) — to walk",
      "散歩 (さんぽ) — walk"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "キュウ",
    "kunyomi": "やすむ",
    "onRomaji": "kyuu",
    "kunRomaji": "yasumu",
    "meaning": "rest",
    "strokeCount": 6,
    "radical": "人 / 亻",
    "id": 141,
    "kanji": "休",
    "examples": [
      "休む (やすむ) — to rest",
      "休日 (きゅうじつ) — holiday"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "タイ",
    "kunyomi": "からだ",
    "onRomaji": "tai",
    "kunRomaji": "karada",
    "meaning": "body",
    "strokeCount": 7,
    "radical": "人 / 亻",
    "id": 142,
    "kanji": "体",
    "examples": [
      "体 (からだ) — body",
      "体育 (たいいく) — physical education"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シ",
    "kunyomi": "ゆび、さす",
    "onRomaji": "shi",
    "kunRomaji": "yubi, sasu",
    "meaning": "finger",
    "strokeCount": 9,
    "radical": "手 / 扌",
    "id": 143,
    "kanji": "指",
    "examples": [
      "指 (ゆび) — finger",
      "指先 (ゆびさき) — fingertip"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ハイ",
    "kunyomi": "せ、せい",
    "onRomaji": "hai",
    "kunRomaji": "se, sei",
    "meaning": "back",
    "strokeCount": 9,
    "radical": "肉 / 月",
    "id": 144,
    "kanji": "背",
    "examples": [
      "背中 (せなか) — back",
      "背が高い (せがたかい) — tall"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ジ",
    "kunyomi": "みずから、おのずから",
    "onRomaji": "ji",
    "kunRomaji": "mizukara, onozukara",
    "meaning": "self",
    "strokeCount": 6,
    "radical": "自",
    "id": 145,
    "kanji": "自",
    "examples": [
      "自分 (じぶん) — oneself",
      "自転車 (じてんしゃ) — bicycle"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ビ",
    "kunyomi": "はな",
    "onRomaji": "bi",
    "kunRomaji": "hana",
    "meaning": "nose",
    "strokeCount": 14,
    "radical": "鼻",
    "id": 146,
    "kanji": "鼻",
    "examples": [
      "鼻 (はな) — nose",
      "鼻水 (はなみず) — runny nose"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シン",
    "kunyomi": "ねる",
    "onRomaji": "shin",
    "kunRomaji": "neru",
    "meaning": "sleep",
    "strokeCount": 13,
    "radical": "宀",
    "id": 147,
    "kanji": "寝",
    "examples": [
      "寝る (ねる) — to sleep",
      "早寝 (はやね) — early bedtime"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シン",
    "kunyomi": "あたらしい、あらた",
    "onRomaji": "shin",
    "kunRomaji": "atarashii, arata",
    "meaning": "new",
    "strokeCount": 13,
    "radical": "斤",
    "id": 148,
    "kanji": "新",
    "examples": [
      "新しい (あたらしい) — new",
      "新聞 (しんぶん) — newspaper"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "コ",
    "kunyomi": "ふるい、ふる",
    "onRomaji": "ko",
    "kunRomaji": "furui, furu",
    "meaning": "old",
    "strokeCount": 5,
    "radical": "口",
    "id": 149,
    "kanji": "古",
    "examples": [
      "古い (ふるい) — old",
      "中古 (ちゅうこ) — secondhand"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ビ",
    "kunyomi": "うつくしい",
    "onRomaji": "bi",
    "kunRomaji": "utsukushii",
    "meaning": "beautiful",
    "strokeCount": 9,
    "radical": "羊",
    "id": 150,
    "kanji": "美",
    "examples": [
      "美しい (うつくしい) — beautiful",
      "美術 (びじゅつ) — art"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ジャク",
    "kunyomi": "わかい",
    "onRomaji": "jaku",
    "kunRomaji": "wakai",
    "meaning": "young",
    "strokeCount": 8,
    "radical": "艸 / 艹",
    "id": 151,
    "kanji": "若",
    "examples": [
      "若い (わかい) — young",
      "若者 (わかもの) — young person"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "チョウ",
    "kunyomi": "ながい",
    "onRomaji": "chou",
    "kunRomaji": "nagai",
    "meaning": "long",
    "strokeCount": 8,
    "radical": "長",
    "id": 152,
    "kanji": "長",
    "examples": [
      "長い (ながい) — long",
      "校長 (こうちょう) — principal"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "タイ",
    "kunyomi": "ふとい、ふとる",
    "onRomaji": "tai",
    "kunRomaji": "futoi, futoru",
    "meaning": "thick; fat",
    "strokeCount": 4,
    "radical": "大",
    "id": 153,
    "kanji": "太",
    "examples": [
      "太い (ふとい) — thick",
      "太陽 (たいよう) — sun"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "コウ",
    "kunyomi": "たかい",
    "onRomaji": "kou",
    "kunRomaji": "takai",
    "meaning": "high",
    "strokeCount": 10,
    "radical": "高",
    "id": 154,
    "kanji": "高",
    "examples": [
      "高い (たかい) — high",
      "高校 (こうこう) — high school"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "アン",
    "kunyomi": "やすい",
    "onRomaji": "an",
    "kunRomaji": "yasui",
    "meaning": "safe; cheap",
    "strokeCount": 6,
    "radical": "宀",
    "id": 155,
    "kanji": "安",
    "examples": [
      "安い (やすい) — inexpensive",
      "安心 (あんしん) — relief"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ガク、ラク",
    "kunyomi": "たのしい、たのしむ",
    "onRomaji": "gaku, raku",
    "kunRomaji": "tanoshii, tanoshimu",
    "meaning": "fun",
    "strokeCount": 13,
    "radical": "木",
    "id": 156,
    "kanji": "楽",
    "examples": [
      "楽しい (たのしい) — fun",
      "音楽 (おんがく) — music"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "メイ",
    "kunyomi": "あかるい",
    "onRomaji": "mei",
    "kunRomaji": "akarui",
    "meaning": "bright",
    "strokeCount": 8,
    "radical": "日",
    "id": 157,
    "kanji": "明",
    "examples": [
      "明るい (あかるい) — bright",
      "明日 (あした) — tomorrow"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "コウ",
    "kunyomi": "ひろい",
    "onRomaji": "kou",
    "kunRomaji": "hiroi",
    "meaning": "wide",
    "strokeCount": 5,
    "radical": "广",
    "id": 158,
    "kanji": "広",
    "examples": [
      "広い (ひろい) — wide",
      "広場 (ひろば) — plaza"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ユウ",
    "kunyomi": "ある",
    "onRomaji": "yuu",
    "kunRomaji": "aru",
    "meaning": "have",
    "strokeCount": 6,
    "radical": "月",
    "id": 159,
    "kanji": "有",
    "examples": [
      "有る (ある) — to exist",
      "有名 (ゆうめい) — famous"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ゼン",
    "kunyomi": "まえ",
    "onRomaji": "zen",
    "kunRomaji": "mae",
    "meaning": "front",
    "strokeCount": 9,
    "radical": "刀",
    "id": 160,
    "kanji": "前",
    "examples": [
      "前 (まえ) — front",
      "名前 (なまえ) — name"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "メイ",
    "kunyomi": "な",
    "onRomaji": "mei",
    "kunRomaji": "na",
    "meaning": "name",
    "strokeCount": 6,
    "radical": "口",
    "id": 161,
    "kanji": "名",
    "examples": [
      "名前 (なまえ) — name",
      "有名 (ゆうめい) — famous"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ゴ",
    "kunyomi": "あと、うしろ",
    "onRomaji": "go",
    "kunRomaji": "ato, ushiro",
    "meaning": "behind",
    "strokeCount": 9,
    "radical": "彳",
    "id": 162,
    "kanji": "後",
    "examples": [
      "後 (あと) — after",
      "午後 (ごご) — afternoon"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ゾク",
    "kunyomi": "—",
    "onRomaji": "zoku",
    "kunRomaji": "—",
    "meaning": "family; tribe",
    "strokeCount": 11,
    "radical": "方",
    "id": 163,
    "kanji": "族",
    "examples": [
      "家族 (かぞく) — family",
      "水族館 (すいぞくかん) — aquarium"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ヨウ",
    "kunyomi": "さま",
    "onRomaji": "you",
    "kunRomaji": "sama",
    "meaning": "manner",
    "strokeCount": 14,
    "radical": "木",
    "id": 164,
    "kanji": "様",
    "examples": [
      "王様 (おうさま) — king",
      "様子 (ようす) — state"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シュ",
    "kunyomi": "ぬし、おも",
    "onRomaji": "shu",
    "kunRomaji": "nushi, omo",
    "meaning": "main",
    "strokeCount": 5,
    "radical": "丶",
    "id": 165,
    "kanji": "主",
    "examples": [
      "主人 (しゅじん) — owner",
      "主に (おもに) — mainly"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ミ",
    "kunyomi": "いまだ、まだ",
    "onRomaji": "mi",
    "kunRomaji": "imada, mada",
    "meaning": "not yet",
    "strokeCount": 5,
    "radical": "木",
    "id": 166,
    "kanji": "未",
    "examples": [
      "未来 (みらい) — future",
      "未知 (みち) — unknown"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シ",
    "kunyomi": "あね",
    "onRomaji": "shi",
    "kunRomaji": "ane",
    "meaning": "older sister",
    "strokeCount": 8,
    "radical": "女",
    "id": 167,
    "kanji": "姉",
    "examples": [
      "姉 (あね) — older sister",
      "姉妹 (しまい) — sisters"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "マイ",
    "kunyomi": "いもうと",
    "onRomaji": "mai",
    "kunRomaji": "imouto",
    "meaning": "younger sister",
    "strokeCount": 8,
    "radical": "女",
    "id": 168,
    "kanji": "妹",
    "examples": [
      "妹 (いもうと) — younger sister",
      "姉妹 (しまい) — sisters"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ケイ、キョウ",
    "kunyomi": "あに",
    "onRomaji": "kei, kyou",
    "kunRomaji": "ani",
    "meaning": "older brother",
    "strokeCount": 5,
    "radical": "儿",
    "id": 169,
    "kanji": "兄",
    "examples": [
      "兄 (あに) — older brother",
      "兄弟 (きょうだい) — siblings"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "テイ、ダイ",
    "kunyomi": "おとうと",
    "onRomaji": "tei, dai",
    "kunRomaji": "otouto",
    "meaning": "younger brother",
    "strokeCount": 7,
    "radical": "弓",
    "id": 170,
    "kanji": "弟",
    "examples": [
      "弟 (おとうと) — younger brother",
      "兄弟 (きょうだい) — siblings"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ジュウ",
    "kunyomi": "すむ",
    "onRomaji": "juu",
    "kunRomaji": "sumu",
    "meaning": "live",
    "strokeCount": 7,
    "radical": "人 / 亻",
    "id": 171,
    "kanji": "住",
    "examples": [
      "住む (すむ) — to live",
      "住所 (じゅうしょ) — address"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "シツ",
    "kunyomi": "むろ",
    "onRomaji": "shitsu",
    "kunRomaji": "muro",
    "meaning": "room",
    "strokeCount": 9,
    "radical": "宀",
    "id": 172,
    "kanji": "室",
    "examples": [
      "教室 (きょうしつ) — classroom",
      "和室 (わしつ) — Japanese-style room"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ブ",
    "kunyomi": "—",
    "onRomaji": "bu",
    "kunRomaji": "—",
    "meaning": "section",
    "strokeCount": 11,
    "radical": "邑 / 阝",
    "id": 173,
    "kanji": "部",
    "examples": [
      "部屋 (へや) — room",
      "全部 (ぜんぶ) — all"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "オク",
    "kunyomi": "や",
    "onRomaji": "oku",
    "kunRomaji": "ya",
    "meaning": "roof; shop",
    "strokeCount": 9,
    "radical": "尸",
    "id": 174,
    "kanji": "屋",
    "examples": [
      "部屋 (へや) — room",
      "本屋 (ほんや) — bookstore"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ワ",
    "kunyomi": "やわらぐ、やわらげる",
    "onRomaji": "wa",
    "kunRomaji": "yawaragu, yawarageru",
    "meaning": "harmony",
    "strokeCount": 8,
    "radical": "口",
    "id": 175,
    "kanji": "和",
    "examples": [
      "和室 (わしつ) — Japanese-style room",
      "平和 (へいわ) — peace"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "ヨウ",
    "kunyomi": "—",
    "onRomaji": "you",
    "kunRomaji": "—",
    "meaning": "western",
    "strokeCount": 9,
    "radical": "水 / 氵",
    "id": 176,
    "kanji": "洋",
    "examples": [
      "洋服 (ようふく) — Western-style clothes",
      "西洋 (せいよう) — the West"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "チ",
    "kunyomi": "しる",
    "onRomaji": "chi",
    "kunRomaji": "shiru",
    "meaning": "know",
    "strokeCount": 8,
    "radical": "矢",
    "id": 177,
    "kanji": "知",
    "examples": [
      "知る (しる) — to know",
      "知人 (ちじん) — acquaintance"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "カ",
    "kunyomi": "—",
    "onRomaji": "ka",
    "kunRomaji": "—",
    "meaning": "science",
    "strokeCount": 9,
    "radical": "禾",
    "id": 178,
    "kanji": "科",
    "examples": [
      "科学 (かがく) — science",
      "教科書 (きょうかしょ) — textbook"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "キョウ",
    "kunyomi": "おしえる、おそわる",
    "onRomaji": "kyou",
    "kunRomaji": "oshieru, osowaru",
    "meaning": "teach",
    "strokeCount": 11,
    "radical": "攴 / 攵",
    "id": 179,
    "kanji": "教",
    "examples": [
      "教える (おしえる) — to teach",
      "教室 (きょうしつ) — classroom"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "マイ",
    "kunyomi": "—",
    "onRomaji": "mai",
    "kunRomaji": "—",
    "meaning": "counter for flat objects",
    "strokeCount": 8,
    "radical": "木",
    "id": 180,
    "kanji": "枚",
    "examples": [
      "一枚 (いちまい) — one sheet",
      "二枚 (にまい) — two sheets"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "エイ",
    "kunyomi": "—",
    "onRomaji": "ei",
    "kunRomaji": "—",
    "meaning": "English",
    "strokeCount": 8,
    "radical": "艸 / 艹",
    "id": 181,
    "kanji": "英",
    "examples": [
      "英語 (えいご) — English",
      "英国 (えいこく) — Britain"
    ],
    "description": "",
    "strokes": null
  },
  {
    "onyomi": "オン",
    "kunyomi": "おと、ね",
    "onRomaji": "on",
    "kunRomaji": "oto, ne",
    "meaning": "sound",
    "strokeCount": 9,
    "radical": "音",
    "id": 182,
    "kanji": "音",
    "examples": [
      "音 (おと) — sound",
      "音楽 (おんがく) — music"
    ],
    "description": "",
    "strokes": null
  }
];
  window.KanjiGardenData = Object.freeze(data);
}());
