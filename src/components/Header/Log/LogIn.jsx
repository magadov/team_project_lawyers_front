import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import css from '../Sign/SignIn.module.css';

const LogIn = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="btn btn-outline-success" onClick={handleShow}>
        Log In
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LogIn;