import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteServices,
  deleteServ,
  loadMyList,
} from "../../redux/features/profileReducer";
import Services from "./CreateServices";
import css from "./services.module.css";

const MyServicesList = () => {
  const lawyer = useSelector((state) => state.lawyerReducer.lawyer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMyList());
  }, [dispatch]);

  const handleDeleteService = (id) => {
    dispatch(deleteServices(id))
  };

  const handleDelete = (id) => {
    dispatch(deleteServ(id))
  }

  return (
    <div>
      <Services />
      {lawyer.services.map((service) => {
        return (
          <>
            <tbody key={service._id}>
            <tr>
              <td className={css.text}>{service.name}</td>
              <td className={css.price}>{service.price}RUB</td>
            </tr>
            </tbody>

            <button
              className={css.removeServicesButton}
              onClick={() => handleDelete(service._id)}
            >
              убрать из списка
            </button>
          </>
        );
      })}

      {lawyer.serv.map((item) => {
        return (
          <>
            <tbody key={item._id}>
              <tr>
                <td className={css.text}>{item.text}</td>
                <td className={css.price}>{item.price}RUB</td>
              </tr>
            </tbody>

            <button
              className={css.removeServicesButton}
              onClick={() => handleDeleteService(item._id)}
            >
              убрать из списка
            </button>
          </>
        );
      })}
    </div>
  );
};

export default MyServicesList;
