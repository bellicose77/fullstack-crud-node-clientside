import { Route, Router, Routes } from "react-router-dom";
import AddUser from "./componets/AddUser/AddUser";
import Header from "./componets/Header/Header";
import Home from "./componets/Home/Home";
import UpdateUser from "./componets/UpdateUser/UpdateUser";



function App() {
  return (
    <div className="App">
    
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path ='/adduser' element={<AddUser/>}/>
          <Route path ='/update' element={<UpdateUser/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
