// import React, { useState } from 'react';
// import s from './Footer.module.scss'
// import { Link } from 'react-router-dom';
// const Footer = () => {
//   const [email, setEmail] = useState('');

//   const handleJoin = (e) => {
//     e.preventDefault();

//     const botToken = '7651889112:AAHsQV2wx-ja5Vn5VZU5GLtw2HHQxSW34EE';  
//     const chatId = '-4698727851';      
//     const message = `New email submitted: ${email}`;

//     fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
//       .then(response => response.json())
//       .then(data => {
//         if (data.ok) {
//           setEmail(''); 
//         } else {
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div id='connect_sect' className={s.footer}>
//       <div className="container">
//         <div className={s.wrapper}>
//           <img className={s.svg} src="/round_text.svg" alt="" />
//           <form onSubmit={handleJoin}>
//             <div className={s.form}>


//               <h1>It Academy™</h1>
//               <h3>Место где начинается креативность.</h3>



//               <div className="email">
//                 <input 
//                 required
//                   type="email" 
//                   placeholder="Ваше Имя " 
//                   value={email} 
//                   onChange={(e) => setEmail(e.target.value)} 
//                 />
//                 <button type="submit">Оставить заявку</button>
//               </div>


//             </div>
//           </form>
//         </div>
//       </div>

//       <footer className={s.real_footer}>
//       <div >
//          <Link  to={'/'}  ><img  className={s.logo} src="/logo.svg" alt="" /></Link>
//             <Link  to={'/'}>WORK</Link>
//             <Link  to={'/'}>SERVICES</Link>
//             <Link  to={'/studio'}>STUDIO</Link>
//             <Link  to={'/'}>SHOP</Link>
//       </div>

//       <div>
//          <p>© 2024 It Academy - Все права защищены</p>
//       </div>
//       </footer>


//     </div>
//   );
// };

// export default Footer;
import React, { useState } from 'react';
import s from './Footer.module.scss';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 

const Footer = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleJoin = (e) => {
    e.preventDefault();

    const botToken = '7651889112:AAHsQV2wx-ja5Vn5VZU5GLtw2HHQxSW34EE';  
    const chatId = '-4698727851';      
    const message = `Имя: ${email}, Номер телефона: ${phone}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          setEmail(''); 
          setPhone('');
        } else {

        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div id='connect_sect' className={s.footer}>
      <div className="container">
        <div id='zapis' className={s.wrapper}>
          <img className={s.svg} src="/round_text.svg" alt="" />
          <form onSubmit={handleJoin}>
            <div className={s.form}>
              <h1>It Academy™</h1>
              <h3>Место где начинается креативность. Если остались вопросы оставьте свой номер мы с вами свяжемся в течении дня</h3>

              <div className="email">
                <input 
                  required
                  type="text" 
                  placeholder="Ваше Имя" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>

              <div className={s.phone}>
                <PhoneInput
                  country={'uz'} 
                  value={phone}
                  onChange={setPhone}
                />
              </div>

              <button type="submit">Оставить заявку</button>
            </div>
          </form>
        </div>
      </div>

      {/* <footer className={s.real_footer}>
        <div>
          <Link to={'/'}><img className={s.logo} src="/logo.svg" alt="" /></Link>
          <Link to={'/'}>WORK</Link>
          <Link to={'/'}>SERVICES</Link>
          <Link to={'/studio'}>STUDIO</Link>
          <Link to={'/'}>SHOP</Link>
        </div>

        <div>
          <p>© 2024 It Academy - Все права защищены</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Footer;