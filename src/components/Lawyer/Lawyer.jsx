import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllLawyers } from '../../redux/features/lawyers';
import styles from "./styles.module.css"

const Lawyer = () => {
  const lawyers = useSelector((state) => state.lawyers.lawyers)
  const services = useSelector((state) => state.services.services)
  const lawyersByServ = lawyers.filter((law) => law._id === services.userId)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllLawyers())
  },[dispatch])

  return (
      <div className={styles.main}>
        {lawyers.map((lawyer) => {
          return (
            <div key={lawyer._id} className={`card ${styles.cardDiv}`}>
                <img src={`http://localhost:3003/${lawyer.img}`}   alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{lawyer.name} {lawyer.surname}</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a href="#" className="btn btn-primary">Оставить заявку</a>
              </div>
            </div>
          )
        })}
      </div>
  );
};

export default Lawyer;