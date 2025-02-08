
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleBurger = () => {
    setActive(!active);
  };

  const closeBurger = () => {
    setActive(false);
  };

  

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link to={'/'}>
          <img src="/itacademylogo.svg" alt="Logo" className={s.logo} />
        </Link>

        <div className={`${s.links} ${active ? s.active : ''}`}>
          <Link onClick={closeBurger} to={'/'}>
            главная
          </Link>
          <Link onClick={closeBurger} to={'/freelesson'}>
            Бесплатный урок
          </Link>
          <Link onClick={closeBurger} to={'/studio'}>
            студия
          </Link>
          <Link onClick={closeBurger} to={'/courses'}>
            Курсы
          </Link>
          <Link onClick={closeBurger} to={'/branches'}>
            Филиалы
          </Link>
          
        </div>

        <div
          onClick={toggleBurger}
          className={`${s.burger} ${active ? s.active : ''}`}
        >
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
