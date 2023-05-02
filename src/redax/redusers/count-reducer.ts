

export type initialStateType ={
    count: number
    value: number[]
    error:string
    show:boolean
}

let initialState:initialStateType = {
    count: 0,
    value: [0,10],
    error:'',
    show:true
}





export const countReducer = (state:initialStateType = initialState, action:Action) => {


    switch (action.type) {

        case 'INC': {

            return { ...state,count:action.payload.count}
        }
        case 'ARR':{


            return {...state,value:action.payload.countArr}
        }
        case 'ERR':{

            return {...state,error:action.payload.check}
        }
        case 'BOL':{


            return {...state,show:action.payload.item}
        }


        default:
            return state
    }

}


export const countAC = (count:number) => {

    return {

        type:'INC',
        payload:{
            count
        }
    } as const
}


export const countArrayAC = (countArr:number[]) => {

    return {

        type:'ARR',
        payload:{
            countArr
        }
    } as const
}

export const errorAC = (check:string) => {

    return {

        type:'ERR',
        payload:{
           check
        }
    } as const
}

export const bolAC = (item:boolean) => {

    return {

        type:'BOL',
        payload:{
            item
        }
    } as const
}

export type Action = countType|countArrayType|errorType|bolType

export type countType = ReturnType<typeof countAC>
export type countArrayType = ReturnType<typeof countArrayAC>
export type errorType = ReturnType<typeof errorAC>
export type bolType = ReturnType<typeof bolAC>