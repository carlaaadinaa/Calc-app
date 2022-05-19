import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Calculator() {
  
  const [input, setInput] = useState([]);
  const [result, setResult] = useState([]);
  const [prev, setPrev] = useState([]);
 
  const clickOnNumbers= (e) => {
    setInput(input + e.target.value);

    if(setPrev(prev + e.target.value) === null) {
      setPrev(prev + input);
    }
  }

  const clickOnOperators = (e) => {
    setPrev(prev + e.target.value);
    setInput([]);
  }

  const deleteAll = () => {
    setInput([]);
    setPrev([]);
  }

  const deleteOneByOne = () => {
    setInput(input.slice(0, - 1));
    setPrev(prev.slice(0, -1));
  }

 const calculate = () => {
  
  let currentOperator = null;
  
  debugger;
  prev.forEach( item => {
    if(!isNaN(parseInt(item))){
      if(setResult(result) === 0){
        setResult(parseInt(item));
      } else {
        switch (currentOperator) {
          case "+":
            setResult(result + parseInt(item));
            break;
          case "-":
            setResult(result - parseInt(item));
            break;
          case "*":
            setResult(result * parseInt(item));
            break;
          case "/":
            setResult(result / parseInt(item));
            break;
        }
      }
    } else {
      currentOperator = item;
    }
  });
  return setResult(result);
 }


  /*
  try {
    if(setPrev(+prev[1]) === "+"){
      setResult(result + +setPrev.first(prev) + +input);
    }
    //setResult(eval(prev));
  } catch(err) {
    setResult("Error!");
  } finally {
    setPrev([]);
    setInput([]);
  }
  }
  */
  
  return(
      <div className="mycalculator">
          
        <div className="output">
          <div className='previousOp'>{prev}</div>  
          <div className="currentOp">{input}</div>
          <div className='currentOp'>{result}</div>
          
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
