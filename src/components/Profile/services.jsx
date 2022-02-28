import React, {useEffect} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {loadCategories} from "../../redux/features/profileReducer";
import css from './services.module.css'
import styled from "styled-components";
import lawyer from "../Lawyer/Lawyer";

const Window = (props) => {
    const categories = useSelector(state => state.lawyerProfile.categories)
    const dispatch =  useDispatch();

    useEffect(() => {
        dispatch(loadCategories())
    }, [dispatch])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавление услуг в анкету
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Выберите категорию:</h4>
                <p>
                    <Form.Select aria-label="Default select example">
                        {categories.map ((cate) => {
                            return (
                                    <option>{cate.name}</option>
                            )
                        })}
                    </Form.Select>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

function Services() {
    const Button = styled.button `
      background-color: #1f90fa;
      border: none;
      color: white;
      border-radius: 5px;
      margin: 20px 0 0 30px;
      padding: 5px;
      &:hover {
        background-color: #1f90fa;
      }
    `
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button  onClick={() => setModalShow(true)}>
                Добавить услуги
            </Button>

            <Window
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default Services;