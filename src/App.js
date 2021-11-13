import './App.css';
import React, {useState, useEffect} from 'react'
import Randomcolor from "randomcolor"

function App() {
  const [number, setNumber] = useState(0)
  const [word, setWord] = useState("WOW")
  const [randomcolor, setRandomcolor] = useState('')
  

  useEffect(() => {
    setRandomcolor("hotPink")
  }, [number])

  return (
    <div className="App">
      <h1
        style={{color: randomcolor}}
      >{number}</h1>
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
