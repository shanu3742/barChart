import React, { useRef, useState } from 'react';

import barChartData from './Assets/Data/barChart.json';
import BarChart from './component/barChart.js/BarChart';

function App() {
  return (
    <div>
      <BarChart objectData={barChartData} />
    </div>
  );
}

export default App;
