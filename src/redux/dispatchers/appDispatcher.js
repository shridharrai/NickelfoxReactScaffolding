// App wide dispatcher

import Stores from "../store";
import Actions from "../actions/appActions";

const AppDispatcher = {
  setUserLoggedIn: (data) => {
    Stores.dispatch({ type: Actions.SET_TOKEN, data: data.token });
    Stores.dispatch({ type: Actions.LOGIN, data: data.user });
  },
  setUserLoggedOut: () => {
    Stores.dispatch({ type: Actions.LOGOUT });
  },
  setUserSignUp: (data) => {
    Stores.dispatch({ type: Actions.SET_TOKEN, data: data.token });
    Stores.dispatch({ type: Actions.SIGNUP, data: data.user });
  },
  updateUserTokens: (data) => {
    Stores.dispatch({ type: Actions.SET_TOKEN, data });
  },
  updateUserInfo: (data) => {
    Stores.dispatch({ type: Actions.LOGIN, data });
  }
};

export default AppDispatcher;
