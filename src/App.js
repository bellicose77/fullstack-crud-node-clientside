import { Route, Router, Routes } from "react-router-dom";
import Header from "./componets/Header/Header";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
