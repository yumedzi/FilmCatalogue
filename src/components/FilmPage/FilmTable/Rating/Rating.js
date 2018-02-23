import React from 'react';
import './Rating.css';

const MaxRating = 5;

const Rating = ({rating}) => {
  let filled_stars = [];
  let empty_stars = [];

  for (let i = 1; i <= MaxRating; i++) {
    (i <= rating) ? filled_stars.push(i) : empty_stars.push(i)
  }

  return <div className="rating">
    <div className="stars">
      {filled_stars.map((x,i) => <span key={`f${i}`} className="glyphicon glyphicon-star"></span>)}
      {empty_stars.map((x,i) => <span key={`e${i}`}  className="glyphicon glyphicon-star-empty"></span>)}
    </div>
    <p> Rating: {rating}</p>
  </div>
};

export default Rating