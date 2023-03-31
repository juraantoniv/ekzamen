import { Button } from '@mui/material';
import React from 'react';
import s from './button.module.css'


type buttonProps ={
    callBack:()=>void
    count?:number
    name?:string
    disabled?:boolean
}

const SuperButton:React.FC<buttonProps> = ({
    callBack,
    count,
    disabled,
    ...restProps

}) => {




    return (
        <div>
            <button onClick={callBack} disabled={disabled}>{restProps.name}</button>
            {/*<Button  className={s.buttonFor} onClick={callBack} disabled={disabled} variant="outlined">{restProps.name}</Button>*/}
        </div>
    );
};

export default SuperButton;