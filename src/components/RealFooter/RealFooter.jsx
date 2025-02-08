import React from 'react';
import s from './RealFooter.module.scss';
import { Link } from 'react-router-dom';

const RealFooter = () => {
  return (
    <footer className={s.footer}>
    <div className="container__main">
    <div className={s.footer__wrapper}>
      {/* <div className={`${s.footer__sect__1} ${s.footer__sect} }`> */}
            <div className={`${s.footer__sect__1} ${s.footer__sect}`}>
        <div className={s.text}>
        <h2>Новости</h2>
        <p>Подпишитесь на рассылку<br /> и получайте новости первыми</p>
        </div>
        <div className={s.email}>
          <input type="email" placeholder='Ваша эл. почта' />
          <button>Подтвердить</button>
        </div>
      </div>
      <div className={`${s.footer__sect__2} ${s.footer__sect}`}>
        <img src="/logoacademy.jpg" alt="" className={s.sdct} />

        <div className={s.socials}>
        <Link> <img className={s.social} src='/inst.svg'  alt="" />  </Link>
        <Link to={'/branches'}  > <img className={s.social2} src='/map.svg'  alt="" />    </Link>
        {/* <Link> <img className={s.social} src='/'  alt="" />    </Link> */}
        {/* <Link> <img className={s.social} src='/'  alt="" />   </Link> */}

        </div>

        <div className={s.links}>
        <Link  to={'/'}>
            Главная
          </Link>
          <Link  to={'/freelesson'}>
            Бесплатный урок
          </Link>
          <Link to={'/studio'}>
            Студия
          </Link>
          <Link  to={'/courses'}>
            Курсы
          </Link>
          <Link  to={'/branches'}>
            Филиалы
          </Link>
         
        </div>
      </div>
      <div className={`${s.footer__sect__3} ${s.footer__sect}`}>
       <h2>Помощь и поддержка</h2>
       <div className={s.another}>
       <p>+998 94 709 44 47</p>
       <p>+998 94 709 44 47</p>
       <p>+998 94 709 44 47</p>

       </div>


       <div className={s.sec}>
        <h2>Филиалы</h2>
        <Link to={'/branches'}>Найти филиал</Link>
       </div>
      </div>
      </div>
    </div>
    </footer>
  );
};

export default RealFooter;