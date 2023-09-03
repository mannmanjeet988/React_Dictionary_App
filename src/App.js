import React from "react"
import './App.css';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import History from './Components/History';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <Routes>
        <Route  >
            <Route path="/"   element={<Home/>} />
            <Route path="/history"   element={<History/>} />
        </Route>      
      </Routes>
      
    </div>
  );
}

export default App;
