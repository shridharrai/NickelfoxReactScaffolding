import React from "react";
import { Route } from "react-router";
import PublicLayout from "../layout/publicLayout";

const PublicWrapper = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <PublicLayout {...props}>
          <Component {...props} />
        </PublicLayout>
      )}
    />
  );
};

export default PublicWrapper;
