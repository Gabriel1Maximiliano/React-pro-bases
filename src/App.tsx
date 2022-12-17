
import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';
import { CounterReducer } from './bases/CounterReducer';



function App() {
  
  return (
   
     <>
     <h1>React</h1>
     <hr />
     <Counter initialValue={15} />
     <h2>CounterBy</h2>
     <hr />
     <CounterBy />
     <h2>CounterEffect</h2>
     <hr />
     <CounterEffect />
     <CounterHook />
     <hr />
     <CounterReducer />
     </>
  );
}

export default App;
