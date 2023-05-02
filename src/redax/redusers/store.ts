
import { combineReducers, createStore } from "redux"
import {countReducer} from "./count-reducer";



const reducers = combineReducers({

    count:countReducer

});


export type AppRoot = ReturnType<typeof reducers>

const store = createStore(reducers);

export default store;