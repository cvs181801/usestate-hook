import './App.css';
import React, {useState} from 'react'

function App() {
  const [number, setNumber] = useState(0)
  const [word, setWord] = useState("WOW")

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
      <div > Learning React Hooks I'm like...<p className="word">{word}</p></div>
      
    <button
      onClick={()=>setNumber(prevNumber => prevNumber / 2)}
    >
      Divide in Half
    </button>

    <button
      onClick={()=> setNumber(prevNumber => prevNumber * 2)}
    >
      Multiply by 2
    </button>
    </div>
  );
}

export default App;
