import React from 'react';
import cs from './button.module.css'
import SuperButton from "./SuperButton";


type contProps = {
        count:number,
        setCount:(value:number)=>void
}


const Buttons = (props:contProps) => {

    const {count,setCount} = props


    const resetCount = () => setCount(0)

    const contValid = count === 0
    const fiveValid = count === 5


    const addCount = () => setCount(count + 1)

    return (
        <div className={cs.button}>

            <SuperButton callBack={addCount} count={count} disabled={fiveValid}/>

            <SuperButton callBack={resetCount} disabled={contValid} name={'Reset'}/>

        </div>
    );
};

export default Buttons;