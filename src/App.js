// import React,{useState} from 'react'

// const App=()=>{
//   let [n,updaten] = useState(0);
//   const change=()=>{
//     updaten(n++)
//   }
//   const change1=()=>{
//     updaten(n--)
//   }
//   return (
//     <>
//     <button onClick={change}>+</button>
//     <input type='number' value={n}/>
//     <button onClick={change1}>-</button>
//     </>
//   )
// }
// export default App;

import React,{useState} from "react";

const App=()=>{
  let [n,updaten] = useState(0);
  const change=(e)=>{
    if (e.target.name=='+')
    {
      updaten(n++);
    }
    else{
      updaten(n--);
    }
  }
  return (
    <>
    <h2>value is:{n}</h2>
    <button onClick={change} name='+'>Incre</button>
    <button onClick={change} name="-">Decre</button>
    </>
  )
}
export default App;