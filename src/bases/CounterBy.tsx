import { useState } from "react";
interface CounterProps {
    initialValue?:number
}
export const CounterBy = ({initialValue = 10 }:CounterProps) => {

    const [counter, setCounter] = useState({
        counter:initialValue,
        clicks:0
    });

    const handleClick = (value:number) => {
        setCounter(prev=>({
            counter: prev.counter+value,
            clicks:prev.clicks +1
        }))
    }
  return (
   <>
   <h1>Counter : { counter.counter }</h1>
   <h1>Clicks : { counter.clicks }</h1>
   <button onClick={ ()=>handleClick(1) } >+1</button>
   <button onClick={ ()=>handleClick(5) } >+5</button>
   </>
  )
}
