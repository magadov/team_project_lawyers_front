import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../../redux/features/application';

const LogIn = () => {

  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = useSelector(state => state.application.doLogin)
  const error = useSelector(state => state.application.error )

  const handleChangeLogin = (e) => {
    setLogin(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(auth(login, password))
    setShow(false)
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {error}
      <Button variant="btn btn-outline-success" onClick={handleShow}>
        Log In
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit} disabled={doLogin}>
            Войти
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LogIn;