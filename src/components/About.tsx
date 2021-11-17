import React from 'react';
import '../assets/styles/about.css'
import ProfileIcon from '../assets/img/profile_icon.jpg'
import { skillDataset } from '../dataset'

const About: React.FC = () => {
  return (
    <div className='about-page-wrap'>
      <div className='profile-wrap'>
        <div className='profile-header'>
          <img src={ProfileIcon} alt='mintoの画像' className='profile-icon' />
          <div className='basic-text-profile-wrap'>
            <div className='profile-name'>minto</div>
            <div className='profile-occupation'>UI Desinger</div>
          </div>
        </div>
        <div className='profile-title'>ありのままで生きる。</div>
        <div className='introduction-wrap'>
          元エンジニアのフリーランスUIデザイナーです。<br/>ワクワクすることを繰り返していたら、SIer→Webエンジニア→UIデザイナーというキャリアを歩んでいました。<br/>現在は複数のベンチャーでUIデザインを経験し、直近の案件ではUIデザインチームをリードしました。<br/><br/>【得意】<br/>
          ・デザインの言語化<br/>
          ・論理的思考（仕様整理、情報設計、UI設計）<br/>
          ・使いやすいだけでなく、統一感のあるシンプルで美しいUI<br/>
          ・Figma<br/>

          【苦手】<br/>
          ・イラスト等のグラフィックデザイン<br/><br/>
          {/* ・Photoshop<br/> */}
          {/* ・Illustrator<br/><br/> */}

          「イメージと違う」がないように、UIを作り込む前に頻繁に手書きラフの共有や、要件定義のディスカッションをすることで手戻りのないようにしています。<br/>

          要件のヒアリングの際は、ただ要件に沿ったものを制作するのではなく、更に体験が向上する施策の提案も意図を持ってご提案させてもらってます。フワッとした課題感だけでも問題なく対応できます。<br/>

          最近はデザインシステムの構築に励んでいます。<br/>

        </div>
        <div className='profile-title'>略歴</div>
        <div className='introduction-wrap'>
        ［2014］大学卒業後、大手SIer入社<br/>
        ［2015〜2016］教育系企業で社内SE<br/>
        ［2017〜2019］プログラミングを学びエンジニアに。<br/>
        　複数のスタートアップでサーバーサイドからフロントエンドまで経験。<br/>
        ［2020］個人開発を経験後、UI/UXデザインを学ぶ。<br/>
        ［2021］フリーランスUI/UXデザイナーとして活動開始。
        </div>
        <div className='profile-title'>スキル・特徴</div>
        <div className='tags-wrap'>
          {
            skillDataset.map((skill, index) => {
              if (skill.isEmphasis === true) {
                return <div className='emphasis-tags' key={index}>
                  <div className='tags-text'>{skill.name}</div>
                </div>
              } else {
                return <div className='normal-tags' key={index}>
                  <div className='tags-text'>{skill.name}</div>
                </div>
              }
            })
          }
        </div>
        <div className='profile-title'>今後実現したいこと</div>
          <div className='introduction-wrap'>
            複雑な課題をできる限りシンプルに捉え、サービスに宿る想いが正しくユーザーに届くようなデザインを目指していきます。<br/>
            大好きなUI/UXを突き詰めつつ、自分が考えた「人とのつながりがたくさん生まれるサービス」を世に出していきたいです。<br/>
          </div>
        </div>
    </div>
  );
}

export default About;