import { useState } from "react";

export default function Counter(){
    const [counter, setCounter] = useState(0)

    return(
        <div>
            <h1>React counter</h1>
            <p>Press the button to increment or decrement the counter </p>
            <p>{counter}</p>
            <button onClick={() =>{
            setCounter(counter-1)
            }}>-1</button>
            <button onClick={() =>{
            setCounter(0)
            }}>Reset</button>
            <button onClick={() =>{
            setCounter(counter+1)
            }}>+1</button>
        </div>
    )
}