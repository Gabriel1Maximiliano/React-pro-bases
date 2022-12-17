import React, { useReducer } from 'react';
import { doIncreaseBy } from './actions/actions';
import { CounterState } from './interfaces/interfaces';
import { counterComponentReducer } from './state/counterReducer';


const INITIAL_STATE:CounterState ={
    counter:0,
    previous:0,
    changes:0
}


export const CounterReducer = () => {

    const [state, dispatch] = useReducer(counterComponentReducer, INITIAL_STATE)

    const handleReset = () => {
        dispatch({type:'reset'});
    }
    const increaseBy = (value:number) => {
        dispatch(doIncreaseBy(value));

    }
  return (
   <>
   <h1>Counter Reducer: { state.counter }</h1>
   <pre>
    {
        JSON.stringify( state,null,3)
    }
   </pre>
   <button onClick={ handleReset } >Reset</button>
   <button onClick={ ()=>increaseBy(1) } >+1</button>
   <button onClick={ ()=>increaseBy(5) } >+5</button>
   <button onClick={ ()=>increaseBy(10) } >+10</button>
   </>
  )
}
