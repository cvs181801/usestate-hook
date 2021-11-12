import './App.css';
import React, {useState} from 'react'

function App() {
  const [number, setNumber] = useState(0)
  return (
    <div className="App">
      <h1>{number}</h1>
      <button
        onClick={()=>setNumber(prevNumber => prevNumber+1)} //using the ++ operator didn't work here FYI
      >
        Count Up!
      </button>
      <button
        onClick={()=>setNumber(prevNumber => prevNumber-1)}
      >
        Count Down!
      </button>
    </div>
  );
}

export default App;
