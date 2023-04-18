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
        <>
            {/*<button className={s.buttonFor} onClick={callBack} disabled={disabled}>{restProps.name}</button>*/}
            <Button size={'small'} sx={{height:40, fontSize:10}} className={s.buttonFor} onClick={callBack} disabled={disabled} variant="outlined">{restProps.name}</Button>
        </>
    );
};

export default SuperButton;