import React from 'react';
import icon from '../../assets/icon.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import css from '../HowItsWork/howItsWork.module.css'

const HowItsWork = () => {

  return (
    <div id='cont' className={css.container} >
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
  );
};

export default HowItsWork;