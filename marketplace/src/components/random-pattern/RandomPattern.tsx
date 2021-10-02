import React, { useEffect, useState } from 'react';
import { Pattern } from '../pattern/Pattern';

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomColor = () => {
  return `rgb(${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0, 255)})`
}

export const RandomPattern = () => {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const randomColors = [];
    let i = 0;
    while(i++ < 25) {
      randomColors.push(getRandomColor());
    }
    setColors(randomColors);
  }, []);

  return (
    <div className="random-pattern">
      <Pattern colors={colors} />
    </div>
  );
}
