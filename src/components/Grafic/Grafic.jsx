

import React from 'react';
import s from './Grafic.module.scss';
import { Link } from 'react-router-dom';

const Grafic = ( {price} ) => {


  const scrollToConnectSection = () => {
    const section = document.getElementById("zapis");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  
  return (
    <div className={s.banner}>
      <div className={s.content}>
        <div className={s.text} >КУРСЫ</div>
        <div className={s.text} >ГРАФИЧЕСКОГО ДИЗАЙНА</div>
        <div className={s.curs}>
        <b>{price} </b>

          <Link className={s.link} >

            <button onClick={scrollToConnectSection}  >Курс мечты</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Grafic;
