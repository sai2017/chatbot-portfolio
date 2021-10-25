export const chatbotDataset = {
  "init": {
      answers: [
          {content: "OK👌", nextId: "reazon"},
          {content: "ごめんなさい🙏", nextId: "sorry"}
      ],
      question: "こんにちは！\n元エンジニアでUIデザイナーのmintoです。\nちょっとお話しませんか？",
  },
  "reazon": {
    answers: [
      {content: "デザインに興味がある🎨", nextId: "design"},
      {content: "一緒にお仕事したい💼", nextId: "job_offer"},
      {content: "特になし", nextId: "somehow"}
    ],
    question: "ありがとうございます！あなたが興味を持っていることは何でしょうか？",
  },
  "design": {
      answers: [
          {content: "noteに行く", nextId: "https://note.com/minto_tokyo"},
          {content: "最初の質問に戻る", nextId: "init"},
      ],
      question: "一緒ですね！\n僕、不定期にnoteでデザインに関する記事を書いてたりするので、是非読んでいただけると嬉しいです！",
  },
  "job_offer": {
      answers: [
          {content: "UI/UXデザイン🎨", nextId: "UIUX"},
          {content: "その他", nextId: "other_jobs"}
      ],
      question: "ありがとうございます！\nどのようなお仕事内容でしょうか？",
  },
  "UIUX": {
      answers: [
          {content: "DMする", nextId: "https://twitter.com/minto_design"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "UI/UXデザインですね！\nそれではTwitterのDMで詳細をお伺いできればと思います！",
  },
  "coding": {
      answers: [
        　{content: "DMする", nextId: "https://twitter.com/minto_design"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "コーディングですね！\nそれではTwitterのDMで詳細をお伺いできればと思います！",
  },
  "other_jobs": {
      answers: [
        　{content: "DMする", nextId: "https://twitter.com/minto_design"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "その他についてですね！\nそれではTwitterのDMで詳細をお伺いできればと思います！",
  },
  "sorry": {
      answers: [
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "お時間あるときにお待ちしてます！",
  },
  "somehow": {
      answers: [
          {content: "ラーメン🍜", nextId: "ramen"},
          {content: "カレー🍛", nextId: "curry"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "なんとなく来て頂いたあなたにとっておきの情報をお伝えします。\nどんな情報が知りたいですか？",
  },
  "ramen": {
      answers: [
        {content: "ラーメンDBで見てみる", nextId: "https://ramendb.supleks.jp/s/110635.html"},
        {content: "最初の質問に戻る", nextId: "init"}
    ],
      question: "今のイチオシは下北沢にある「麺と未来」というお店の塩らーめんです！\n塩好きな人は間違いなしです！",
  },
  "curry": {
      answers: [
          {content: "食べログで見てみる", nextId: "https://tabelog.com/tokyo/A1317/A131706/13151738/"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "今のイチオシは三軒茶屋にある「シバカリーワラ」です！\n今まで食べた都内のインドカレーで一番美味しいです！",
  },
}

export const skillDataset: {name: string, isEmphasis: boolean}[] = [
    { name: 'UI design',     isEmphasis: true },
    { name: 'UX design',     isEmphasis: true },
    { name: 'Figma',         isEmphasis: true },
    { name: 'adobe XD',      isEmphasis: false },
    { name: 'デザインの言語化', isEmphasis: true },
    { name: 'デザインリサーチ', isEmphasis: false },
    { name: 'デザインシステム', isEmphasis: true },
    { name: '0→1フェーズ', isEmphasis: true },
    { name: 'React',         isEmphasis: false },
    { name: 'JavaScript',    isEmphasis: false },
    { name: 'TypeScript',    isEmphasis: false },
    { name: 'Ruby on Rails', isEmphasis: false },
    { name: 'Ruby',          isEmphasis: false },
    { name: 'SQL',           isEmphasis: false },
    { name: 'GitHub',        isEmphasis: false },
    { name: 'AWS',           isEmphasis: false }
]
