import { firebaseAuthAPI } from "../api/api";
import { createCookie } from "../helpers/functions/common";

const AUTH_MANAGER = "auth/AUTH_MANAGER";
// set authification error
const SET_AUTH_ERROR = "auth/SET_AUTH_ERROR";
const SET_MULTIPLE_LOGIN_ATTEMPTS = "auth/SET_MULTIPLE_LOGIN_ATTEMPTS";

const initialState = {
  isAuthManager: false,
  error: null,
  multipleLoginAttempts: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_MANAGER:
      return {
        ...state,
        isAuthManager: true,
      };
    case SET_AUTH_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case SET_MULTIPLE_LOGIN_ATTEMPTS:
      return {
        ...state,
        multipleLoginAttempts: true,
      };
    default: {
      return state;
    }
  }
};

// Action creators
export const setAuthError = (error) => ({
  type: SET_AUTH_ERROR,
  payload: { error },
});

export const setMultipleLoginAttempts = () => ({
  type: SET_MULTIPLE_LOGIN_ATTEMPTS,
});

// Thunk creators
export const authManagerTC = (email, password) => async (dispatch) => {
  try {
    const data = await firebaseAuthAPI.authManager(email, password);
    console.log("Data", data);
  } catch (e) {
    console.log(e);
    const errors = e.response.data.error.errors;
    if (
      errors[0].message === "EMAIL_NOT_FOUND" ||
      errors[0].message === "INVALID_PASSWORD"
    ) {
      dispatch(setAuthError("Wrong login or password"));
    } else if (errors[0].message.includes("TOO_MANY_ATTEMPTS_TRY_LATER")) {
      createCookie("multipleLoginAttempts", true, 1);
      dispatch(setMultipleLoginAttempts(true));
      dispatch(
        setAuthError(
          "Access to this account has been disabled due to many failed login attempts"
        )
      );
    }
  }
};
