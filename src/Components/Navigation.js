import React from "react"
import {Link,Outlet} from "react-router-dom"




const Navigation = () => {
  return (
    <div className="navigation">
        <div>
           <h1>Oxford Dictionary</h1> 
        </div>
        <div className="links">
            <span><Link to ="/React_Dictionary_App">Home</Link></span>
            <span><Link to ="/history">History</Link></span>
        </div>
        <Outlet />
    </div>
  )
}

export default Navigation