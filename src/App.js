import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './component/LoginForm';
import Forgot from './component/ForgotForm';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      {/* <header>
      <img class="logo" src="./img/Frame.png" alt="logo"/>
      </header> */}

      <div className='auth-wrapper'>
        <div className='auth-inner'>
          <Routes>
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/forgot" element={<Forgot/>} />
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;