import React from 'react';
import './Pattern.css';

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomColor = () => {
  return `rgb(${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0, 255)})`
}

export const Pattern = () => {
  return (
    <div className="pattern">
      {[...Array(100)].map((e, i) => (<div className="color-cell" style={{backgroundColor: getRandomColor()}}></div>))}
    </div>
  );
}
