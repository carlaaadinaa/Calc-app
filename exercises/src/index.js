import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function NameForm () {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [list, setList] = useState([]);


  const setTheName = (e) => {
    setName(e.target.value);
  }

  const setTheAge = (e) => {
    setAge(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const addItems = {name, age};

    if(name && age){
      setList([...list,addItems]);
      setName("");
      setAge("");
    }

    alert("Your name is " + name + " and you have " + age +" years old."); 
  }   

  return(
    <div>
      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={setTheName} />
        <br></br>
        Age:
        <input className="inputAge" type="number" value={age} onChange={setTheAge} />
      </label>
    <br></br>
    <button className='submit' type="submit">Submit</button>
    </form>
    <p>The list of submitted data:</p>
    <ul>
    {
      list.map((a)=><div>
        <li>{a.name}, {a.age}</li>
        </div>)
    }
    </ul>
  </div>
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
