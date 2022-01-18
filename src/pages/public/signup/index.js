import React from "react";
import { Typography, TextField, Button, Grid, Divider } from "@mui/material";
import { Formik, Field } from "formik";
import AppDispatcher from "redux/dispatchers/appDispatcher";
import { useHistory } from "react-router-dom";
import { AuthService } from "network";

const SignUp = () => {
  const history = useHistory();

  const userLogin = async (values) => {
    const res = await AuthService.SignUpByFirebase({
      ...values,
      returnSecureToken: true
    });
    if (res.success) {
      AppDispatcher.setUserSignUp({
        token: {
          authToken: res.data.idToken,
          refreshToken: res.data.refreshToken
        },
        user: { email: res.data.email, uid: res.data.localId }
      });
      history.push("/u/dashboard");
    } else {
      alert(res.message.message);
    }
  };
  return (
    <React.Fragment>
      <Typography variant="h3">New User!</Typography>
      <Typography variant="subtitle">Create Account</Typography>
      <Grid container spacing={2}>
        <Divider />
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={userLogin}>
          {({ isValid, handleSubmit }) => (
            <React.Fragment>
              <Grid item xs={12}>
                <Field
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  as={TextField}
                  variant="outlined"
                  label="Email"
                />
              </Grid>

              <Grid item xs={12}>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  as={TextField}
                  variant="outlined"
                  label="Password"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  disabled={!isValid}
                  variant="outlined"
                  size="large"
                  onClick={handleSubmit}>
                  SignUp
                </Button>
              </Grid>
            </React.Fragment>
          )}
        </Formik>
      </Grid>
    </React.Fragment>
  );
};

export default SignUp;
