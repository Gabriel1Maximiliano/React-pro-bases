import { useEffect, useState } from "react";
import { gsap } from "gsap";
const MAXIMUN_COUNT = 10;   
export const CounterEffect = () => {

    const [counter, setCounter] = useState(5);

    const handleClick = () => {
        if(counter === MAXIMUN_COUNT){
            return;
        }
        setCounter(prev =>  prev+1);
    }

    useEffect(() => {
      if( counter < 10 ){
        return 
      }
    
      gsap.to('h2',{y:-10,duration:0.2,ease:'ease.out'}).then(() => {
        gsap.to('h2',{y:0,duration:0.2,ease:'bounce.out'})
      });
    }, [counter])
    
  return (
   <>
   <h1>CounterEffect : </h1>
   <h2>{ counter }</h2>
   <button onClick={ handleClick } >+1</button>
   </>
  )
}
