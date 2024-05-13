import { useDebugValue } from "react"
import {useState} from "react"

function App() {
 const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="footer">
        <div className="tags">
          <button className="button" onClick={() => {setColor("red")}} style={{backgroundColor: "red"}}>Red</button>
          <button className="button" onClick={() => {setColor("green")}} style={{backgroundColor: "green"}}>Green</button>
          <button className="button" onClick={() => {setColor("blue")}} style={{backgroundColor: "blue"}}>Blue</button>
          <button className="button"  onClick={() => {setColor("black")}} style={{backgroundColor: "black", color: "white"}}>Black</button>
          <button className="button" onClick={() => {setColor("lavender")}} style={{backgroundColor: "lavender"}}>Lavender</button>
          <button className="button"  onClick={() => {setColor("pink")}} style={{backgroundColor: "pink"}}>Pink</button>
          <button className="button" onClick={() => {setColor("purple")}} style={{backgroundColor: "purple"}}>Purple</button>
          <button className="button" onClick={() => {setColor("orange")}} style={{backgroundColor: "orange"}}>Orange</button>
          <button className="button" onClick={() => {setColor("yellow")}} style={{backgroundColor: "yellow"}}>Yellow</button>
          <button className="button" onClick={() => {setColor("brown")}} style={{backgroundColor: "brown"}}>Brown</button>
          

        </div>
      </div>
    </div>
  )
}

export default App
