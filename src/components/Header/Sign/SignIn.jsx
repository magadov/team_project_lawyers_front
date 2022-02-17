import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from 'react-bootstrap';
import css from './SignIn.module.css';


const SignIn = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className={css.rightMarg} variant="btn btn-outline-success" onClick={handleShow}>
        Sign in
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Авторизация</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={`form-floating mb-3 ${css.inpStar}`}>
            <input type="email" className="form-control" id="floatingInput"
                   placeholder="name@example.com" />
              <label htmlFor="floatingInput">Логин</label><p className={css.star}>*</p>
          </div>
          <div className={`form-floating mb-3 ${css.inpStar}`}>
          <input type="email" className="form-control" id="floatingInput"
                 placeholder="name@example.com" />
          <label htmlFor="floatingInput">Пароль</label><p className={css.star}>*</p>
        </div>
          <div className={`form-floating mb-3 ${css.inpStar}`}>
          <input type="email" className="form-control" id="floatingInput"
                 placeholder="name@example.com" />
          <label htmlFor="floatingInput">Имя</label><p className={css.star}>*</p>
        </div>
          <div className={`form-floating mb-3 ${css.inpStar}`}>
          <input type="email" className="form-control" id="floatingInput"
                 placeholder="name@example.com" />
          <label htmlFor="floatingInput">Фамилия</label><p className={css.star}>*</p>
        </div>
          <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput"
                 placeholder="name@example.com" />
          <label htmlFor="floatingInput">Отчество</label>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Зарегистрироваться
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignIn;