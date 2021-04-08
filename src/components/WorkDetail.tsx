import React, { useState, useRef } from 'react';
import '../assets/styles/work_detail.css'
import HeadImage from '../assets/img/portfolio-greensnap-head.png'
import RoughImage from '../assets/img/portfolio-greensnap-rough.png'
import ArrangeImage from '../assets/img/portfolio-greensnap-arrangement.png'
import UiImage from '../assets/img/portfolio-greensnap-uidesign.png'
import OutputImage from '../assets/img/portfolio-greensnap-output-example.png'
import { SpinnerCircularFixed } from 'spinners-react';


const WorkDetail: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const counter = useRef<number>(0);

  const imageLoaded = () => {
    // 画像を一つ読み込む毎に1増やす
    counter.current += 1
    // 全ての画像の読み込みが終わったらloadingをfalseにする
    if (counter.current >= WorkDetailDataset.length) {
      setLoading(false);
    }
  }

  const description = [
    {
      descriptionTitle: '課題の洗い出し',
      descriptionText: 'まずはPV率、回遊率の改善に向けて、トップページにどのような課題が存在しているか、グラフィック面、UI設計面等の観点から洗い出しました。'
    },
    {
      descriptionTitle: 'ラフ作成',
      descriptionText: '理想形のラフのUIを作成し、なぜこのUIにしたのかを粒度を細かくしてプレゼンさせていただき、それを叩き台にしてオーナーと議論を進めました。',
      image: RoughImage
    },
    {
      descriptionTitle: '改善案整理',
      descriptionText: '施策に対する期待値と工数を数値化し、優先順位を決めてデザインを作成しました。',
      image: ArrangeImage
    },
    {
      descriptionTitle: 'UIデザイン',
      descriptionText: '各改善案毎に複数のUIパターンを作成し、オーナーとすり合わせしながら最終的なデザインを決めていきました。',
      image: UiImage
    },
    {
      descriptionTitle: '実装',
      descriptionText: '今回は実装（フロントエンド）も自分で行いました。必要に応じてエンジニアの方にAPIを用意していただき、JQuery、CSS、HTMLを用いてAPIを叩いたり、ビジュアルを作っていきました。'
    },
    {
      descriptionTitle: 'A/Bテスト',
      descriptionText: '実装が完了したらGoogle Optimizeを用いてA/Bテストを行いました。オリジナルのデザインや、複数出したデザインパターンを設定し、CTRやセッション時間等の検証をしていきました。'
    },
    {
      descriptionTitle: '改善施策①',
      descriptionText: 'トップページに商品のレビュー投稿を表示させました。EC内の総合評価を強調させることによって、ECへの信頼を感じてもらうようにしました。どんな商品レビューを表示するかの仕様も提案させていただき、ユーザーのECに対する満足度の高さをいかに伝えるかを考えデザイン、実装しました。'
    },
    {
      descriptionTitle: '改善施策②',
      descriptionText: '初見ユーザーに、どんな商品が売れているのかすぐ理解してもらうため、トップページに商品のランキングを表示させるご提案をさせてもらいました。ランキングをトップページに置くことで、トップから商品詳細へのCTR改善されるのではないかと仮説を立て、デザインと実装をしました。',
      image: OutputImage
    }
  ]

  const WorkDetailDataset = [
    {
      title: 'GreenSnap',
      year: '2021',
      overview: 'GreenSnapは植物に特化したSNSアプリです。アプリ内で植物を購入できるECサイト「GreenSnap STORE」のUIデザインをリードさせてもらいました。現在のWebViewのECサイトから、将来的なネイティブアプリ化に先立って、トップページデザインの最適化とPV率、回遊率の改善を行いました。',
      productOwber: 'GreenSnap株式会社',
      role: 'UIデザイン',
      description: description,
      imgSrc: HeadImage,
      url: '/greensnap'
    }
  ]

  return (
    <>
      <div className='loading-wrap' style={{display: loading ? "block" : "none"}}>
        <SpinnerCircularFixed color='#222222' secondaryColor='#DADADA' className='loading-work-image' />
      </div>
      <div className='work-page-wrap' style={{display: loading ? "none" : "block"}}>
        {
          WorkDetailDataset.map((work, index) => {
            return (
              <a href={work.url} target="_blank" rel="noopener noreferrer" key={index}>
                <div className='work-detail-wrap'>
                  <img src={work.imgSrc} alt='成果物の画像' className='work-detail-image' onLoad={imageLoaded} />
                  <p className='work-detail-title'>{work.title}</p>
                  <p className='work-detail-role'>{work.year}</p>
                  <p className='work-detail-overview'>{work.overview}</p>
                  <div className='introduction-wrap'>
                    <div className='introduction-inner'>
                      <p className='introduction-title'>Product Owner</p>
                      <p className='introduction-text'>{work.productOwber}</p>
                    </div>
                    <div className='introduction-inner'>
                      <p className='introduction-title'>Role</p>
                      <p className='introduction-text'>{work.role}</p>
                    </div>
                  </div>
                  { work.description.map((description, descriptionIndex) => {
                    return (
                      <div className='work-description' key={descriptionIndex}>
                        <p className='description-title'>{description.descriptionTitle}</p>
                        <p className='description-text'>{description.descriptionText}</p>
                        { description.image ? (
                          <div className='work-detail-image-wrap'>
                            <img src={description.image} className='work-detail-image' alt='成果物の画像'/>
                          </div>
                        ) : (<></>)}
                      </div>
                    )
                  })}
                </div>
              </a>
            )
          })
        }
      </div>
    </>
  );
}

export default WorkDetail;