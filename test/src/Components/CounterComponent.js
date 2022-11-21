import React, { useState } from "react";
import "./Counter.css"

function CounterComponent() {
  // Counter Component
    const[count,setCount]=useState(0);
    const counterHandler =()=>{
        let tempcount=0;
        tempcount=count+5
        setCount(tempcount);
    }
  return (
    <div>
      <center>
        <h2> Counter</h2>
        <button onClick={counterHandler}>Count</button>
        <h3>Result: {count}</h3>
      </center>
    </div>
  );
}

export default CounterComponent;
