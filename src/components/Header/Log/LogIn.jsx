import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const LogIn = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="btn btn-outline-success" onClick={handleShow}>
        Log In
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Авторизация</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={`form-floating mb-3`}>
            <input type="text" className="form-control" id="floatingInput"
                   placeholder="name@example.com" />
            <label htmlFor="floatingInput">Логин</label>
          </div>
          <div className={`form-floating mb-3`}>
            <input type="password" className="form-control" id="floatingInput"
                   placeholder="name@example.com" />
            <label htmlFor="floatingInput">Пароль</label>
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