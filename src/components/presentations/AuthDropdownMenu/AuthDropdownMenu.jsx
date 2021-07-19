import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { validEmail, validPassword } from "../../../helpers/functions/validate";

import Notification from "../Notification/Notification";
import ModalWindow from "../ModalWindow/ModalWindow";

import sHeader from "../Header/Header.module.sass";
import style from "./AuthDropdownMenu.module.sass";
import {
  authManagerTC,
  setMultipleLoginAttempts,
} from "../../../store/authReducer";
import { readCookie } from "../../../helpers/functions/common";

const AuthDropdownMenu = ({
  isOpenAuth,
  openWindowAuth,
  closeWindowAuth,
  authManagerTC,
  errorAuth,
  setMultipleLoginAttempts,
  multipleLoginAttempts,
}) => {
  useEffect(() => {
    // Check multipleLoginAttempts cookie
    if (readCookie("multipleLoginAttempts")) {
      setMultipleLoginAttempts(true);
    }
  }, [multipleLoginAttempts]);

  // Handler auth form
  const handlerAuthForm = (values) => {
    const emailHandler = validEmail(values.email);
    const passwordHandler = validPassword(values.password);

    return { ...emailHandler, ...passwordHandler };
  };

  // On submit form
  const onSubmitForm = (data) => {
    authManagerTC(data.email, data.password);
  };

  return (
    <>
      <Notification className={sHeader.authDropdownMenu} direction="top-right">
        <ul className={style.authDropdownMenuList}>
          <li className={style.authDropdownMenuList__disable}>I am a client</li>
          <li
            className={
              multipleLoginAttempts
                ? style.authDropdownMenuList__disable
                : style.authDropdownMenuList__item
            }
            onClick={!multipleLoginAttempts ? openWindowAuth : null}
          >
            I am a manager
          </li>
        </ul>
      </Notification>
      {/* <--- Auth form ----------------------------------------------------> */}
      <ModalWindow
        title="Manager authorization"
        width="500px"
        isOpen={isOpenAuth}
        isClosed={closeWindowAuth}
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={handlerAuthForm}
          onSubmit={onSubmitForm}
        >
          {() => (
            <Form className={style.authForm}>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" className="error" component="div" />
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" className="error" component="div" />
              <div className="error">{errorAuth}</div>
              <button
                type="submit"
                className={`buttonPrimary ${style.authForm__submitButton}`}
              >
                Sign in
              </button>
            </Form>
          )}
        </Formik>
      </ModalWindow>
      {/* <--- End auth form ------------------------------------------------> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    errorAuth: state.auth.error,
    multipleLoginAttempts: state.auth.multipleLoginAttempts,
  };
};
export default connect(mapStateToProps, {
  authManagerTC,
  setMultipleLoginAttempts,
})(AuthDropdownMenu);
