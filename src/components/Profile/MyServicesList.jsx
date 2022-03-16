import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  loadMyList } from '../../redux/features/profileReducer';
import Services from './CreateServices';

const MyServicesList = () => {
  const lawyer = useSelector((state) => state.lawyerReducer.lawyer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMyList());
  }, [dispatch]);

  // const elem = lawyer.serv.map((item) => {
  //   return (
  //
  //     <ul key={item._id}>
  //       <li>
  //        {item.text}
  //       </li>
  //     </ul>
  //   );
  // });


  return (
    <div>
      <Services />
      {lawyer.serv.map((item) => {
        console.log(1)
          return (

            <ul key={item._id}>
              <li>
               {item.text}
              </li>
            </ul>
          )
      })}
    </div>
  );
};

export default MyServicesList;