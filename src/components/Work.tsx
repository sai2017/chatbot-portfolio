import React, { useState, useRef } from 'react';
import '../assets/styles/work.css'
import { WorkModel } from '../models/WorkModel'
import SearchImage from '../assets/img/daily_cocoda_search-min.jpg'
import RemenImage from '../assets/img/remen-image3-min.jpg'
import ListImage from '../assets/img/daily_cocoda_list-min.jpg'
import MusicPlayImage from '../assets/img/daily_cocoda_music_play-min.jpg'
import MessageImage from '../assets/img/daily_cocoda_message-min.jpg'
import ContactImage from '../assets/img/daily_cocoda_contact-min.jpg'
import MapImage from '../assets/img/daily_cocoda_map-min.jpg'
import CalculatorImage from '../assets/img/daily_cocoda_calculator-min.jpg'
import SignupImage from '../assets/img/daily_cocoda_signup-min.jpg'
import SnsProfileImage from '../assets/img/daily_cocoda_profile-min.jpg'
import FigmaPortfolioImage from '../assets/img/minto_portfolio_cover-min.jpg'
import WebPortfolioImage from '../assets/img/web_portfolio_image-min.jpg'
import GreenSnapImage from '../assets/img/portfolio-greensnap-head.png'
import MyIDEALImage from '../assets/img/myIDEAL_OGP.png'
import { SpinnerCircularFixed } from 'spinners-react';
import { Link } from 'react-router-dom';

const Work: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const counter = useRef<number>(0);

  const imageLoaded = () => {
    // 画像を一つ読み込む毎に1増やす
    counter.current += 1
    // 全ての画像の読み込みが終わったらloadingをfalseにする
    if (counter.current >= WorksDataset.length) {
      setLoading(false);
    }
  }

  const WorksDataset: WorkModel[] = [
    {
      title: '【2021 ~ 参画中】myIDEAL',
      role: 'UIデザイン',
      imgSrc: MyIDEALImage,
      url: '/myideal'
    },
    {
      title: '【2021】GreenSnap',
      role: 'UIデザイン',
      imgSrc: GreenSnapImage,
      url: '/work/greensnap'
    },
    // {
    //   title: '【架空サービス】ラーメンに特化したレビューアプリ『ReMen』',
    //   role: 'UX/UIデザイン',
    //   imgSrc: RemenImage,
    //   externalUrl: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=268%3A155'
    // },
    // {
    //   title: '【架空サービス】レシピ動画アプリの検索画面',
    //   role: 'UIデザイン',
    //   imgSrc: SearchImage,
    //   externalUrl: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=1%3A2'
    // },
    // {
    //   title: '【架空サービス】音楽アプリの再生画面',
    //   role: 'UIデザイン',
    //   imgSrc: MusicPlayImage,
    //   externalUrl: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=1%3A3'
    // },
    // {
    //   title: '【架空サービス】デリバリーアプリのリスト画面',
    //   role: 'UIデザイン',
    //   imgSrc: ListImage,
    //   externalUrl: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=1%3A4'
    // },
    // {
    //   title: '【架空サービス】メッセージアプリのチャット画面',
    //   role: 'UIデザイン',
    //   imgSrc: MessageImage,
    //   externalUrl: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=268%3A154'
    // },
    // {
    //   title: '【架空サービス】プログラミング学習サービスのお問い合わせ画面',
    //   role: 'UIデザイン',
    //   imgSrc: ContactImage,
    //   externalUrl: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=268%3A156'
    // },
    // {
    //   title: '【架空サービス】地図アプリの行き先検索画面',
    //   role: 'UIデザイン',
    //   imgSrc: MapImage,
    //   externalUrl: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=268%3A157'
    // },
    // {
    //   title: '【架空サービス】計算機アプリの計算画面',
    //   role: 'UIデザイン',
    //   imgSrc: CalculatorImage,
    //   externalUrl: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=268%3A158'
    // },
    // {
    //   title: '【架空サービス】音楽アプリの新規登録画面',
    //   role: 'UIデザイン',
    //   imgSrc: SignupImage,
    //   externalUrl: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=268%3A159'
    // },
    // {
    //   title: '【架空サービス】SNSのプロフィール画面',
    //   role: 'UIデザイン',
    //   imgSrc: SnsProfileImage,
    //   externalUrl: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=268%3A160'
    // },
    // {
    //   title: 'Figma版ポートフォリオ',
    //   role: 'UX/UIデザイン',
    //   imgSrc: FigmaPortfolioImage,
    //   externalUrl: 'https://www.figma.com/file/dpQQjNTvm7XVRpCvc9m7J3/minto_portfolio?node-id=0%3A1'
    // },
    // {
    //   title: 'Web版ポートフォリオ',
    //   role: 'UX/UI, React, React hooks, TypeScript, Firebase',
    //   imgSrc: WebPortfolioImage,
    //   externalUrl: 'https://github.com/sai2017/chatbot-portfolio'
    // }
  ]

  return (
    <>
      <div className='loading-wrap' style={{display: loading ? "block" : "none"}}>
        <SpinnerCircularFixed color='#222222' secondaryColor='#DADADA' className='loading-work-image' />
      </div>
      <div className='works-page-wrap' style={{display: loading ? "none" : "block"}}>
        {
          WorksDataset.map((work, index) => {
            if (work.url) {
              return (
                <Link to={work.url} rel="noopener noreferrer" key={index}>
                  <div className='work-wrap'>
                    <img src={work.imgSrc} alt='成果物の画像' className='work-image' onLoad={imageLoaded} />
                    <p className='work-title'>{work.title}</p>
                    <p className='work-role'>{work.role}</p>
                  </div>
                </Link>
              )  
            } else if (work.externalUrl) {
              return (
                <a href={work.externalUrl} target="_blank" rel="noopener noreferrer" key={index}>
                  <div className='work-wrap'>
                    <img src={work.imgSrc} alt='成果物の画像' className='work-image' onLoad={imageLoaded} />
                    <p className='work-title'>{work.title}</p>
                    <p className='work-role'>{work.role}</p>
                  </div>
                </a>
              )  
            }
          })
        }
      </div>
    </>
  );
}

export default Work;