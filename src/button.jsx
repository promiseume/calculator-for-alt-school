import React,{useState} from 'react'
import * as math from "mathjs";

export default function Button() {
    const [display, setDisplay] = useState('')
  
  const handleButton = (e) => {
    e.preventDefault();
    setDisplay(display + e.currentTarget.textContent)
  };

  const handleCalculation = () => {
    setDisplay(math.evaluate(display));
  }

  const handleDelete = () => {
    setDisplay('')
  };
    return (
        <div class="container">
          <div className='screen'>
            <h1>{display}</h1>
          </div>
          <div className="keypads">
            <button onClick={handleButton}>1</button>
            <button onClick={handleButton}>2</button>
            <button onClick={handleButton}>3</button>
            <button onClick={handleButton}>4</button>
            <button onClick={handleButton}>5</button>
            <button onClick={handleButton}>6</button>
            <button onClick={handleButton}>7</button>
            <button onClick={handleButton}>8</button>
            <button onClick={handleButton}>9</button>
            <button onClick={handleButton}>+</button>
            <button onClick={handleButton}>-</button>
            <button onClick={handleButton}>*</button>
            <button onClick={handleButton}>/</button>
            <button onClick={handleButton}>.</button>
            <button onClick={handleCalculation}>=</button>
            <button onClick={handleDelete}>clear</button>
    
          </div>
        </div>
      );
}


