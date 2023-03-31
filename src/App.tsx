import React, {useEffect, useState} from 'react';
import val from './app.module.css'
import Buttons from "./components/Buttons";

function App() {

  const [count,setCount] = useState<number>(0)
    const [settings,setSettings] = useState<number>(0)
    const [show,setShowValue] = useState<boolean>(true)

    const countClass = ` ${count === 5 ? val.red : val.box} `

    const finalClass = `${val.box} ${countClass}`


    const setSet =()=>{
        setShowValue(!show)


    }

    useEffect(()=>{

        console.log('yes')

        const valueAfterUpdate = localStorage.getItem('valueOfCounter')



        if (valueAfterUpdate){

            const valueAfterParse = JSON.parse(valueAfterUpdate)

            setCount(Number(valueAfterParse))
        }


    },[])


  return (

      <div>

           <div className={val.all}>

               {show ? <div className={finalClass}>{count}</div>:<div className={val.settingsClass}>
                   <input/>
                   <input/>
               </div>}

              <Buttons

                  count={count}

                  setCount={setCount}

                  setSet={setSet}
                  setShowValue={ setShowValue}

                  show={show}
              />
          </div>

      </div>

  );
}

export default App;
