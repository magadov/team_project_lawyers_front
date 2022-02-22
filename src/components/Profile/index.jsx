import React, {useEffect} from 'react';
import { Button, Offcanvas } from "react-bootstrap";
// import styled from "styled-components";
import {loadLawyers, uploadAvatar} from "../../redux/features/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import css from './profile.module.css';

const Modal = ({ name, ...props }) => {
    const lawyer = useSelector((state) => state.lawyerProfile.lawyer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadLawyers())
    }, [dispatch])

    const [show, setShow] = React.useState(false);
    const [file, setFile] = React.useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChangeImage = (e) => {
        setFile(e.target.files[0]);
        dispatch(uploadAvatar(e.target.files[0]));
    };


    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className={css.profileMain}>
                        <div className={css.info}>
                            {lawyer.map((info) => {
                                return (
                                    <li>  {info.name} </li>
                                )
                            })}
                        </div>
                        <div className={css.avatar}>
                            <img src={lawyer.img}/>
                            <label className="filebutton">
                  <span>
                    <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        accept="image/*"
                        onChange={handleChangeImage}
                        name="img"
                    />
                    <span className={css.editIcon}>dsdadsd </span>
                  </span>
                            </label>
                        </div>

                    </div>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};


function Profile() {
    return (
        <>
            {['end'].map((placement, idx) => (
                <Modal key={idx} placement={placement} name={placement} />
            ))}
        </>
    );
};


export default Profile;