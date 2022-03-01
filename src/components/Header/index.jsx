import React from "react";
import { NavLink } from "react-router-dom";
import css from "./header.module.css";
import logo from "../../assets/logo.png";
import SignIn from './Sign/SignIn';
import LogIn from './Log/LogIn';
import { useSelector } from 'react-redux';
import Profile from "../Profile";
import styled from 'styled-components';

const Header = () => {
  const token = useSelector(state => state.application.token)

  const CustomNavLink  = styled(NavLink) `color: white;`;

  document.querySelectorAll('a.cont').forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault()

      const href = this.getAttribute('href').substring(1)

      const scrollTarget = document.getElementById(href)

      const topOffset = 0
      const elementPosition = scrollTarget
      const offsetPosition = elementPosition - topOffset

      window.scrollBy(({
        top:offsetPosition,
        behavior: 'smooth',
      }))
    })
  })

  return (
    <nav className={`navbar navbar-expand-lg ${css.header}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          {" "}
          <img className={css.logo} alt="asd" src={logo} />{" "}
        </NavLink>
        <div className={`collapse navbar-collapse  ${css.menu}`} id="navbarSupportedContent">
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 `}>
            <li className={`nav-item  ${css.nav}`}>
              <CustomNavLink className={`nav-link active  ${css.dtt}`} aria-current="page" to="/categories">
                Категории
              </CustomNavLink>
            </li>
            <li className={`nav-item ${css.nav}`}>
              <a className={`nav-link active`} aria-current="page" href="#cont">
                Как это работает
              </a>
            </li>
            <li className={`nav-item ${css.nav}`}>
              <NavLink className={`nav-link active  ${css.dtt}`} aria-current="page" to="/">
                Новости
              </NavLink>
            </li>
            <li className={`nav-item ${css.nav}`}>
              <a className={`nav-link active  ${css.dtt}`} aria-current="page" href="#contact">
                Контакты
              </a>
            </li>
            <li className={`nav-item ${css.nav}`}>
              <NavLink className={`nav-link active  ${css.dtt}`} aria-current="page" to="/">
                О нас
              </NavLink>
            </li>
          </ul>

          {token ? <Profile/> : (<form className="d-flex">
            <SignIn />
            <LogIn />
          </form>)}
        </div>

      </div>
    </nav>
  );
};

export default Header;
