import React from 'react';
import Category from '../components/Categories';
import Header from '../components/Header';
import css from '../components/Header/header.module.css'

const CategoryPage = () => {
  return (
    <div className={css.PageImage}>
      <Header/>
      <Category/>
    </div>
  );
};

export default CategoryPage;