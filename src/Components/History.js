import React,{useState}from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Loading, Success, Error } from "../redux/actions/apiCalls";
import addToHistory from "../redux/actions/historyActions";
import axios from "axios";
import { fetchMeaning } from "../redux/actions/apiCalls";
import { v4 as uuidv4 } from "uuid";

const History = () => {
  const history  =  useSelector((state) => state.historyData);
  console.log("history:", history)

  return (
    <div>
        <h1>History</h1>
        <p>Welcome to the History page!</p>
        {
          history.historyArr.map(item=>
            {
             (
                <div key={uuidv4()}>
                      <p>item.historyArr[0]</p>
                </div>
              )
            })
        }
          
            
    </div>
  )
}

export default History