import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function NameForm () {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const setTheName = (e) => {
    setName(e.target.value);
  }

  const setTheAge = (e) => {
    setAge(e.target.value);
  }

  const handleSubmit = () => {
    alert("Your name is " + name + " and you have " + age +" years old.");
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={setTheName} />
        <br></br>
        Age:
        <input className="inputAge" type="number" value={age} onChange={setTheAge} />
      </label>
    <br></br>
    <input className='submit' type="submit" value="Submit" />
    </form>
  );
}


function App () {
  const [inn, setIn] = useState('Welcome to Play Board');

  const [font, setFont] = useState("black");

  const buttonPress = () => {
    if( inn === "Welcome to Play Board") {
      setIn('The best place to play');
    } else {
      setIn('Welcome to Play Board');
    }
  }

  const setTheColor=(font)=>{
    setFont(font);
  }

  return (
    <div>
      <h2 style = {{color: font}}>{inn}</h2>
      <button onClick={buttonPress}>Click Me!</button>
      <button onClick={()=>setTheColor("red")} className='red'></button>
      <button onClick={()=>setTheColor("orange")} className='orange'></button>
      <button onClick={()=>setTheColor("blue")} className='blue'></button>
    </div>
  );
}
/*
export default function Apps() {
  const Colors = ["red", "green"];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {Colors.map((color, key) => (
        <Buttons Color={color} Colors={Colors} key={key} />
      ))}
    </div>
  );
}

function Buttons({ Color, Colors }) {
  const [color, setColor] = useState(Color);
  const handleChange = (e) => {
    e.preventDefault();
    setColor(Colors[Math.floor(Math.random() * Colors.length)]);
  };
  const style = {
    backgroundColor: color
  };
  return (
    <button onClick={handleChange} style={style}>
      Click Me!
    </button>
  );
}
*/
ReactDOM.render(
  <div>
    <h1>Play Board</h1>
    <div>
      <NameForm />
      <App />
    </div>
  </div>,
  document.getElementById('root')
)