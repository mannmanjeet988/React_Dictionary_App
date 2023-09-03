import React from "react"
import {NavLink,Outlet} from "react-router-dom"




const Navigation = () => {
  return (
    <div className="navigation">
        <div>
           <h1>Oxford Dictionary</h1> 
        </div>
        <div className="links">
            <span><NavLink to ="/">Home</NavLink></span>
            <span><NavLink to ="/history">History</NavLink></span>
        </div>
        <Outlet />
    </div>
  )
}

export default Navigation