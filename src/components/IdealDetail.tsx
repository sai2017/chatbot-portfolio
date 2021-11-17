import React, { useState, useRef } from 'react';
import '../assets/styles/work_detail.css'
import HeadImage from '../assets/img/myIDEAL_OGP.png'
import RoughImage from '../assets/img/ideal_rough_image11.png'
import WireFrame from '../assets/img/ideal_wf_image1.png'
import designSystemImage from '../assets/img/ideal_design-system.png'
import graphicImage from '../assets/img/ideal_graphic_image1.png'
import userStoryMappingImage from '../assets/img/ideal_user_story_mapping_image1.png'
import prototypeImage from '../assets/img/ideal_prototype_image.png'
import { SpinnerCircularFixed } from 'spinners-react';


const IdealDetail: React.FC = () => {
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
      descriptionTitle: '業務フロー',
      descriptionText: 'ELEMENTS社ではサービスのUIデザインを一人で担当しました。まずは要件の発案に至るまでの経緯、サービスで実現したいこと等の背景を伺った上で、オーナー様と毎日会話しながら仕様を決めていきました。イメージに乖離がないように、ラフデザインを作成し、そこからワイヤーフレーム、UIデザインを進めていきました。',
      image: RoughImage,
      imageTitle: 'ラフスケッチ',
      image2: WireFrame,
      imageTitle2: 'ワイヤーフレーム' 
    },
    {
      descriptionTitle: 'デザインシステム',
      descriptionText: 'サービスのUIデザインと並行して、デザインシステムの構築もエンジニアや他デザイナーを巻き込みリードしました。目的としては、「UIに統一性を持たせ、将来的なデザインの負債軽減」、「UIの再利用性の高くし、コミュニケーションコストを削減し、開発スピードが上げる」、「デザインの属人化を無くすことで他のデザイナーへの教育コスト削減」がありました。自分自身のエンジニアの経験を活かしながら、コンポーネントを作成し、定期的にデザインシステムのミーティングを設け、継続的にメンテナンスしていました。',
      image: designSystemImage,
      imageTitle: 'デザインシステムのコンポーネント群'
    },
    {
      descriptionTitle: '組織改善',
      descriptionText: 'それまで各プロジェクトで分断されていたデザイナー全員とのミーティングを設置、Slackでデザインの知識共有の場の提案、エンジニアとデザイナーでざっくばらんなミーティングを設置等を行うことで、デザイナー同士やエンジニアとデザイナーのコミュニケーションが円滑になりました。'
    },
    {
      descriptionTitle: 'レビュー',
      descriptionText: '他サービスを担当しているUIデザイナーのデザインレビューを行いました。なぜこのUIにしたのか意図を伺うことを意識しつつも、相手のデザインの表現の幅を少なくしないようなフィードバックを心がけていました。'
    },
    {
      descriptionTitle: 'グラフィック作成',
      descriptionText: 'UIデザイン以外でも、アイコン、バナー、簡単なイラストの作成を一部担当してました。',
      image: graphicImage,
      imageTitle: 'グラフィックサンプル'
    },
    {
      descriptionTitle: 'ユーザーストーリーマッピング作成',
      descriptionText: 'サービスを最小限の機能でリリースするため、すなわちMVP(Minimum Viable Product)機能の決定を行いました。ユーザーストーリーマッピングという手法を用いて、ユーザーの行動やタスクを洗い出し、時系列のストーリーに沿ってマッピングしていきました。',
      image: userStoryMappingImage,
      imageTitle: 'ユーザーストーリーマッピング'
    },
    {
      descriptionTitle: 'プロトタイプ作成',
      descriptionText: 'プロトタイプの作成もFigmaで作成しました。「Figma Mirror」というアプリでスマホから実機で動きをオーナーやエンジニアに確認してもらいながら進めていきました。',
      image: prototypeImage,
      imageTitle: 'プロトタイプ'
    }
  ]

  const WorkDetailDataset = [
    {
      title: 'myIDEAL',
      year: '2021/04 ~ 参画中',
      overview: 'パンプス専門ECサイトmyIDEALサービスのUIデザインを担当しました。※リリース前の成果物なので、具体的な業務内容や成果物を掲載しておりません。詳細は直接お問い合わせください。',
      productOwber: 'ELEMENTS株式会社',
      role: 'UIデザイン',
      description: description,
      imgSrc: HeadImage,
      url: '/myideal'
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
              <div className='work-detail-wrap' key={index}>
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
                        <>
                          { description.image ? (
                            <div className='work-detail-image-wrap'>
                              <img src={description.image} className='work-detail-image' alt='成果物の画像'/>
                              <p className='image-title'>{description.imageTitle}</p>
                            </div>
                          ) : (<></>)}
                          { description.image2 ? (
                            <div className='work-detail-image-wrap'>
                              <img src={description.image2} className='work-detail-image' alt='成果物の画像'/>
                              <p className='image-title'>{description.imageTitle2}</p>
                            </div>
                        ) : (<></>)}
                        </>
                        
                      ) : (<></>)}
                    </div>
                  )
                })}
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default IdealDetail;