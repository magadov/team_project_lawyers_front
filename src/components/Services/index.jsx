import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../Categories/styles.module.css";
import { fetchAllServices } from '../../redux/features/services';

const Services = ({ categoryId }) => {

  const services = useSelector((state) => state.services.services);
  const servicesByCat = services.filter((service) => service.categories === categoryId);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllServices())
  },[dispatch])

  return (
    <div>
      <div  className={`dropdown-menu ${css.dropMe}`}>
      {servicesByCat.map((serv) => {
        return (
          <a key={serv._id} className={`dropdown-item ${css.dropTwo}`} href="/lawyers" >{serv.name}</a>
        );
      })}
      </div>
    </div>
  );
};

export default Services;
