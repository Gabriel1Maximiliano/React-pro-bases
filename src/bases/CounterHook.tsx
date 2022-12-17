
import { useCounter } from "../hooks/useCounter";
  
export const CounterHook = () => {

   const { handleClick,counter,counterElement }=useCounter();
  
  return (
   <>
   <h1>CounterHook : </h1>
   <h2 ref={ counterElement } >{ counter }</h2>
   <button onClick={ handleClick } >+1</button>
   </>
  )
}
