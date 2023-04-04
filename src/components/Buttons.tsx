import React, {useEffect, useState} from 'react';
import cs from './button.module.css'
import SuperButton from "./SuperButton";
import {Badge, ButtonGroup} from "@mui/material";


type contProps = {
    count: number,
    setCount: (value: number) => void
    setSet: () => void
    show: boolean
    setShowValue: (st: boolean) => void
    value: number[]
    setValue: (st: number[]) => void
    setError:(st:string)=>void
}


const Buttons: React.FC<contProps> = ({
                                          count,
                                          setCount,
                                          show,
                                          setSet,
                                          setShowValue,
                                          value,
                                          setValue,
                                          setError
                                      }) => {


    const resetCount = () => {

        localStorage.setItem('valueOfCounter', JSON.stringify(0))
        const valueAfterUpdate = localStorage.getItem('valueOfSettings')

        if (valueAfterUpdate) {
            const newVal = JSON.parse(valueAfterUpdate)
            setCount(+newVal[0])
            setError('')

        }

    }


    const fiveValid = count === value[1]



    useEffect(() => {

        if (count !== 0) {

            localStorage.setItem('valueOfCounter', JSON.stringify(count))


        }

    }, [count])


   

    const addCount = () => {

        setCount(count + 1)
        setShowValue(true)
        setValue([count+1,value[1]])
        setError('')
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