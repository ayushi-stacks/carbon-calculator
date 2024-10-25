import React, { useState } from 'react';

const Calculator = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    electricBill: '',
    gasBill: '',
    oilBill: '',
    mileage: '',
    shortFlights: '',
    longFlights: '',
    recycleNewspaper: false,
    recycleAluminum: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const calculateFootprint = () => {
    const electricFootprint = formData.electricBill * 105;
    const gasFootprint = formData.gasBill * 105;
    const oilFootprint = formData.oilBill * 113;
    const carFootprint = formData.mileage * 0.79;
    const shortFlightFootprint = formData.shortFlights * 1100;
    const longFlightFootprint = formData.longFlights * 4400;
    const newspaperFootprint = formData.recycleNewspaper ? 0 : 184;
    const aluminumFootprint = formData.recycleAluminum ? 0 : 166;

    const totalFootprintCO2e = electricFootprint + gasFootprint + oilFootprint +
      carFootprint + shortFlightFootprint + longFlightFootprint +
      newspaperFootprint + aluminumFootprint;

    const totalFootprintPounds = totalFootprintCO2e * 2.20462; 

    onCalculate(totalFootprintCO2e, totalFootprintPounds);
  };

  return (
    <div>
      <h2>Carbon Footprint Calculator</h2>
      <input type="number" name="electricBill" placeholder="Monthly Electric Bill (INR)" value={formData.electricBill} onChange={handleChange} />
      <input type="number" name="gasBill" placeholder="Monthly Gas Bill (INR)" value={formData.gasBill} onChange={handleChange} />
      <input type="number" name="oilBill" placeholder="Monthly Oil Bill (INR)" value={formData.oilBill} onChange={handleChange} />
      <input type="number" name="mileage" placeholder="Yearly Car Mileage" value={formData.mileage} onChange={handleChange} />
      <input type="number" name="shortFlights" placeholder="Number of short flights" value={formData.shortFlights} onChange={handleChange} />
      <input type="number" name="longFlights" placeholder="Number of long flights" value={formData.longFlights} onChange={handleChange} />
      <label>
        <input type="checkbox" name="recycleNewspaper" checked={formData.recycleNewspaper} onChange={handleChange} />
        Do you recycle newspaper?
      </label>
      <label>
        <input type="checkbox" name="recycleAluminum" checked={formData.recycleAluminum} onChange={handleChange} />
        Do you recycle aluminum?
      </label>
      <button onClick={calculateFootprint}>Calculate</button>
    </div>
  );
};

export default Calculator;
