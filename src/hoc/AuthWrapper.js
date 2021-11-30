import React from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
import PrivateLayout from "../layout/privateLayout";

const AuthWrapper = ({ component: Component, ...rest }) => {
  const { isLogged } = useSelector((state) => state.app);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged === true ? (
          <PrivateLayout {...props}>
            <Component {...props} />
          </PrivateLayout>
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default AuthWrapper;
