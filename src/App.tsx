import React, {useState} from 'react';
import val from './app.module.css'
import Buttons from "./components/Buttons";

function App() {

  const [count,setCount] = useState<number>(0)

    const countClass = `${count===5?val.red:''}`

    const finalClass = `${val.box} ${countClass}`


  return (
    <div className={val.all}>
          <div className={finalClass}>{count}</div>
          <Buttons
              count={count}
              setCount={setCount}
          />
    </div>
  );
}

export default App;
