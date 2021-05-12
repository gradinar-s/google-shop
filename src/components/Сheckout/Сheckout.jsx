import React from "react";

import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  closeWindowCheckout,
  setWindowClosingProcess,
  sendMessageTelegramBot,
  setMessageSendStatus,
} from "../../redux/appReducer";

import ModalWindow from "../Common/ModalWindow/ModalWindow";

import succeessIcon from "../../img/icon/checkMark.svg";
import style from "./Checkout.module.css";

const Checkout = (props) => {
  // Popup
  const closePopup = () => {
    const ANIMATION_TIME = 210;
    props.setWindowClosingProcess(true);
    setTimeout(() => {
      props.closeWindowCheckout();
      props.setWindowClosingProcess(false);
      props.setMessageSendStatus(false); // Hide successful order notification
    }, ANIMATION_TIME);
  };

  const orderFormValidation = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const onSubmitOrderForm = (data) => {
    props.sendMessageTelegramBot(data);
  };

  return (
    <ModalWindow
      title="Buy in one click"
      isClosed={closePopup}
      isOpen={props.isOpenCheckout}
      width="450px"
    >
      {!props.isMessageSentSuccess && (
        <Formik
          initialValues={{ name: "", email: "", tel: "" }}
          validate={orderFormValidation}
          onSubmit={onSubmitOrderForm}
        >
          {({ isSubmitting }) => (
            <Form className={style.formCheckout}>
              <Field type="text" name="name" placeholder="Name" />
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" className="error" component="div" />
              <Field type="tel" name="tel" placeholder="Phone" />
              <ErrorMessage name="tel" component="div" />
              <button
                className={`buttonPrimary ${style.btnSubmitForm}`}
                type="submit"
                disabled={isSubmitting}
              >
                Buy
              </button>
            </Form>
          )}
        </Formik>
      )}
      {props.isMessageSentSuccess && (
        <div className={style.msgAfterOrder}>
          <img src={succeessIcon} alt="" />
          <span className={style.description}>
            Your order has been sent for processing
          </span>
        </div>
      )}
    </ModalWindow>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpenCheckout: state.app.isOpenCheckout,
    isMessageSentSuccess: state.app.isMessageSentSuccess,
  };
};
export default connect(mapStateToProps, {
  closeWindowCheckout,
  setWindowClosingProcess,
  sendMessageTelegramBot,
  setMessageSendStatus,
})(Checkout);
