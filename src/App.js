import React from 'react';

import barChartData from './Assets/Data/barChart.json';
import BarChart from './component/barChart.js/BarChart';

function App() {
  return (
    <div>
      <BarChart
        objectData={barChartData}
        titlePosition="bottom"
        titleColor="#f6d69b"
        marginTop={25}
      />
    </div>
  );
}

export default App;
