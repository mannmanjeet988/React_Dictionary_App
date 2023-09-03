import { LOADING,SUCCESS,ERROR } from "../actions/actionTypes"

const initialState={
    loading:false,
    data:[],
    error:""
}

const apiReducer=(state=initialState ,action)=>{
    if(action.type === LOADING){
        return{
            ...state,
            loading:true
        }
    }
    else if(action.type === SUCCESS){
        return{
            ...state,
            data:action.payload
        }
    }
    else if(action.type === ERROR){
        return{
            ...state,
            error:action.payload
        }
    }
    else return state
}

export default apiReducer