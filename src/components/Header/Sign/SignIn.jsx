import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from 'react-bootstrap';
import css from './SignIn.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { createLawyer } from '../../../redux/features/application';


const SignIn = () => {

  const dispatch = useDispatch()

  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname]= useState("");
  const [password, setPassword] = useState("");

  const signIn = useSelector(state => state.application.signIn)
  const error = useSelector(state => state.application.error )

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeSurname = (e) => {
    setSurname(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    dispatch(createLawyer(login, password, name, surname));
    setShow(false)
  }

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {error}
      <Button className={css.rightMarg} variant="btn btn-outline-success" onClick={handleShow}>
        Sign in
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Авторизация</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={`form-floating mb-3`}>
            <input type="text" value={login} onChange={handleChangeLogin} className="form-control" id="floatingInput"
                   placeholder="name@example.com" />
              <label htmlFor="floatingInput">Логин</label>
          </div>
          <div className={`form-floating mb-3`}>
          <input type="password" value={password} onChange={handleChangePassword} className="form-control" id="floatingInput"
                 placeholder="name@example.com" />
          <label htmlFor="floatingInput">Пароль</label>
        </div>
          <div className={`form-floating mb-3`}>
          <input type="text" value={name} onChange={handleChangeName} className="form-control" id="floatingInput"
                 placeholder="name@example.com" />
          <label htmlFor="floatingInput">Имя</label>
        </div>
          <div className={`form-floating mb-3`}>
          <input type="text" value={surname} onChange={handleChangeSurname} className="form-control" id="floatingInput"
                 placeholder="name@example.com" />
          <label htmlFor="floatingInput">Фамилия</label>
        </div>
          <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput"
                 placeholder="name@example.com" />
          <label htmlFor="floatingInput">Отчество</label>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary"
                  onClick={handleSubmit}
                  disabled={signIn}>
            Зарегистрироваться
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignIn;