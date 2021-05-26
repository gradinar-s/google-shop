import React from "react";

import { connect } from "react-redux";
import {
  validEmail,
  validName,
  validTel,
} from "../../../helpers/functions/validate";
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

  const orderFormValidate = (values) => {
    const name = validName(values.name);
    const email = validEmail(values.email);
    const tel = validTel(values.tel);

    return { ...email, ...tel, ...name };
  };

  const onSubmitOrderForm = (data) => {
    props.sendMessageTelegramBot(data);
  };

  return (
    <Checkout
      onSubmitOrderForm={onSubmitOrderForm}
      orderFormValidate={orderFormValidate}
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
