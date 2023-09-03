import { LOADING,SUCCESS,ERROR } from "./actionTypes";
import axios from "axios"

export const Loading=()=>{
    return{
        type:LOADING
    }
}

export const Success = (data) =>{
    return{
        type:SUCCESS,
        payload : data
    }
}

export const Error = (error) =>{
    return{
        type:ERROR,
        payload : error
    }
}

export function fetchMeaning(word){
    return (dispatch)=>{
        dispatch(Loading());
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        axios.get(apiUrl)
        .then(response => (dispatch(Success(response.data))))
        .catch(error => (
            dispatch(Error(error.message))
        ))
    }
}