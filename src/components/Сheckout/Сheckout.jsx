import React from "react";

import { connect } from "react-redux";
import { mailer } from "../../nodemailer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  closeWindowCheckout,
  setWindowClosingProcess,
} from "../../redux/appReducer";

import ModalWindow from "../Common/ModalWindow/ModalWindow";

import style from "./Checkout.module.css";

const Checkout = (props) => {
  // Popup
  const closePopup = () => {
    const ANIMATION_TIME = 210;
    props.setWindowClosingProcess(true);
    setTimeout(() => {
      props.closeWindowCheckout();
      props.setWindowClosingProcess(false);
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
    const message = {
      from: "emmitt.schuppe@ethereal.email",
      to: data.email,
      subject: "New order",
      text: `
      Order #1
      Name: ${data.name}
      Phone: ${data.tel}
      `,
    };
    mailer(message);
  };

  return (
    <ModalWindow
      title="Buy in one click"
      isClosed={closePopup}
      isOpen={props.isOpenCheckout}
      width="450px"
    >
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
    </ModalWindow>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpenCheckout: state.app.isOpenCheckout,
  };
};
export default connect(mapStateToProps, {
  closeWindowCheckout,
  setWindowClosingProcess,
})(Checkout);
