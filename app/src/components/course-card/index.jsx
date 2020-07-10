import React from 'react';
import Rating from '@material-ui/lab/Rating';
import './style.scss';

const image =
  'https://images.pexels.com/photos/2228586/pexels-photo-2228586.jpeg?cs=srgb&dl=libro-manos-pie-sujetando-2228586.jpg&fm=jpg';

export default function Course({ course }) {
  const { maximumCredits, name, price, provider, rating } = course;
  const priceToShow = price === 0 ? 'Free' : `$${price}`;
  const creditsToShow = maximumCredits === 1 ? ' Credit' : ' Credits';
  return (
    <div className="course">
      <div className="course__header">
        <img className="course__img" src={image} alt="card" />
        <span className="course__credits">
          {maximumCredits}
          {creditsToShow}
        </span>
      </div>
      <div className="course__info">
        <span className="course__title">{name}</span>
        <div className="course__author">{provider.name}</div>
        <div className="course__price">{priceToShow}</div>
        <div className="course__rating">
          <Rating name="read-only" value={rating} readOnly />
        </div>
      </div>
    </div>
  );
}
