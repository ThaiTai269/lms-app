import { Routes, Route } from "react-router-dom";
import {Login} from "./component/login/login";
import Forgot from "./component/login/forgot";
import Home from "./component/home/homepage/home";

function App() {
  return (
    <div className="App">
      <Routes>  
        <Route  path="/login" element={<Login />} />
        <Route  path="/forgot" element={<Forgot />} />
        <Route  path="/home" element={<Home />} />
        {/* <Route  path="/home" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;