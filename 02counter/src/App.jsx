import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;


  //jese hi setCounter m value jati hai react andar se react krta hai trigger krta hai automatically humara pura DOM analyze hota hai and then jaha par vo value hai vaha par UI update ho jata hai as we are doing the syncing of state & UI. Here state refers to variables 
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    counter = counter + 1;
    if(counter > 20){
      counter = 20;
    }
    setCounter(counter)
    console.log("Value added", counter)
  }

  const removeValue = () => {
    counter = counter - 1;
    if(counter < 0){
      counter = 0;
    }
    setCounter(counter)
    console.log("Value removed", counter)
  }
  return (
    <>
    <h1>React Learnings</h1>
    <h2>Counter Value: {counter}</h2>


    <button onClick={addValue}>Add value {counter}</button>
    
    <br/>
    <button onClick={removeValue}>Remove value {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
