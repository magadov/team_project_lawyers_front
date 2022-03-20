import React, {useEffect} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {loadCategories} from "../../redux/features/profileReducer";
import styled from "styled-components";

const Window = (props) => {
    const categories = useSelector(state => state.lawyerReducer.categories)
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
                                    <option key={cate._id}>{cate.name}</option>
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

function Service() {
    const CreateButton = styled.button `
        background-color: white;
        border: none;
        &:hover {
            border-bottom: 1px solid #1f90fa;
        }

    `
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <CreateButton  onClick={() => setModalShow(true)}>
                Выбрать услугу
            </CreateButton>

            <Window
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default Service;

