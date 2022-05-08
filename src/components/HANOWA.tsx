import React, { useState, useRef } from 'react';
import '../assets/styles/work_detail.css'
import HeadImage from '../assets/img/hanowa_firstview.png'
// import RoughImage from '../assets/img/ideal_rough_image11.png'
// import WireFrame from '../assets/img/ideal_wf_image1.png'
import ValueScenario from '../assets/img/value_scenario.png'
import WireFrame from '../assets/img/timeline_wireframe.png'
import TimelineDesignImage from '../assets/img/timeline_design_image.png'
import PartnerSearchImage from '../assets/img/partner_search.png'
import designSystemImage from '../assets/img/designsystem_overview.png'
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
      descriptionTitle: '業務内容',
      descriptionText: `プロダクトオーナーからヒアリングした結果、UIデザイナーが不在によりデザインが整ってない、故にエンジニアが実装時も似たようなUIを実装してしまっていると伺いました。
                        \nそのため、主要な画面からデザインリニューアルと、デザインシステムの構築を少しずつ行いました。
                        \n\n［主な業務内容］
                        \n・情報設計
                        \n・UIデザイン（Figma）
                        \n・デザインシステム構築
                        \n・ユーザーインタビュー
                        \n・要件定義
                        `
    },
    {
      descriptionTitle: '【UI改善例】タイムライン画面のリニューアル',
      descriptionText: `タイムライン画面では「タイムラインでの投稿頻度が少ない」、「投稿内容が限定的」といった課題を解決するため、ユーザーインタビューを実施しました。
      　　　　　　　　　　　\nすると、\n「HANOWA初出勤が不安」\n「同じ現場でHANOWAのパートナーと話せるのが嬉しい」\n「自分からDCにメッセージするのはハードル高い」\n\nといった声がありました。
                        \n\nこれらの声をタイムラインで解決するため、ハッシュタグの機能を新たに追加し、ユーザー同士のコミュニケーションの活性化を図りました。
                        \n手書きのラフスケッチで早い段階からイメージを合わせていき、ワイヤーフレーム〜デザインしていきました。
                        \n\n※現在実装中`,
      image: ValueScenario,
      imageTitle: '価値を満たすシナリオ',
      image2: WireFrame,
      imageTitle2: 'ラフスケッチ',
      image3: TimelineDesignImage,
      imageTitle3: 'デザイン完成'
    },
    {
      descriptionTitle: '【UI改善例】パートナー一覧画面のリニューアル',
      descriptionText: `定期的なユーザーインタビューをしていく中で、アクティブなパートナー（歯科医療従事者）を効率的に見ていきたいという声が院長先生からあったため、一覧画面にログイン順で並び替えできる機能を追加しました。
                        \n更に「プロフィールを埋めているユーザーを探しづらい」という声も複数挙がっていたため、プロフィール文の入力有無を絞り込める機能を追加することにしました。
                        \n\n上記の機能のUIを作成するのと同時に、ビジュアル面の改修も同時に行い、スピーディーに開発まで進むことができました。
                        \n\nまた、この頃は開発チームがユーザーインタビューに参加し始めて間もない頃でしたが、インタビュー後にSlackで思ったことをディスカッションする文化ができたのも、今回のスピード感のあるUIデザインができた要因でした。`,
      image: PartnerSearchImage,
      imageTitle: 'パートナー一覧画面と絞り込み画面',
    },
    {
      descriptionTitle: 'デザインシステム構築',
      descriptionText: `上記のデザインリニューアルと並行して、デザインシステムの構築を小さく始めています。
                        \n私がジョインする以前から「似たようなコンポーネントがたくさんある」というエンジニアの声があったため、再利用性の高いコンポーネントを作成し、技術面、デザイン面での負債削減を狙い、デザインシステム構築に踏み切りました。
                        \nデザインシステムの構想段階からエンジニアやビジネスサイドを巻き込み、どの程度の規模感、スピード感で構築していくのか認識合わせを行いました。流れとしては主要なデザインを改修していく中で、UIを徐々にコンポーネント化したり、デザイントークンを定義していきました。
                        \n新たに作成したコンポーネントは実装時にエンジニアとオンラインでお伝えすることで、デザインシステムの形骸化を防ぐと共に、デザインシステム上でのエンジニアとの共通言語が生まれコミュニケーションがスムーズになりました。`,
      image: designSystemImage,
      imageTitle: 'デザインシステムのコンポーネント'
    }
  ]

  const WorkDetailDataset = [
    {
      title: 'HANOWA',
      year: '2021/12 ~ 参画中',
      overview: 'HANOWAという医療人材向けのマッチングプラットフォームのUIデザインを一人で担当しました。',
      productOwber: '株式会社HANOWA',
      role: 'UIデザイン',
      description: description,
      imgSrc: HeadImage,
      url: '/hanowa'
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
                        { description.image3 ? (
                            <div className='work-detail-image-wrap'>
                              <img src={description.image3} className='work-detail-image' alt='成果物の画像'/>
                              <p className='image-title'>{description.imageTitle3}</p>
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