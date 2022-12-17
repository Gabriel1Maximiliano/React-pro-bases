
import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';



function App() {
  
  return (
   
     <>
     <h1>React</h1>
     <hr />
     <Counter initialValue={15} />
     <h2>CounterBy</h2>
     <hr />
     <CounterBy />
     </>
  );
}

export default App;
