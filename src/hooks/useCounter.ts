import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";


export const useCounter = ({maxCount=0}) => {
    const [counter, setCounter] = useState(5);

    const handleClick = () => {
        if(counter === maxCount){
            return;
        }
        setCounter(prev =>  prev+1);
    }

    const elementToAnimate = useRef<any>(null)
    const tl = useRef(gsap.timeline());
    useLayoutEffect(() => {
        if( !elementToAnimate ) return
        tl.current.to(elementToAnimate.current,{y:-10,duration:0.2,ease:'ease.out'});
        tl.current.to(elementToAnimate.current,{y:0,duration:1,ease:'bounce.out'});
        
    }, [])
 useEffect(() => {
 
    tl.current.play(0);  
     
}, [counter])
    
  return {
    //props
    counter,
 elementToAnimate,
    //methods
    handleClick,
  }
}
