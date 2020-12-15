export const defaultDataset = {
  "init": {
      answers: [
          {content: "OK👌", nextId: "reazon"},
          {content: "ごめんなさい😣", nextId: "sorry"}
      ],
      question: "こんにちは！\nエンジニアリングもできるUI/UXデザイナーのmintoです。\nちょっとお話してみませんか？",
  },
  "reazon": {
    answers: [
      {content: "デザインに興味がある", nextId: "design"},
      {content: "一緒にお仕事したい", nextId: "job_offer"},
      {content: "なんとなく", nextId: "somehow"}
    ],
    question: "ありがとうございます！ここに来てくれた理由は何でしょうか？",
  },
  "design": {
      answers: [
          {content: "noteに行く", nextId: "https://note.com/minto_tokyo"},
          {content: "最初の質問に戻る", nextId: "init"},
      ],
      question: "おー！一緒ですね！\n僕、不定期にnoteでデザインに関する記事を書いてたりするので、是非読んでいただけると嬉しいです！",
  },
  "job_offer": {
      answers: [
          {content: "UI/UXデザイン", nextId: "UIUX"},
          {content: "コーディング", nextId: "coding"},
          {content: "その他", nextId: "other_jobs"}
      ],
      question: "ありがとうございます！\nどういったお仕事内容でしょうか？",
  },
  "UIUX": {
      answers: [
          {content: "DMする", nextId: "https://twitter.com/minto_tokyo"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "UI/UXデザイン、承知しました！\nそれではTwitterのDMで詳細をお伺いできればと思います！",
  },
  "coding": {
      answers: [
        　{content: "DMする", nextId: "https://twitter.com/minto_tokyo"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "コーディング、承知しました！\nそれではTwitterのDMで詳細をお伺いできればと思います！",
  },
  "other_jobs": {
      answers: [
        　{content: "DMする", nextId: "https://twitter.com/minto_tokyo"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "その他について、承知しました！\nそれではTwitterのDMで詳細をお伺いできればと思います！",
  },
  "sorry": {
      answers: [
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "お時間あるときにお待ちしてます！",
  },
  "somehow": {
      answers: [
          {content: "ラーメン", nextId: "ramen"},
          {content: "カレー", nextId: "curry"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "貴重なお時間を僕に割いてくれてありがとうございます！\nそんなあなたにとっておきの情報をお伝えします。\nどんな情報が知りたいですか？",
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

export default defaultDataset