import React from "react";
import { connect } from "react-redux";

import { openWindowAuth, closeWindowAuth } from "../../../store/appReducer";

import AuthDropdownMenu from "../../presentations/AuthDropdownMenu/AuthDropdownMenu";

const AuthDropdownMenuContainer = ({
  isOpenAuth,
  openWindowAuth,
  closeWindowAuth,
}) => {
  return (
    <AuthDropdownMenu
      isOpenAuth={isOpenAuth}
      openWindowAuth={openWindowAuth}
      closeWindowAuth={closeWindowAuth}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isOpenAuth: state.app.isOpenAuth,
  };
};
export default connect(mapStateToProps, { openWindowAuth, closeWindowAuth })(
  AuthDropdownMenuContainer
);
