import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NewForm from "./Components/Form/NewForm";
import Login from "./Components/Login/Login";
import Multiplygems from "./Components/Multiplygems/Multiplygems";
import Addgems from "./Components/ShowUser/ShowUser";

function App() {
  return (
    <>
      <Router>
        <main>
          <Route path="/" component={NewForm} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/multiplier" component={Multiplygems} exact />
          <Route path="/addgems" component={Addgems} exact />
        </main>
      </Router>
    </>
  );
}

export default App;
