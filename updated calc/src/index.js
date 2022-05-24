import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Calculator() {
  
  const [prev, setPrev] = useState(0);
  const [input, setInput] = useState(0);
  const [op, setOp] = useState([]);
 
  const clickOnNumbers= (e) => {
    setInput(parseInt(e.target.value));
    setPrev(parseInt(input));
  }

  const clickOnOperators = (e) => {
    setOp(e.target.value);
  }

  const deleteAll = () => {
    setInput(0);
    setPrev(0);
    setOp([]);
  }

  const deleteOneByOne = () => {
    setInput(String(input).slice(0, - 1));
    setPrev(String(prev).slice(0, -1));
    setOp(op.slice(0, -1));
  }

 const calculate = () => {
  let result = null;
  
  if(op === "+"){
    result = prev + input;
    setPrev(null);
    setInput(result);
  } else if(op === "-"){
    result = prev - input;
    setPrev(null);
    setInput(result);
  } else if(op === "*"){
    result = prev * input;
    setPrev(null);
    setInput(result);
  } else if(op === "/"){
    result = prev / input;
    setPrev(null);
    setInput(result);
  } else {
    setPrev(null);
    setInput("Error!")
  }
  
}

  return(
      <div className="mycalculator">
          
        <div className="output">
          
          <div className='previousOp'>{prev}</div>  
          <div className="currentOp">{input}</div>
                    
        </div>  
        
          <button className="double" onClick={deleteAll}>AC</button>
          <button className="clear" onClick={deleteOneByOne}>C</button>
          
          <button value="/" className="operatorsStyle" onClick={clickOnOperators}>/</button>
          
          <button value="7" className="classicb" onClick={clickOnNumbers}>7</button>
          <button value="8" className="classicb" onClick={clickOnNumbers}>8</button>
          <button value="9" className="classicb" onClick={clickOnNumbers}>9</button>
          
          <button value="*" className="operatorsStyle" onClick={clickOnOperators}>*</button>
          
          <button value="4" className="classicb" onClick={clickOnNumbers}>4</button>
          <button value="5" className="classicb" onClick={clickOnNumbers}>5</button>
          <button value="6" className="classicb" onClick={clickOnNumbers}>6</button>
          
          <button value="+" className="operatorsStyle" onClick={clickOnOperators}>+</button>
          
          <button value="1" className="classicb" onClick={clickOnNumbers}>1</button>
          <button value="2" className="classicb" onClick={clickOnNumbers}>2</button>
          <button value="3" className="classicb" onClick={clickOnNumbers}>3</button>
          
          <button value="-" className="operatorsStyle" onClick={clickOnOperators}>-</button>

          <button value="0" className="classicb" onClick={clickOnNumbers}>0</button>

          <button className="triple" onClick={calculate}>=</button>
        
      </div>
  )
}

ReactDOM.render(
  <div>
    <h1>Play Board</h1>
    <Calculator />
  </div>,
  document.getElementById('root')
)
