import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import OneUserDetail from "./Pages/OneUserDetail/OneUserDetail";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Pages/Users/Users";
import "./App.scss";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/users" element={<Users />}></Route>
          <Route exact path="/aUserDetail" element={<OneUserDetail/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
