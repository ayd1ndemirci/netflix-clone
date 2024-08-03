import './App.css';
import { Helmet } from 'react-helmet';
import headerImage from './img/header.jpg';
import logo from './img/netflix-logo.png';
import tv from './img/tv.png';
import { useState } from 'react';
import AccordionCompound from './AccordionCompound';

function App() {
  const [email, setEmail] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <Helmet>
        <title>Netflix Türkiye</title>
      </Helmet>

      <header className='header'>
        <div className='header-top'>
          <a href='#'>
            <img src={logo} className='logo' alt='logo' />
          </a>
          <div className='footer-btn-container'>
            <i className='fa-solid fa-globe'></i>
            <select name='' id='select'>
              <option value=''>Türkçe</option>
              <option value=''>English</option>
            </select>
          </div>
          <a href='#' className='login btn'>Oturum Aç</a>
        </div>
        <div className='header-content'>
          <h1>Sınırsız film, dizi ve <br className='hideT' /> çok daha fazlası.</h1>
          <p>İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.</p>
          <div className='form-container'>
            <h3 className='form-title'>İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin.</h3>
            <div className='form-email-container'>
              <input 
                type='email' 
                className='email-input' 
                id='email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <label htmlFor='email'>E-posta adresi</label>
              <button className='btn'>Başlayın
                <i className='fa-solid fa-chevron-right'></i>
              </button>
            </div>
          </div>
        </div>
      </header>
  
      <section className='content'>
        <div className='content-inner'>
          <div className='col'>
            <p className='text-xl'>Televizyonunuzda izleyin</p>
            <p className='text-lg'>Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.</p>
          </div>
          <div className='col content-img'>
            <img src={headerImage} alt='Header' />
          </div>
        </div>
        
      </section>

      <section className='content'>
        <div className='content-inner'>
          <div className='col content-img'>
            <img src={tv} alt='Content 2' />
          </div>
          <div className='col'>
            <p className='text-xl'>İstediğiniz her yerde izleyin</p>
            <p className='text-lg'>Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.</p>
          </div>
        </div>
      </section>

      <section className='content'>
      <div className='accordion-inner'>
        <h1 className='text-xl text-center accordion-title'>Sıkça Sorulan Sorular</h1>

        <AccordionCompound />
        <div className='form-container'>
          <h3 className='form-title'>İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin.</h3>
          <div className='form-email-container'>
            <input type='email' className='email-input' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor='email'>E-posta adresi</label>
            <button className='btn'>Başlayın
              <i className='fa-solid fa-chevron-right'></i>
            </button>
          </div>
        </div>
      </div>
    </section>

      <footer>
        <div className='footer-container footer-inner'>
          <h3 className='footer-title'>Sorularınız mı var? 0850-390-7444 numaralı telefonu arayın</h3>
          <div className='content-container'>
            <div className='footer-content footer-content1'>
              <ul>
                <li><a href='#'>SSS</a></li>
                <li><a href='#'>Yatırımcı İlişkileri</a></li>
                <li><a href='#'>Kullanım Koşulları</a></li>
                <li><a href='#'>Bize Ulaşın</a></li>
              </ul>
            </div>
            <div className='footer-content footer-content2'>
              <ul>
                <li><a href='#'>Yardım Merkezi</a></li>
                <li><a href='#'>İş İmkanları</a></li>
                <li><a href='#'>Gizlilik</a></li>
                <li><a href='#'>Hız Testi</a></li>
              </ul>
            </div>
            <div className='footer-content footer-content3'>
              <ul>
                <li><a href='#'>Hesap</a></li>
                <li><a href='#'>Hediye Kartı Kullan</a></li>
                <li><a href='#'>Çerez Tercihleri</a></li>
                <li><a href='#'>Yasal Hükümler</a></li>
              </ul>
            </div>
            <div className='footer-content footer-content4'>
              <ul>
                <li><a href='#'>Medya Merkezi</a></li>
                <li><a href='#'>İzleme Yolları</a></li>
                <li><a href='#'>Kurumsal Bilgiler</a></li>
                <li><a href='#'>Sadece Netflix'te</a></li>
              </ul>
            </div>
          </div>

          <div className='footer-btn-container'>
            <i className='fa-solid fa-globe'></i>
            <select name='' id='select'>
              <option value=''>Türkçe</option>
              <option value=''>English</option>
            </select>
          </div>
          <p>Netflix Türkiye</p>
        </div>
      </footer>
    </>
  );
}

export default App;
