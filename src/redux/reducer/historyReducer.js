import { ADD_TO_HISTORY } from "../actions/actionTypes"

const initialState = {
    historyArr: [],
}

const historyReducer = (state=initialState, action) =>{
    if(action.type === ADD_TO_HISTORY){
        return{ ...state, historyArr : [...state.historyArr , action.payload]}
        
    }
    else{
        return state
    }
}

export default historyReducer