import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Addgems from "./Components/AddGems/AddGems";
import NewForm from "./Components/Form/NewForm";
import Login from "./Components/Login/Login";
import Multiplygems from "./Components/Multiplygems/Multiplygems";
import PrivateRoute from "./Private/PrivateRoute";
import { AuthProvider } from "./Utility/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <main>
            <Route path="/register" component={NewForm} exact />
            <Route path="/login" component={Login} exact />
            <PrivateRoute path="/" component={Multiplygems} exact />
            <PrivateRoute path="/addgems" component={Addgems} exact />
          </main>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
