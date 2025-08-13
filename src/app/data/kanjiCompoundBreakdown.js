const kanjiCompoundBreakdown = [
  {
    compound: '開発',
    reading: 'かいはつ',
    meaning: 'development',
    kanji: [
      { char: '開', reading: 'かい', meaning: 'open' },
      { char: '発', reading: 'はつ', meaning: 'start; emit' },
    ],
  },
  {
    compound: '設計',
    reading: 'せっけい',
    meaning: 'design; plan',
    kanji: [
      { char: '設', reading: 'せつ', meaning: 'establish; set up' },
      { char: '計', reading: 'けい', meaning: 'plan; measure' },
    ],
  },
  {
    compound: '管理',
    reading: 'かんり',
    meaning: 'management; control',
    kanji: [
      { char: '管', reading: 'かん', meaning: 'pipe; control' },
      { char: '理', reading: 'り', meaning: 'logic; reason' },
    ],
  },
  {
    compound: '保守',
    reading: 'ほしゅ',
    meaning: 'maintenance',
    kanji: [
      { char: '保', reading: 'ほ', meaning: 'protect; maintain' },
      { char: '守', reading: 'しゅ', meaning: 'guard; defend' },
    ],
  },
  {
    compound: '修正',
    reading: 'しゅうせい',
    meaning: 'correction; modification',
    kanji: [
      { char: '修', reading: 'しゅう', meaning: 'discipline; repair' },
      { char: '正', reading: 'せい', meaning: 'correct; proper' },
    ],
  },
  {
    compound: '実装',
    reading: 'じっそう',
    meaning: 'implementation',
    kanji: [
      { char: '実', reading: 'じつ', meaning: 'reality; truth' },
      { char: '装', reading: 'そう', meaning: 'equip; install' },
    ],
  },
  {
    compound: '移行',
    reading: 'いこう',
    meaning: 'migration; transition',
    kanji: [
      { char: '移', reading: 'い', meaning: 'move; shift' },
      { char: '行', reading: 'こう', meaning: 'go; proceed' },
    ],
  },
  {
    compound: '新規',
    reading: 'しんき',
    meaning: 'new; fresh',
    kanji: [
      { char: '新', reading: 'しん', meaning: 'new' },
      { char: '規', reading: 'き', meaning: 'rule; standard' },
    ],
  },
  {
    compound: '検証',
    reading: 'けんしょう',
    meaning: 'verification; validation',
    kanji: [
      { char: '検', reading: 'けん', meaning: 'examine; test' },
      { char: '証', reading: 'しょう', meaning: 'evidence; proof' },
    ],
  },
  {
    compound: '構築',
    reading: 'こうちく',
    meaning: 'construction; build',
    kanji: [
      { char: '構', reading: 'こう', meaning: 'construct; build' },
      { char: '築', reading: 'ちく', meaning: 'construct; build' },
    ],
  },
  {
    compound: '改善',
    reading: 'かいぜん',
    meaning: 'improvement',
    kanji: [
      { char: '改', reading: 'かい', meaning: 'reform; change' },
      { char: '善', reading: 'ぜん', meaning: 'good; virtuous' },
    ],
  },
  {
    compound: '品質',
    reading: 'ひんしつ',
    meaning: 'quality',
    kanji: [
      { char: '品', reading: 'ひん', meaning: 'goods; article' },
      { char: '質', reading: 'しつ', meaning: 'quality; substance' },
    ],
  },
  {
    compound: '保証',
    reading: 'ほしょう',
    meaning: 'guarantee; assurance',
    kanji: [
      { char: '保', reading: 'ほ', meaning: 'protect; maintain' },
      { char: '証', reading: 'しょう', meaning: 'evidence; proof' },
    ],
  },
  {
    compound: '記録',
    reading: 'きろく',
    meaning: 'record; documentation',
    kanji: [
      { char: '記', reading: 'き', meaning: 'write; record' },
      { char: '録', reading: 'ろく', meaning: 'record; register' },
    ],
  },
  {
    compound: '解析',
    reading: 'かいせき',
    meaning: 'analysis',
    kanji: [
      { char: '解', reading: 'かい', meaning: 'solve; analyze' },
      { char: '析', reading: 'せき', meaning: 'analyze; divide' },
    ],
  },
  {
    compound: '抽出',
    reading: 'ちゅうしゅつ',
    meaning: 'extraction',
    kanji: [
      { char: '抽', reading: 'ちゅう', meaning: 'extract; pull out' },
      { char: '出', reading: 'しゅつ', meaning: 'go out; exit' },
    ],
  },
  {
    compound: '構造',
    reading: 'こうぞう',
    meaning: 'structure',
    kanji: [
      { char: '構', reading: 'こう', meaning: 'construct; build' },
      { char: '造', reading: 'ぞう', meaning: 'make; create' },
    ],
  },
  {
    compound: '改修',
    reading: 'かいしゅう',
    meaning: 'repair; renovation',
    kanji: [
      { char: '改', reading: 'かい', meaning: 'reform; change' },
      { char: '修', reading: 'しゅう', meaning: 'discipline; repair' },
    ],
  },
  {
    compound: '実行',
    reading: 'じっこう',
    meaning: 'execution; perform',
    kanji: [
      { char: '実', reading: 'じつ', meaning: 'reality; truth' },
      { char: '行', reading: 'こう', meaning: 'go; act' },
    ],
  },
  {
    compound: '指定',
    reading: 'してい',
    meaning: 'designation; specification',
    kanji: [
      { char: '指', reading: 'し', meaning: 'finger; point' },
      { char: '定', reading: 'てい', meaning: 'determine; fix' },
    ],
  },
  {
    compound: '対応',
    reading: 'たいおう',
    meaning: 'correspondence; response',
    kanji: [
      { char: '対', reading: 'たい', meaning: 'opposite; vs' },
      { char: '応', reading: 'おう', meaning: 'respond; apply' },
    ],
  },
  {
    compound: '追加',
    reading: 'ついか',
    meaning: 'addition',
    kanji: [
      { char: '追', reading: 'つい', meaning: 'chase; add' },
      { char: '加', reading: 'か', meaning: 'add; increase' },
    ],
  },
  {
    compound: '連携',
    reading: 'れんけい',
    meaning: 'cooperation; coordination',
    kanji: [
      { char: '連', reading: 'れん', meaning: 'connect; link' },
      { char: '携', reading: 'けい', meaning: 'carry; cooperate' },
    ],
  },
  {
    compound: '検索',
    reading: 'けんさく',
    meaning: 'search',
    kanji: [
      { char: '検', reading: 'けん', meaning: 'examine; test' },
      { char: '索', reading: 'さく', meaning: 'search; cord' },
    ],
  },
  {
    compound: '調査',
    reading: 'ちょうさ',
    meaning: 'investigation; survey',
    kanji: [
      { char: '調', reading: 'ちょう', meaning: 'investigate; tune' },
      { char: '査', reading: 'さ', meaning: 'investigate; check' },
    ],
  },
  {
    compound: '提案',
    reading: 'ていあん',
    meaning: 'proposal; suggestion',
    kanji: [
      { char: '提', reading: 'てい', meaning: 'propose; present' },
      { char: '案', reading: 'あん', meaning: 'plan; idea' },
    ],
  },
  {
    compound: '翻訳',
    reading: 'ほんやく',
    meaning: 'translation',
    kanji: [
      { char: '翻', reading: 'ほん', meaning: 'flip; turn over' },
      { char: '訳', reading: 'やく', meaning: 'translate; reason' },
    ],
  },
  {
    compound: '監視',
    reading: 'かんし',
    meaning: 'monitoring',
    kanji: [
      { char: '監', reading: 'かん', meaning: 'oversee; supervise' },
      { char: '視', reading: 'し', meaning: 'see; observe' },
    ],
  },
  {
    compound: '更新',
    reading: 'こうしん',
    meaning: 'update; renewal',
    kanji: [
      { char: '更', reading: 'こう', meaning: 'renew; change' },
      { char: '新', reading: 'しん', meaning: 'new' },
    ],
  },
  {
    compound: '開始',
    reading: 'かいし',
    meaning: 'start; commencement',
    kanji: [
      { char: '開', reading: 'かい', meaning: 'open' },
      { char: '始', reading: 'し', meaning: 'begin; start' },
    ],
  },
  {
    compound: '終了',
    reading: 'しゅうりょう',
    meaning: 'end; termination',
    kanji: [
      { char: '終', reading: 'しゅう', meaning: 'end; finish' },
      { char: '了', reading: 'りょう', meaning: 'complete; finish' },
    ],
  },
];

export default kanjiCompoundBreakdown;
