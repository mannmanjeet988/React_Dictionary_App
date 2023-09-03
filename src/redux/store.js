import {createStore ,applyMiddleware} from "redux"

import thunk from "redux-thunk"


import apiReducer from "./reducer/apiReducer";

const store = createStore(apiReducer, applyMiddleware(thunk));

export default store;