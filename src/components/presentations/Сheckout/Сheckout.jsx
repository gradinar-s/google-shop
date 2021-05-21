import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

import ModalWindow from "../ModalWindow/ModalWindow";

import succeessIcon from "../../../img/icon/checkMark.svg";

import style from "./Checkout.module.css";

const Checkout = ({
  isOpenCheckout,
  isMessageSentSuccess,
  closePopup,
  orderFormValidation,
  onSubmitOrderForm,
}) => {
  return (
    <ModalWindow
      width="450px"
      title="Buy in one click"
      isOpen={isOpenCheckout}
      isClosed={closePopup}
    >
      {!isMessageSentSuccess && (
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
      {isMessageSentSuccess && (
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

export default Checkout;
