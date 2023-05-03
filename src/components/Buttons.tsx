import React, {useCallback, useEffect, useState} from 'react';
import cs from './button.module.css'
import SuperButton from "./SuperButton";
import {Badge, ButtonGroup} from "@mui/material";
import val from '../app.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRoot} from "../redax/redusers/store";
import {bolAC, countAC, countArrayAC, errorAC, initialStateType} from "../redax/redusers/count-reducer";
import {loadState, saveState} from "../functions/func";


type contProps = {
    setSet: () => void
    changeColor:()=>void
}


const Buttons: React.FC<contProps> = ({
                                          setSet,
                                          changeColor
                                      }) => {


    const {count,value,error,show} = useSelector<AppRoot,initialStateType>(
        ({count}) =>count
    );

    const dispach = useDispatch()



    const resetCount = useCallback(() => {

        saveState(0)
        const valueAfterUpdate = loadState()

        if (valueAfterUpdate) {
            const newVal = valueAfterUpdate
            dispach(countAC(+newVal[0]+1))
            dispach(errorAC(''))
            changeColor()

        }

    },[])


    const fiveValid = count === value[1]



    useEffect(() => {

        if (count !== 0) {

            saveState(count)

        }

    }, [count])


   

    const addCount = () => {
        let st = count+1
        dispach(countAC(st))
        dispach(bolAC(true))
        dispach(countArrayAC([count,value[1]]))
        dispach(errorAC(''))
    }

    return (
        <div className={cs.button}>


            <Badge badgeContent={count} color="primary">

                <SuperButton callBack={addCount} count={count} disabled={fiveValid} name={'+'}/>
            </Badge>


            <SuperButton callBack={resetCount} name={'Reset'}/>

            <SuperButton callBack={setSet} name={'Settings'}/>


        </div>
    );
};

export default Buttons;