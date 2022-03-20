import React from 'react';
import icon from '../../assets/icon.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import css from '../HowItsWork/howItsWork.module.css'
import kart5 from '../../assets/kart5.jpg'

const HowItsWork = () => {

  return (
    <div id='cont' className={css.container} >
      <div className={css.content}>
        <div className={css.content1}>
          <img alt={icon} src={icon}/>
          <h3> Чувствуйте себя уверенно</h3>
          <h5>В ситуациях, где нужно разбираться в законодательстве</h5>
        </div>
        <div className={css.content2}>
          <img alt={icon2} src={icon2}/>
          <h3> Не переплачивайте</h3>
          <h5>Безлимитный доступ к устным консультациям в течение года</h5>
        </div>
        <div className={css.content3}>
          <img alt={icon3} src={icon3}/>
          <h3> Советуйтесь с профессионалами</h3>
          <h5>Вам помогут опытные специалисты из разных отраслей права</h5>
        </div>
      </div>
      <div className={css.new}>
        <div>
          <img className={css.kart} alt={kart5} src={kart5}/>
        </div>
        <div className={css.info}>
          <h2> Поводы обратиться к личному юристу: </h2>
          <ul>
            <li>
              Вам или вашим родным оказали некачественную медицинскую помощь
            </li>
            <li>
              Хотите взыскать неустойку со строителей за задержку объекта
            </li>
            <li>
              Вас залил сосед, и вы собираетесь взыскать ущерб
            </li>
            <li>
              Нужно оформить наследство или узнать порядок его получения
            </li>
            <li>
              И многие другие жизненные ситуации — от оформления документов до разногласий с работодателем
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItsWork;