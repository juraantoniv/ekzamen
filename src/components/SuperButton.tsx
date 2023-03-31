import React from 'react';


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
        </div>
    );
};

export default SuperButton;