import React from 'react';

const ResultBox = ({ co2e, pounds }) => {
  const getFootprintCategory = () => {
    if (pounds <= 15999) return "Ideal";
    if (pounds <= 22000) return "Average";
    return "Consider Sustainable Practices";
  };

  return (
    <div>
      <h2>Your Carbon Footprint</h2>
      <p>CO2e: {co2e.toFixed(2)} kg</p>
      <p>Pounds: {pounds.toFixed(2)} lbs</p>
      <h3>Category: {getFootprintCategory()}</h3>
      <p>{getFootprintCategory() === "Consider Sustainable Practices"
        ? "You might want to include more sustainable practices!"
        : "You're doing great! Keep up the eco-friendly lifestyle!"}
      </p>
    </div>
  );
};

export default ResultBox;
