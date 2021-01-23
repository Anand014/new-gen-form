import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NewForm from "./Components/Form/NewForm";
import Login from "./Components/Login/Login";
import Multiplygems from "./Components/Multiplygems/Multiplygems";
import Addgems from "./Components/ShowUser/ShowUser";
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
            <Route path="/addgems" component={Addgems} exact />
          </main>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
