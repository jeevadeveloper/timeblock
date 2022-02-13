import "./App.css";
import {Routes,Route} from "react-router-dom";
import Admin from "./Admin";
import Home from "./Home";
import { ToastContainer } from "react-toastify"
function App() {
  return (
    
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/admin/*" element={<Admin/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
