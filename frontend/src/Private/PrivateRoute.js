import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../Utility/AuthContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) => <RouteComponent {...routeProps} />}
    />
  );
};

export default PrivateRoute;
