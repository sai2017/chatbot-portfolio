import React from 'react';
import '../assets/styles/about.css'
import ProfileIcon from '../assets/img/minto-image-min.jpg'
import { skillDataset } from '../dataset'

const About: React.FC = () => {
  return (
    <div className='about-page-wrap'>
      <div className='profile-wrap'>
        <div className='profile-header'>
          <img src={ProfileIcon} alt='mintoの画像' className='profile-icon' />
          <div className='basic-text-profile-wrap'>
            <div className='profile-name'>minto</div>
            <div className='profile-occupation'>UI/UX Desinger</div>
          </div>
        </div>
        <div className='profile-title'>ありのままで生きる。</div>
        <div className='introduction-wrap'>
          エンジニアリングのできるUIデザイナーです。<br/>ここ数年はエンジニアとして複数のスタートアップで開発をしてきましたが、個人開発で0からサービスを作っていく過程で、デザインの面白みと重要性を実感しました。今はエンジニアリングに加え、UIデザイン、UXデザインまで幅を広げています。
        </div>
        <div className='profile-title'>略歴</div>
        <div className='introduction-wrap'>
        ［2014］大学卒業後、大手SIer入社<br/>
        ［2015〜2016］教育系企業で社内SE<br/>
        ［2017〜2019］プログラミングを学びエンジニアに。<br/>
        　複数のスタートアップでサーバーサイドからフロントエンドまで経験。<br/>
        ［2020］個人開発を経験後、UI/UXデザインを学ぶ。<br/>
        {/* ［2021］1月から某事業会社でUI/UXデザイナーとして勤務予定 */}
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