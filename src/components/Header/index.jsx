import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import css from "./header.module.css";
import logo from "../../assets/logo.png";
import SignIn from './Sign/SignIn';
import LogIn from './Log/LogIn';


const Header = () => {
  let {pathname} = useLocation()
   console.log(pathname)

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
              <NavLink className={`nav-link active  ${css.dtt}`} aria-current="page" to="/">
                Категории
              </NavLink>
            </li>
            <li className={`nav-item ${css.nav}`}>
              <NavLink className={`nav-link active  ${css.dtt}`} aria-current="page" to="/">
                Как это работает
              </NavLink>
            </li>
            <li className={`nav-item ${css.nav}`}>
              <NavLink className={`nav-link active  ${css.dtt}`} aria-current="page" to="/">
                Новости
              </NavLink>
            </li>
            <li className={`nav-item ${css.nav}`}>
              <NavLink className={`nav-link active  ${css.dtt}`} aria-current="page" to="/">
                Контакты
              </NavLink>
            </li>
            <li className={`nav-item ${css.nav}`}>
              <NavLink className={`nav-link active  ${css.dtt}`} aria-current="page" to="/">
                О нас
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <SignIn />
            <LogIn />
          </form>
        </div>

      </div>
    </nav>
  );
};

export default Header;
