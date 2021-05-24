import React from "react";

import { connect } from "react-redux";
import {
  closeWindowCheckout,
  setWindowClosingProcess,
  sendMessageTelegramBot,
  setMessageSendStatus,
} from "../../../store/appReducer";

import Checkout from "../../presentations/Сheckout/Сheckout";

const CheckoutContainer = (props) => {
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

    const regexEmail = new RegExp(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/,
      "i"
    );

    const regexTel = new RegExp(
      /^((8|\+[0-9])[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
      "i"
    );

    if (!values.email) {
      errors.email = "Required";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.tel) {
      errors.tel = "Required";
    } else if (!regexTel.test(values.tel)) {
      errors.tel = "Invalid phone";
    }

    return errors;
  };

  const onSubmitOrderForm = (data) => {
    props.sendMessageTelegramBot(data);
  };

  return (
    <Checkout
      onSubmitOrderForm={onSubmitOrderForm}
      orderFormValidation={orderFormValidation}
      closePopup={closePopup}
      isOpenCheckout={props.isOpenCheckout}
      isMessageSentSuccess={props.isMessageSentSuccess}
    />
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
})(CheckoutContainer);
