import { firebaseAuthAPI } from "../api/api";
import { createCookie } from "../helpers/functions/common";
import { closeWindowAuth } from "./appReducer";

const AUTH_MANAGER = "auth/AUTH_MANAGER";
// set authification error
const SET_AUTH_ERROR = "auth/SET_AUTH_ERROR";
const SET_MULTIPLE_LOGIN_ATTEMPTS = "auth/SET_MULTIPLE_LOGIN_ATTEMPTS";
// set auth authification manager (succsessfully)
const SET_AUTH_MANAGER = "auth/SET_AUTH_MANAGER";

const initialState = {
  isAuthManager: false,
  error: null,
  multipleLoginAttempts: false,
  rememberManager: false,
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
    case SET_AUTH_MANAGER:
      return {
        ...state,
        isAuthManager: true,
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

export const setAuthManager = () => ({
  type: SET_AUTH_MANAGER,
});

// Thunk creators
export const authManagerTC =
  (email, password, isRememberManager) => async (dispatch) => {
    try {
      const data = await firebaseAuthAPI.authManager(email, password);
      if (isRememberManager) {
        createCookie("rememberManager", true, 30);
      }
      dispatch(setAuthManager());
      dispatch(closeWindowAuth()); // close modal window auth manager
    } catch (e) {
      const errors = e.response.data.error.errors;

      switch (errors[0].message) {
        case "INVALID_PASSWORD":
          dispatch(setAuthError("Wrong login or password"));
          break;
        case "EMAIL_NOT_FOUND":
          dispatch(setAuthError(`Manager with email ${email} not found`));
          break;
      }

      // If the password was incorrect more than three times
      if (errors[0].message.includes("TOO_MANY_ATTEMPTS_TRY_LATER")) {
        // Create cookies that deny authorization
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
