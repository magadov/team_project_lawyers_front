import React from 'react';
import apple from '../../../assets/apple.svg'
import google from '../../../assets/google.svg'
import kart6 from '../../../assets/kart6.jpg'
import css from './Contacts.module.css'

const Contacts = () => {
  return (
    <div id='contact' className={css.container}>
      <div className={css.content}>
        <h1>Вы можете общаться с юристом</h1>
        <h5>В чате личного кабинета</h5>
        <h5>По телефону
          8 800 775-73-09</h5>
        <h5>В чате мобильного приложения</h5>
        <div>
          <img className={css.apple} alt={apple} src={apple}/>
          <img alt={google} src={google}/>
        </div>
      </div>
      <img className={css.kart6} alt={kart6} src={kart6}/>
    </div>
  );
};

export default Contacts;