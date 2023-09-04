import { ADD_TO_HISTORY } from "./actionTypes";

 const addToHistory =(word) =>{
   return {
    type: ADD_TO_HISTORY,
    payload : word
   }
}

export default addToHistory
