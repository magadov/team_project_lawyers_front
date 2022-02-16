import React from "react";
import { NavLink } from "react-router-dom";
import css from "./header.module.css";
import logo from "../../assets/logo.png";


const Header = () => {
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
            <button
              className={`btn btn-outline-success ${css.sign}`}
              type="submit"
            >
              Sign In
            </button>
            <button className="btn btn-outline-success" type="submit">
              Log In
            </button>
          </form>
        </div>

      </div>
    </nav>
  );
};

export default Header;
