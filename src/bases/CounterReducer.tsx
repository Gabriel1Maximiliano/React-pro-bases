import React, { useReducer } from 'react';

interface CounterState {
    counter :number,
    previous:number,
    changes :number
}
const INITIAL_STATE:CounterState ={
    counter:10,
    previous:15,
    changes:20
}
type CounterAction = 
|{ type:'increaseBy', payload:{value:number}}
|{ type:'reset'}

const counterComponentReducer = (state :CounterState,  action:CounterAction):CounterState => {
    switch (action.type) {
        case'increaseBy':
            return{
                ...state,
                counter: state.counter+1
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

    const handleClick = () => {
        dispatch({type:'reset'});
    }
  return (
   <>
   <h1>Counter Reducer: { state.counter }</h1>
   <button onClick={ handleClick } >Reset</button>
   </>
  )
}
