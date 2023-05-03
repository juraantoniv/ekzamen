
import { combineReducers, createStore } from "redux"
import {countReducer} from "./count-reducer";
import {saveState} from "../../functions/func";



const reducers = combineReducers({

    count:countReducer

});




export type AppRoot = ReturnType<typeof reducers>

const store = createStore(reducers);





export default store;