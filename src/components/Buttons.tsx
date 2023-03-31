import React, {useEffect, useState} from 'react';
import cs from './button.module.css'
import SuperButton from "./SuperButton";


type contProps = {
        count:number,
        setCount:(value:number)=>void
        setSet:()=>void
        show:boolean
       setShowValue:(st:boolean)=>void
}


const Buttons:React.FC<contProps> = ({
    count,
    setCount,
    show,
    setSet,
    setShowValue
                                     }) => {





    const resetCount = () => {

        setCount(0)
        localStorage.setItem('valueOfCounter',JSON.stringify(0))
    }

    const contValid = count === 0

    const fiveValid = count === 5

useEffect(()=>{

        if (count!==0){

            localStorage.setItem('valueOfCounter',JSON.stringify(count))

        }

},[count])




    const addCount = () => {

        setCount(count + 1)
        setShowValue(true)

    }

    return (
        <div className={cs.button}>

            <SuperButton callBack={addCount} count={count} disabled={fiveValid}/>

            <SuperButton callBack={resetCount} disabled={contValid} name={'Reset'}/>

            <SuperButton callBack={setSet}  name={'SetSettings'}/>

        </div>
    );
};

export default Buttons;