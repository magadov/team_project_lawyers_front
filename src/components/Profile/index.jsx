import React, { useEffect } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import {
  editLawyersInfo,
  loadLawyer,
  uploadAvatar,
} from "../../redux/features/profileReducer";
import { useDispatch, useSelector } from "react-redux";
import css from "./profile.module.css";
import Services from "./services";
import styled from "styled-components";

const Modal = ({ name, ...props }) => {
  const lawyer = useSelector((state) => state.lawyerProfile.lawyer);
  const dispatch = useDispatch();

  const CloseButton = styled(Button) `
    background-color: #1f90fa;
    border: none;
    color: white;
    margin: 10px 10px 0 30px;
    &:hover {
      background-color: #1f90fa;
    }
  `

  const Profile = styled(Button) `
  background: none;
  border: none;
  &:hover {
    border: none;
    background: none;
  }  
  `

  useEffect(() => {
    dispatch(loadLawyer());
  }, [dispatch]);

  const [show, setShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState(null);

  const [lawyerNameEditText, setLawyerNameEditText] = React.useState("");
  const [lawyerSurnameEditText, setLawyerSurnameEditText] = React.useState("");
  const [lawyerEmailEditText, setLawyerEmailEditText] = React.useState("");

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleOpenEdit = () => setOpen(true);
  const handleEditClose = () => setOpen(false);

  const handleChangeName = (e) => {
    setLawyerNameEditText(e.target.value);
  };

  const handleChangeSurname = (e) => {
    setLawyerSurnameEditText(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setLawyerEmailEditText(e.target.value);
  };

  const handleChangeImage = (e) => {
    setFile(e.target.files[0]);
    dispatch(uploadAvatar(e.target.files[0]));
  };

  return (
    <>
      <Profile variant="primary" onClick={handleShow} className="me-2">
        Профиль
      </Profile>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Body>
          <div className={css.avatarBlock}>
            <img
              className={css.avatar}
              src={`http://localhost:3006/${lawyer.img}`}
            />
          </div>
          <div className={css.editButton}>
            <label className={css.filebutton}>
              <span>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  accept="image/*"
                  onChange={handleChangeImage}
                  name="img"
                />
                Изменить фотографию
              </span>
            </label>
          </div>
          {open ? (
            <>
              <div className={css.lawyersInfoEdit}>
                <span className={css.FIO}> Имя: </span>
                <input
                  type="text"
                  // value={!lawyerNameEditText ? lawyer.name : lawyerNameEditText}
                  onChange={handleChangeName}
                  placeholder="введите имя..."
                />
                <span className={css.FIO}>Фамилия:</span>
                <input
                  placeholder="введите фамилию..."
                  // value={!lawyerSurnameEditText ? lawyer.surname : lawyerSurnameEditText}
                  onChange={handleChangeSurname}
                />
                <span className={css.FIO}>Электронная почта:</span>
                <input
                  placeholder="введите почту..."
                  // value={!lawyerEmailEditText ? lawyer.email : lawyerEmailEditText}
                  onChange={handleChangeEmail}
                />
                <div className={css.duoEditBtn}>
                  <CloseButton variant="primary" onClick={() => setOpen(false)} className={css.closeButton}>
                    Закрыть
                  </CloseButton>{" "}
                  <LoadingButton
                    name={
                      !lawyerNameEditText ? lawyer.name : lawyerNameEditText
                    }
                    email={
                      !lawyerEmailEditText ? lawyer.email : lawyerEmailEditText
                    }
                    surname={
                      !lawyerSurnameEditText ? lawyer.surname : lawyerSurnameEditText
                    }
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={css.lawyersInfo}>
                <span className={css.FIO}> Имя:</span>
                <li className={css.text}> {lawyer.name}</li>
                <span className={css.FIO}> Фамилия:</span>
                <li className={css.text}> {lawyer.surname}</li>
                <span className={css.FIO}> Электронная почта:</span>
                <li className={css.text}> {lawyer.email}</li>
                <CloseButton variant="primary" className={css.editBtn} onClick={handleOpenEdit}>
                  {" "}
                  Редактировать данные{" "}
                </CloseButton>
              </div>
              <Services />
            </>
          )}
          {/*<Services/>*/}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

function LoadingButton({ name, surname, email }) {
  const [isLoading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(editLawyersInfo(name, surname, email));
    setLoading(true);
  };

  const CustomButton = styled(Button) `
  background-color: #1f90fa;
    border: none;
    color: white;
    margin: 10px 0 0 0;
    &:hover {
      background-color: #1f90fa;
    }
  `

  return (
    <CustomButton
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading…" : "Сохранить"}
    </CustomButton>
  );
}

function Profile() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <Modal key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Profile;
