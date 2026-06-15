import { useState } from 'react';
import calcBg from './assets/calc-bg.PNG';

import btn0 from './assets/btn0.PNG';
import btn1 from './assets/btn1.PNG';
import btn2 from './assets/btn2.PNG';
import btn3 from './assets/btn3.PNG';
import btn4 from './assets/btn4.PNG';
import btn5 from './assets/btn5.PNG';
import btn6 from './assets/btn6.PNG';
import btn7 from './assets/btn7.PNG';
import btn8 from './assets/btn8.PNG';
import btn9 from './assets/btn9.PNG';

import btno1 from './assets/btno1.PNG';
import btno2 from './assets/btno2.PNG';
import btno3 from './assets/btno3.PNG';
import btno4 from './assets/btno4.PNG';
import btno5 from './assets/btno5.PNG';
import btno6 from './assets/btno6.PNG';
import btno7 from './assets/btno7.PNG';
import btno8 from './assets/btno8.PNG';

import './App.css';

function App() {
  const [Input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const result = new Function('return ' + Input)();
      setInput(String(result));
    } catch (error) {
      setInput('Error');
    }
  }

  return (
    <>
      <div className="calc-container" style={{ backgroundImage: `url(${calcBg})` }}>
        <div className="calculator">
          <div className="calc-display">
            <input type="text" value={Input} readOnly placeholder="Enter Value" />
          </div>

          <div className="calc-buttons">
            <button onClick={handleClear} className="btn-img-wrapper">
              <img src={btno6} alt="Clear" />
            </button>
            <button onClick={handleBackspace} className="btn-img-wrapper">
              <img src={btno7} alt="Backspace" />
            </button>
            <button onClick={() => handleButtonClick('/')} className="btn-img-wrapper">
              <img src={btno4} alt="Divide" />
            </button>
            <button onClick={() => handleButtonClick('*')} className="btn-img-wrapper">
              <img src={btno3} alt="Multiply" />
            </button>

            <button onClick={() => handleButtonClick('7')} className="btn-img-wrapper">
              <img src={btn7} alt="7" />
            </button>
            <button onClick={() => handleButtonClick('8')} className="btn-img-wrapper">
              <img src={btn8} alt="8" />
            </button>
            <button onClick={() => handleButtonClick('9')} className="btn-img-wrapper">
              <img src={btn9} alt="9" />
            </button>
            <button onClick={() => handleButtonClick('-')} className="btn-img-wrapper">
              <img src={btno2} alt="Subtract" />
            </button>

            <button onClick={() => handleButtonClick('4')} className="btn-img-wrapper">
              <img src={btn4} alt="4" />
            </button>
            <button onClick={() => handleButtonClick('5')} className="btn-img-wrapper">
              <img src={btn5} alt="5" />
            </button>
            <button onClick={() => handleButtonClick('6')} className="btn-img-wrapper">
              <img src={btn6} alt="6" />
            </button>
            <button onClick={() => handleButtonClick('+')} className="btn-img-wrapper">
              <img src={btno1} alt="Add" />
            </button>

            <button onClick={() => handleButtonClick('1')} className="btn-img-wrapper">
              <img src={btn1} alt="1" />
            </button>
            <button onClick={() => handleButtonClick('2')} className="btn-img-wrapper">
              <img src={btn2} alt="2" />
            </button>
            <button onClick={() => handleButtonClick('3')} className="btn-img-wrapper">
              <img src={btn3} alt="3" />
            </button>
            <button onClick={handleCalculate} className="btn-img-wrapper">
              <img src={btno5} alt="Equal" />
            </button>

            <button onClick={() => handleButtonClick('0')} className="btn-img-wrapper">
              <img src={btn0} alt="0" />
            </button>
            <button onClick={() => handleButtonClick('.')} className="btn-img-wrapper">
              <img src={btno8} alt="Decimal" />
            </button>

            <div className="empty-space"></div>
            <div className="empty-space"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
