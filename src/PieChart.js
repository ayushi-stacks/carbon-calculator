import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartData = {
    labels: ['Electricity', 'Gas', 'Oil', 'Car Mileage', 'Short Flights', 'Long Flights', 'Newspaper', 'Aluminum'],
    datasets: [
      {
        label: 'Carbon Footprint Breakdown',
        data: [
          data.electricFootprint,
          data.gasFootprint,
          data.oilFootprint,
          data.carFootprint,
          data.shortFlightFootprint,
          data.longFlightFootprint,
          data.newspaperFootprint,
          data.aluminumFootprint,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0', '#9966FF', '#FF6384', '#36A2EB'],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;
