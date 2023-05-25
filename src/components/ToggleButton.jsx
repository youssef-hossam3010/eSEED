import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function ToggleBtn({ onClickLineChart, onClickBarChart }) {
  const storedValue = localStorage.getItem('buttonValue');
  const [buttonValue, setButtonValue] = useState(storedValue === 'true');

  const handleClick = () => {
    setButtonValue(!buttonValue);
  };

  useEffect(() => {
    localStorage.setItem('buttonValue', buttonValue);
  }, [buttonValue]);

  return (
    <div className="App" >
      <Button style={{ marginTop: '1rem' }} variant="contained" size="large" onClick={handleClick}>{buttonValue ? 'Edit Mode' : 'View Mode'}</Button>
      <br></br>
      <br></br>
      {buttonValue && (
        <div>
          <Button  style={{ margin: '0 0.5rem' }} variant="contained" size="small" onClick={onClickLineChart}>Line Chart</Button>
          <Button style={{ margin: '0 0.5rem' }} variant="contained" size="small" onClick={onClickBarChart}>Bar Chart</Button>
        </div>
      )}
    </div>
  );
}

export default ToggleBtn;
