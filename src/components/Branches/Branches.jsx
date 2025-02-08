import React, { useState, useEffect } from 'react';
import s from './Branches.module.scss';
import { Link } from 'react-router-dom';

const Branches = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    { img: '/filial_1.png', author: 'It Academy Yunusobod', title: 'Здание Главпочтампта',  des: '→ Улица Шахрисабз 7 ,Ташкент, Узбекистан', link: "https://maps.app.goo.gl/wSuYShPyiGuhYNqWA" },
    { img: '/filial_1_2.png', author: 'IT Academy Sergeli', title: 'Ташкентская билиотека',  des: '→ Ташкент, Сергелийский район, Массив 5', link: "https://maps.app.goo.gl/KpRNngkxYbkWQpNW9", studio: "" },
    // Добавь больше элементов, если нужно
  ];



  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={s.carousel}>
      {/* list */}
      <div className={s.list}>
        {items.map((item, index) => (
          <div
            className={`${s.item} ${index === activeIndex ? s.active : ''}`}
            key={index}
            style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
          >
            <img src={item.img} alt={item.author} />
            <div className={s.content}>
              <div className={s.author}>{item.author}</div>
              <div className={s.title}>{item.title}</div>
              <Link to={item.link} className={s.des}>{item.des}</Link>
              <Link to={'/studio'}>→ Хочешь увидеть как все выглядит внутри? <br />Тогда нажимай сюда!</Link>
            </div>
            <div className={s.btns}>
              <button>zapis</button>
            </div>
          </div>
        ))}
      </div>

      {/* arrows */}
      <div className={s.arrows}>
        <button onClick={handleNext}>Еще филиал</button>
      </div>
    </div>
  );
};

export default Branches;
