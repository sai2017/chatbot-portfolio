import React, { useState, useEffect } from 'react';
import '../assets/styles/work.css'
import { WorkModel } from '../models/WorkModel'
import SearchImage from '../assets/img/cocoda_search_figma.png'
import RemenImage from '../assets/img/Remen_figma.png'
import ListImage from '../assets/img/cocoda_list_figma.png'
import MusicPlayImage from '../assets/img/cocoda_music_play_figma.png'
import MessageImage from '../assets/img/cocoda_message_figma.png'
import ContactImage from '../assets/img/cocoda_contact_figma.png'
import MapImage from '../assets/img/daily_cocoda_map-min.jpg'
import CalculatorImage from '../assets/img/daily_cocoda_calculator-min.jpg'
import SignupImage from '../assets/img/daily_cocoda_signup-min.jpg'
import SnsProfileImage from '../assets/img/daily_cocoda_profile-min.jpg'
import FigmaPortfolioImage from '../assets/img/minto_portfolio_cover-min.jpg'
import { SpinnerCircular, SpinnerCircularFixed } from 'spinners-react';

const Work: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  const WorksDataset: WorkModel[] = [
    {
      title: 'ラーメンに特化したレビューアプリ『ReMen』',
      role: 'UX/UIデザイン',
      imgSrc: RemenImage,
      url: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=268%3A155'
    },
    {
      title: 'レシピ動画アプリの検索画面',
      role: 'UIデザイン',
      imgSrc: SearchImage,
      url: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=1%3A2'
    },
    {
      title: '音楽アプリの再生画面',
      role: 'UIデザイン',
      imgSrc: MusicPlayImage,
      url: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=1%3A3'
    },
    {
      title: 'デリバリーアプリのリスト画面',
      role: 'UIデザイン',
      imgSrc: ListImage,
      url: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=1%3A4'
    },
    {
      title: 'メッセージアプリのチャット画面',
      role: 'UIデザイン',
      imgSrc: MessageImage,
      url: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=268%3A154'
    },
    {
      title: 'プログラミング学習サービスのお問い合わせ画面',
      role: 'UIデザイン',
      imgSrc: ContactImage,
      url: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=268%3A156'
    },
    {
      title: '地図アプリの行き先検索画面',
      role: 'UIデザイン',
      imgSrc: MapImage,
      url: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=268%3A157'
    },
    {
      title: '計算機アプリの計算画面',
      role: 'UIデザイン',
      imgSrc: CalculatorImage,
      url: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=268%3A158'
    },
    {
      title: '音楽アプリの新規登録画面',
      role: 'UIデザイン',
      imgSrc: SignupImage,
      url: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=268%3A159'
    },
    {
      title: 'SNSのプロフィール画面',
      role: 'UIデザイン',
      imgSrc: SnsProfileImage,
      url: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=268%3A160'
    },
    {
      title: 'Figma版ポートフォリオ',
      role: 'UX/UIデザイン',
      imgSrc: FigmaPortfolioImage,
      url: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=0%3A1'
    }
  ]

  return (
    <div className='works-page-wrap'>
      {
        WorksDataset.map((work, index) => {
          return (
            <a href={work.url} target="_blank" rel="noopener noreferrer" key={index}>
              <div className='work-wrap'>
                { loading === true ? (
                  <SpinnerCircularFixed color='#222222' secondaryColor='#DADADA' />
                ) : 
                  <img src={work.imgSrc} alt='成果物の画像' className='work-image'/>
                }
                <p className='work-title'>{work.title}</p>
                <p className='work-role'>{work.role}</p>
              </div>
            </a>
          )
        })
      }
    </div>
  );
}

export default Work;