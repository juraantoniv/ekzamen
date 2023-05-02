import React, {useEffect, useState} from 'react';
import val from './app.module.css'
import Buttons from "./components/Buttons";
import {Alert, Slider} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppRoot} from "./redax/redusers/store";
import {bolAC, countAC, countArrayAC, errorAC, initialStateType} from "./redax/redusers/count-reducer";

function App() {


    const {count,value,error,show} = useSelector<AppRoot,initialStateType>(
        (state) =>state.count
    );

    const dispach = useDispatch()



    let countClass = ` ${count=== value[1] ? val.red : val.box} `

    let finalClass = `${val.box} ${countClass}`






    const setSet =()=>{

        dispach(bolAC(!show))


    }
    const changeColor = () => {
        countClass=`${val.box}`
        finalClass = `${countClass}`

    }

    useEffect(()=>{


        const valueAfterUpdate = localStorage.getItem('valueOfCounter')



        if (valueAfterUpdate){

            const valueAfterParse = JSON.parse(valueAfterUpdate)
            dispach(countAC(Number(valueAfterParse)))
        }

        const valueAfterUpdates = localStorage.getItem('valueOfSettings')



        if (valueAfterUpdates){

            const valueAfterParse = JSON.parse(valueAfterUpdates)

            dispach(countArrayAC(valueAfterParse))

        }


    },[finalClass])



    useEffect(()=>{

        if (value[0]!==0) {

            localStorage.setItem('valueOfSettings', JSON.stringify(value))

        }

    },[value,finalClass])



    const handleChange = (event: Event, newValue: number | number[]) => {
        dispach(countArrayAC(newValue as number[]))
        dispach(countAC(value[0]-1))

        value[1]=count

        if (value[0]-1<count){

            dispach(errorAC(`Value ${value[0]-1} is out of than rage of settings`))
        }

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

               </div>}

               { error && <Alert variant="filled" severity="error" className={val.error}>
                   {error}

               </Alert>}


              <Buttons

                  setSet={setSet}
                  changeColor={changeColor}
              />
          </div>

      </div>

  );
}

export default App;
