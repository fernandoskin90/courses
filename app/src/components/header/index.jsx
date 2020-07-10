import React from 'react';
import './style.scss';

const image = require('../../assets/images/graduation-cap-solid.svg');

export default function Header() {
  return (
    <header className="header">
      <img className="header__img" src={image} alt="courses" />
      <p className="header__text">List Courses</p>
    </header>
  );
}
