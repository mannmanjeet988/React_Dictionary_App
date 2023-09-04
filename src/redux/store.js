import {createStore ,applyMiddleware} from "redux"
import { combineReducers } from "redux"; 

import apiReducer from "./reducer/apiReducer";
import historyReducer from "./reducer/historyReducer";
import thunk from "redux-thunk"


export const rootReducer = combineReducers({
    homeData : apiReducer,
    historyData : historyReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));


 