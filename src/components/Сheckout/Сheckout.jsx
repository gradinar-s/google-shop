import style from "./Checkout.module.css";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import ModalWindow from "../Common/ModalWindow/ModalWindow";

const Checkout = (props) => {
  const [isModalWindowOpen, setModalOpen] = useState(false);
  const [windowClosingProcess, setWindowClosingProcess] = useState();

  const openPopup = () => {
    setModalOpen(true);
  };

  const closePopup = () => {
    const ANIMATION_TIME = 210;
    setWindowClosingProcess(true);
    setTimeout(() => {
      setModalOpen(false);
      setWindowClosingProcess(false);
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
    console.log(data);
  };

  return (
    <>
      <button onClick={openPopup} className="buttonPrimary">
        Buy
      </button>
      <ModalWindow
        className={windowClosingProcess ? "hide" : ""}
        title="Buy in one click"
        isClosed={closePopup}
        isOpen={isModalWindowOpen}
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
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(Checkout);
