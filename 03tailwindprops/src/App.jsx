import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  const obj = {
    username: "aanchal",
    age: 20
  }

  let newArr = [1,2,3]
  return (
    <> 
   <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
  <Card username="aanchal-pahuja" someObj = {obj} someArr = {newArr} btnText = "Click Me"/>
  <Card username="Parv Pahuja" btnText = "Click Me 2"/>
    </>
  )
}

export default App


//Props make the component re usable
// Jo bhi value yaha upar cards se lege vo props m store ho jaegi 

//Here the props (properties) are passed in the card so that it may be reflected in the card component and then in our UI