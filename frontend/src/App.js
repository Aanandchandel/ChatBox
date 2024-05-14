// .............

// import Home from "./ProjectComponent/Home/Home";

// ...............
// import apiMethods from "./AppFuntions/apiMethods/apiMethods";
import {Routes ,BrowserRouter ,Route,useParams} from "react-router-dom"
import './App.css';
import Home from "../src/Page/Home/Home.js"
import Login from "./Page/Login/Login";
import Private from "./Auth/PrivateComp/Private";
// import GoogleSignInButton from "./Auth/EmailValidation/GoogleSignInButton";

function App() {



  return (
    <div className="App">
<BrowserRouter>

<Routes>
<Route element={<Private/>} >
<Route path="/W" element={<Home  />}/>
  </Route>  
<Route path="/" element={<Login/>}/>
{/* <Route path="/" element={<GoogleSignInButton/>}/> */}







</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
