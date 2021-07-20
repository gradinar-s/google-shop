import React from "react";
import { connect } from "react-redux";

import {
  openWindowAuth,
  closeWindowAuth,
  smoothlyCloseModalWindow,
} from "../../../store/appReducer";

import {
  authManagerTC,
  setMultipleLoginAttempts,
} from "../../../store/authReducer";

import AuthDropdownMenu from "../../presentations/AuthDropdownMenu/AuthDropdownMenu";

const AuthDropdownMenuContainer = ({
  isOpenAuth,
  openWindowAuth,
  closeWindowAuth,
  smoothlyCloseModalWindow,
  authManagerTC,
  setMultipleLoginAttempts,
}) => {
  return (
    <AuthDropdownMenu
      isOpenAuth={isOpenAuth}
      openWindowAuth={openWindowAuth}
      closeWindowAuth={closeWindowAuth}
      smoothlyCloseModalWindow={smoothlyCloseModalWindow}
      authManagerTC={authManagerTC}
      setMultipleLoginAttempts={setMultipleLoginAttempts}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isOpenAuth: state.app.isOpenAuth,
    errorAuth: state.auth.error,
    multipleLoginAttempts: state.auth.multipleLoginAttempts,
  };
};
export default connect(mapStateToProps, {
  openWindowAuth,
  closeWindowAuth,
  smoothlyCloseModalWindow,
  authManagerTC,
  setMultipleLoginAttempts,
})(AuthDropdownMenuContainer);
