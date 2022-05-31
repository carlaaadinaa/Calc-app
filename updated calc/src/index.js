import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Calculator() {
  
  const [prev, setPrev] = useState(0);
  const [input, setInput] = useState(0);
  const [op, setOp] = useState("");
 
  const clickOnNumbers= (e) => {
    
    if(op == 0) {
      setPrev(parseInt(prev + e.target.value));
      setInput(parseInt(input + e.target.value)); 
    } else {   
      setInput(parseInt(input + e.target.value));
    }    
    
  }

  const clickOnOperators = (e) => {
    let result1=null;

    setOp(e.target.value);
    setInput("");

    if(op === "+"){
      result1 = prev + input;
      setPrev(result1);
    } else if(op === "-"){
      result1 = prev - input;
      setPrev(result1);
    } else if(op === "*"){
      result1 = prev * input;
      setPrev(result1);
    } else if(op === "/"){
      result1 = prev / input;
      setPrev(result1);
    } 
  }

  const deleteAll = () => {
    setInput(0);
    setPrev(0);
    setOp("");
  }

  const deleteOneByOne = () => {
    setPrev(String(prev).slice(0, -1));
    setInput(String(input).slice(0, - 1));
    setOp(op.slice(0, -1));
  }

 const calculate = () => {
  let result = null;
  
  if(op === "+"){
    result = prev + input;
    setPrev(result);
    setInput(result);
    setOp("");
  } else if(op === "-"){
    result = prev - input;
    setPrev(result);
    setInput(result);
    setOp("");
  } else if(op === "*"){
    result = prev * input;
    setPrev(result);
    setInput(result);
    setOp("");
  } else if(op === "/"){
    result = prev / input;
    setPrev(result);
    setInput(result);
    setOp("");
  } else {
    setPrev(null);
    setInput("Error!")
    setOp("");
  }
  
}

  return(
      <div className="mycalculator">
          
        <div className="output">
          
          <div className='previousOp'>{prev} {op}</div>  
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
