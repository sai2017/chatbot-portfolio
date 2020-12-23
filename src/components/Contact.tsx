import React from "react";
import '../assets/styles/style.css'
import '../assets/styles/contact.css'
import ProfileIcon from '../assets/img/minto-image-min.jpg'
import TwitterIcon from '../assets/img/ant-design_twitter-circle-filled.svg'
import GitHubIcon from '../assets/img/ant-design_github-filled.svg'

const Contact: React.FC = () => {

  return (
        <div className='contact-wrap'>
          <img src={ProfileIcon} alt='mintoの画像' className='contact-profile-icon' />
          <div className='contact-description'>
            <p>お問い合わせは以下のTwitterのDMでお待ちしております。</p>
            <p>お仕事のご依頼、ポートフォリオの感想等、お気軽にご連絡下さいませ。</p>
          </div>
          <div className='contact-icons'>
            <a href='https://twitter.com/minto_design' target="_blank" rel="noopener noreferrer">
              <img src={TwitterIcon} alt='Twitterのアイコン' className='contact-icon'/>
            </a>
            <a href='https://github.com/sai2017' target="_blank" rel="noopener noreferrer">
              <img src={GitHubIcon} alt='GitHubのアイコン' className='contact-icon'/>
            </a>
          </div>
        </div>
  );
}

export default Contact;
