import React,{useState} from 'react'

const App=()=>{
  let [n,updaten] = useState(0);
  const change=()=>{
    updaten(n++)
  }
  const change1=()=>{
    updaten(n--)
  }
  return (
    <>
    <button onClick={change}>+</button>
    <input type='number' value={n}/>
    <button onClick={change1}>-</button>
    </>
  )
}
export default App;