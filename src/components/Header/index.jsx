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
            {/*<button*/}
            {/*  className={`btn btn-outline-success ${css.sign}`}*/}
            {/*  type="submit"*/}
            {/*>*/}

            {/*  Sign In*/}
            {/*</button>*/}
            <button type="button" className="btn btn-primary" data-toggle="modal"
                    data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="recipient-name"
                               className="col-form-label">Recipient:</label>
                        <input type="text" className="form-control" id="recipient-name" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message-text" className="col-form-label">Message:</label>
                        <textarea className="form-control" id="message-text"></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                    </button>
                    <button type="button" className="btn btn-primary">Send message</button>
                  </div>
                </div>
              </div>
            </div>
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
