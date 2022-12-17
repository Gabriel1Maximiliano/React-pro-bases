import React, { useReducer } from 'react';

interface CounterState {
    counter :number,
    previous:number,
    changes :number
}
const INITIAL_STATE:CounterState ={
    counter:0,
    previous:0,
    changes:0
}
type CounterAction = 
|{ type:'increaseBy', payload:{value:number}}
|{ type:'reset'}

const counterComponentReducer = (state :CounterState,  action:CounterAction):CounterState => {
    switch (action.type) {
        case'increaseBy':
            return{
                counter :state.counter+action.payload.value,
                previous:state.counter,
                changes :state.changes+1
            }
            case'reset':
            return{
                counter:0,
                previous:0,
                changes:0
            }
            break;
    
        default:
            return state;
    }
}
export const CounterReducer = () => {

    const [state, dispatch] = useReducer(counterComponentReducer, INITIAL_STATE)

    const handleReset = () => {
        dispatch({type:'reset'});
    }
    const increaseBy = (value:number) => {
        dispatch({ type:'increaseBy', payload:{value}});

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
