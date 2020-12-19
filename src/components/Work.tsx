import React from 'react';
import '../assets/styles/work.css'
import SearchImage from '../assets/img/cocoda_search_figma.png'
import RemenImage from '../assets/img/Remen_figma.png'
import ListImage from '../assets/img/cocoda_list_figma.png'
import MusicPlayImage from '../assets/img/cocoda_music_play_figma.png'
import MessageImage from '../assets/img/cocoda_message_figma.png'
import ContactImage from '../assets/img/cocoda_contact_figma.png'
import MapImage from '../assets/img/cocoda_map_figma.png'
import CalculatorImage from '../assets/img/cocoda_calculator_figma.png'
import SignupImage from '../assets/img/cocoda_signup_figma.png'
import SnsProfileImage from '../assets/img/cocoda_profile_figma.png'
import FigmaPortfolioImage from '../assets/img/figma_minto_portfolio_cover.png'

interface WorksDatasetProps {
  title: string,
  role: string,
  imgSrc: string,
  url: string
}

const Work: React.FC = () => {

  const WorksDataset: WorksDatasetProps[] = [
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
            <a href={work.url} target="_blank">
              <div className='work-wrap'>
                <img key={index} src={work.imgSrc} className='work-image'/>
                <p key={index} className='work-title'>{work.title}</p>
                <p key={index} className='work-role'>{work.role}</p>
              </div>
            </a>
          )
        })
      }
    </div>
  );
}

export default Work;