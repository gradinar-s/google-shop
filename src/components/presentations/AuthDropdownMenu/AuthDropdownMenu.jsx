import React, { useEffect, useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { validEmail, validPassword } from "../../../helpers/functions/validate";
import { readCookie } from "../../../helpers/functions/common";

import Notification from "../Notification/Notification";
import ModalWindow from "../ModalWindow/ModalWindow";

import sHeader from "../Header/Header.module.sass";
import style from "./AuthDropdownMenu.module.sass";

const AuthDropdownMenu = ({
  isOpenAuth,
  openWindowAuth,
  closeWindowAuth,
  smoothlyCloseModalWindow,
  authManagerTC,
  errorAuth,
  setMultipleLoginAttempts,
  multipleLoginAttempts,
}) => {
  const [isRememberManager, setRememberManager] = useState(false);

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
    authManagerTC(data.email, data.password, isRememberManager);
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
        isClosed={() => smoothlyCloseModalWindow(closeWindowAuth)}
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
              <label
                htmlFor="rememberMe"
                className={style.authForm__rememberMe}
                onChange={(e) => setRememberManager(e.target.checked)}
              >
                Remember me
                <input type="checkbox" id="rememberMe" />
              </label>
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

export default AuthDropdownMenu;
