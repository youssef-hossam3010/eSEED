import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="App mb-3" >
      <Button  variant="primary" size="lg" onClick={handleClick}>{buttonValue ? 'Edit Mode' : 'View Mode'}</Button>
      <br></br>
      {buttonValue && (
        <>
          <button onClick={onClickLineChart}>Hide 1</button>
          <button onClick={onClickBarChart}>Hide 2</button>
        </>
      )}
    </div>
  );
}

export default ToggleBtn;
