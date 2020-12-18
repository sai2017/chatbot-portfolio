import React from 'react';
import '../assets/styles/about.css'
import ProfileIcon from '../assets/img/portfolio_icon.png'
import { skillDataset } from '../dataset'

const About: React.FC = () => {
  return (
    <div className='about-page-wrap'>
      <div className='profile-wrap'>
        <div className='profile-header'>
          <img src={ProfileIcon} className='profile-icon' />
          <div className='basic-text-profile-wrap'>
            <div className='profile-name'>minto</div>
            <div className='profile-occupation'>UI/UXデザイナー</div>
          </div>
        </div>
        <div className='profile-title'>ありのままで生きる。</div>
        <div className='introduction-wrap'>
          エンジニアリングのできるUIデザイナーです。ここ数年はエンジニアとして複数のスタートアップで開発をしてきましたが、デザインの面白みと重要性を実感し、2021年1月からUI/UXデザ イナーに転職することにしました。
        </div>
        <div className='profile-title'>略歴</div>
        <div className='introduction-wrap'>
        ［2014］大学卒業後、大手SIer入社<br/>
        ［2015］学習塾運営企業で社内SE<br/>
        ［2016］学童でアルバイト<br/>
        ［2017〜2019］プログラミングを学びエンジニアに。<br/>
        　複数のスタートアップサーバーサイドからフロントエンドまで経験。<br/>
        ［2020］個人開発、そしてUIデザイナーにキャリアチェンジ
        </div>
        <div className='profile-title'>スキル・特徴</div>
        <div className='tags-wrap'>
          {
            skillDataset.map((skill, index) => {
              console.log(skill.name)
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
            サービスに宿る想いが正しくユーザーに届くようなデザインを目指していきたいです。<br/>
            そのためには、UIデザインのスキルを上げていくのはもちろんのこと、UXを深く突き詰めていきたいと考えています。<br/>
            複雑な課題をできる限りシンプルに捉え、周囲と積極的にコミュニケーションを取りながら、重要な意思決定を任せてもらえるサービスデザイナーになりたいです。<br/>
          </div>
        </div>
    </div>
  );
}

export default About;