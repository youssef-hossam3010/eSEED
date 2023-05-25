import './App.css';
import { useState, useEffect } from 'react';
import LineChart from './components/LineChart';
import ToggleButton from './components/ToggleButton';
import BarChart from './components/BarChart';

function App() {
  const [showLineChart, setShowLineChart] = useState(true);
  const [showBarChart, setShowBarChart] = useState(true);

  useEffect(() => {
    const storedShowLineChart = localStorage.getItem('showLineChart');
    const storedShowBarChart = localStorage.getItem('showBarChart');

    setShowLineChart(storedShowLineChart === 'true');
    setShowBarChart(storedShowBarChart === 'true');
  }, []);

  const handleToggleLineChart = () => {
    const newValue = !showLineChart;
    setShowLineChart(newValue);
    localStorage.setItem('showLineChart', newValue.toString());
  };

  const handleToggleBarChart = () => {
    const newValue = !showBarChart;
    setShowBarChart(newValue);
    localStorage.setItem('showBarChart', newValue.toString());
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <ToggleButton onClickLineChart={handleToggleLineChart} onClickBarChart={handleToggleBarChart} />
      {showLineChart && <LineChart />}
      {showBarChart && <BarChart />}
    </div>
  );
}

export default App;
