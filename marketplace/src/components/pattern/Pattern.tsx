import React from 'react';
import './Pattern.css';

type PatternProps = {
  colors: string[];
}

export const Pattern: React.FC<PatternProps> = (props) => {
  return (
    <div className="pattern">
      {props.colors.map((color, i) => (<div className="color-cell" style={{backgroundColor: color}} key={i}></div>))}
    </div>
  );
}
