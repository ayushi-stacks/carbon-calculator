import React, { useState } from 'react';
import Calculator from './Calculator';
import ResultBox from './ResultBox';
import PieChart from './PieChart';
import './App.css'; 

const App = () => {
  const [footprintData, setFootprintData] = useState({
    co2e: 0,
    pounds: 0,
    breakdown: {},
  });

  const handleCalculation = (co2e, pounds) => {
    setFootprintData({
      co2e,
      pounds,
      breakdown: {
        electricFootprint: co2e * 105,
        gasFootprint: co2e * 105,
        oilFootprint: co2e * 113,
        carFootprint: co2e * 0.79,
        shortFlightFootprint: co2e * 1100,
        longFlightFootprint: co2e * 4400,
        newspaperFootprint: co2e * 184,
        aluminumFootprint: co2e * 166,
      },
    });
  };

  return (
    <div className="app">
      <div className="calculator-section">
        <Calculator onCalculate={handleCalculation} />
      </div>
      <div className="chart-section">
        <PieChart data={footprintData.breakdown} />
      </div>
      <div className="result-section">
        <ResultBox co2e={footprintData.co2e} pounds={footprintData.pounds} />
      </div>
    </div>
  );
};

export default App;

