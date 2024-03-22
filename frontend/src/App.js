// .............

// import Home from "./ProjectComponent/Home/Home";

// ...............
// import apiMethods from "./AppFuntions/apiMethods/apiMethods";
import {Routes ,BrowserRouter ,Route} from "react-router-dom"
import './App.css';
import Home from "../src/Page/Home/Home.js"
import Login from "./Page/Login/Login";

function App() {

  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route path="/W" element={<Home  />}/>
<Route path="/" element={<Login/>}/>







</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
