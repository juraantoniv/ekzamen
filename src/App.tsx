import React, {useEffect, useState} from 'react';
import val from './app.module.css'
import Buttons from "./components/Buttons";
import {Slider} from "@mui/material";

function App() {


    const [value, setValue] = React.useState<number[]>([0,10]);
    const [count,setCount] = useState<number>(value[0])
    const [show,setShowValue] = useState<boolean>(true)

    const countClass = ` ${count === value[1] ? val.red : val.box} `

    const finalClass = `${val.box} ${countClass}`


    const setSet =()=>{
        setShowValue(!show)


    }

    useEffect(()=>{


        const valueAfterUpdate = localStorage.getItem('valueOfCounter')



        if (valueAfterUpdate){

            const valueAfterParse = JSON.parse(valueAfterUpdate)

            setCount(Number(valueAfterParse))
        }

        const valueAfterUpdates = localStorage.getItem('valueOfSettings')



        if (valueAfterUpdates){

            const valueAfterParse = JSON.parse(valueAfterUpdates)

            setValue(valueAfterParse)
        }


    },[])



    useEffect(()=>{

        if (value[0]!==0) {

            localStorage.setItem('valueOfSettings', JSON.stringify(value))

        }

    },[value])



    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        setCount(value[0])
        value[1]=count
    };
    function valuetext(value: number) {
        return `${value}`;
    }


    return (

      <div>

           <div className={val.all}>

               {show ? <div className={finalClass}>{count}</div>:<div className={val.settingsClass}>
                   <Slider
                       getAriaLabel={() => 'Range'}
                       value={value}
                       onChange={handleChange}
                       valueLabelDisplay="auto"
                       getAriaValueText={valuetext}
                   />
                   {/*<Slider defaultValue={30} step={10} marks min={10} max={110} disabled />*/}
               </div>}



              <Buttons

                  count={count}

                  setCount={setCount}

                  setSet={setSet}
                  setShowValue={ setShowValue}

                  show={show}
                  value={value}
                  setValue={setValue}
              />
          </div>

      </div>

  );
}

export default App;
