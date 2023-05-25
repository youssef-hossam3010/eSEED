import './App.css';
import { useState } from 'react';
import LineChartt from './components/LineChart';
import ToggleBtn from './components/ToggleButton.jsx';
import BarChart from './components/BarChart.jsx';

function App() {
  const [showLineChart, setShowLineChart] = useState(true);
  const [showBarChart, setShowBarChart] = useState(true);
  

  const handleToggleLineChart = () => {
    setShowLineChart(!showLineChart);
  };
  const handleToggleBarChart = () => {
    setShowBarChart(!showBarChart);
  };

  return (
    
    <div>



      <h1>Dashboard</h1>
      <ToggleBtn
        onClickLineChart={handleToggleLineChart}
        onClickBarChart={handleToggleBarChart}
      />
      {showLineChart && <LineChartt />}
      {showBarChart && <BarChart />}
    </div>
    
  );
}

export default App;