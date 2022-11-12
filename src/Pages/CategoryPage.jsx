import React from 'react';
import Category from '../components/Categories';
import Header from '../components/Header';
import css from '../components/Header/header.module.css'
import Lawyer from '../components/Lawyer/Lawyer';
import Footer from '../components/Footer';

const CategoryPage = () => {
  return (
    <div className={css.PageImage}>
      <Header/>
      <Lawyer/>
      <Footer/>
    </div>
  );
};

export default CategoryPage;