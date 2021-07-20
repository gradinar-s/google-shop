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
  smoothlyCloseModalWindow,
} from "../../../store/appReducer";

import Checkout from "../../presentations/Сheckout/Сheckout";

const CheckoutContainer = (props) => {
  // Form field validation (Returns an object with errors)
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
      closeWindowCheckout={props.closeWindowCheckout}
      smoothlyCloseModalWindow={props.smoothlyCloseModalWindow}
      setMessageSendStatus={props.setMessageSendStatus}
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
  smoothlyCloseModalWindow,
  setWindowClosingProcess,
  sendMessageTelegramBot,
  setMessageSendStatus,
})(CheckoutContainer);
