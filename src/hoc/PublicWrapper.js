import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import PublicLayout from "../layout/publicLayout";

const PublicWrapper = ({ component: Component, ...rest }) => {
  const { isLogged } = useSelector((state) => state.app);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged !== true ? (
          <PublicLayout {...props}>
            <Component {...props} />
          </PublicLayout>
        ) : (
          <Redirect
            to={{
              pathname: "/u/dashboard",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PublicWrapper;
