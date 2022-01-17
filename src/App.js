import { Routes, Route } from "react-router-dom";
import Login from "./component/login/login";
import Forgot from "./component/forgot/forgot"
import Home from "./component/home/homepage/home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
