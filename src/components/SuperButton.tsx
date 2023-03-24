import React from 'react';


type buttonProps ={
    callBack:()=>void
    count?:number
    name?:string
    disabled:boolean
}

const SuperButton = (props:buttonProps) => {

    const {callBack,count,disabled,name}=props

    return (
        <div>
            <button onClick={callBack} disabled={disabled}>{name && <div>{name}</div>} {count}</button>
        </div>
    );
};

export default SuperButton;