import React from 'react';
import './App'; // Assuming you have a CSS file for styling

const Square = ({ value, func }) => {
  return (
    <button className="square" onClick={func}>
      {value}
    </button>
  );
};

export default Square;
