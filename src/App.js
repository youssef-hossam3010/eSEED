import './App.css';
import { useState, useEffect } from 'react';
import LineChart from './components/LineChart';
import ToggleButton from './components/ToggleButton';
import BarChart from './components/BarChart';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  const [showLineChart, setShowLineChart] = useState(true);
  const [showBarChart, setShowBarChart] = useState(true);
  useEffect(() => {
    const storedShowLineChart = localStorage.getItem('showLineChart');
    const storedShowBarChart = localStorage.getItem('showBarChart');
  
    if (storedShowLineChart === null) {
      localStorage.setItem('showLineChart', showLineChart.toString());
    } else {
      setShowLineChart(storedShowLineChart === 'true');
    }
  
    if (storedShowBarChart === null) {
      localStorage.setItem('showBarChart', showBarChart.toString());
    } else {
      setShowBarChart(storedShowBarChart === 'true');
    }
  }, []);

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
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <ToggleButton onClickLineChart={handleToggleLineChart} onClickBarChart={handleToggleBarChart} />
      {showLineChart && <LineChart />}
      {showBarChart && <BarChart />}
    </>
  );
}

export default App;
