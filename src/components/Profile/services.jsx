import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addServices, loadCategories, loadServices } from "../../redux/features/profileReducer";
import styled from "styled-components";

const Window = (props) => {
    const [selectCat, setSelectCat] = useState(null);
    // const [selectServ, setSelectServ] = useState(null)

  const categories = useSelector((state) => state.lawyerReducer.categories);
  const services = useSelector((state) => state.lawyerReducer.services);
  const dispatch = useDispatch();

  const handleSelectChange = (e) => {
      const {value} = e.target;
      setSelectCat(value);
  }

  const handleAdd = (id) => {
    dispatch(addServices(id),
      props.onHide(false))
  }

   useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadServices())
  }, [dispatch]);

  const filteredServices = services.filter((service) => service.categories === selectCat);

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
          <Form.Select aria-label="Default select example" value={selectCat} onChange={handleSelectChange}>
              <option value="" selected disabled hidden>Выберите категорию</option>
            {categories.map((cate) => {
              return <option key={cate._id} value={cate._id}>{cate.name}</option>;
            })}
          </Form.Select>
            <Form.Select>
                <option value="" selected disabled hidden>Выберите услугу</option>
                {filteredServices.map((service) => {
                    return (
                      <>
                      <option key={service._id} value={service._id}>{service.name}</option>;
                      </>
                )
                })}
            </Form.Select>
        </p>
      </Modal.Body>
      <Modal.Footer>
        {filteredServices.map((service) => {
          return (
            <Button onClick={() => handleAdd(service._id)}>Добавить</Button>
          )
        })}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

function Service() {
  const CreateButton = styled.button`
    background-color: white;
    border: none;
    &:hover {
      border-bottom: 1px solid #1f90fa;
    }
  `;
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <CreateButton onClick={() => setModalShow(true)}>
        Выбрать услугу
      </CreateButton>

      <Window show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Service;
