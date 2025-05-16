import React, {use, useState} from 'react';
import TableContent from './TableContent';
import { AppContext } from './context';
import './App.css';

function App() {
const [user, setUser] = useState([]);
const [name, setName] = useState("");
const [age, setAge] = useState(0);

const handleSubmit =() => {
  const userArray = [];
  userArray.push({
    name: name,
    age: age
  });
  setUser([...user, ...userArray]);
}

  return (
    <div className="App">
      <h1>Table using context api</h1>
      <div className="wrapper">
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <input value={age} onChange={(e) => setAge(e.target.value)}/>
        <button onClick={() => handleSubmit()}>submit</button>
        <AppContext.Provider value={{user}}> <TableContent /></AppContext.Provider>
    </div>
    </div>
  );
}

export default App;
