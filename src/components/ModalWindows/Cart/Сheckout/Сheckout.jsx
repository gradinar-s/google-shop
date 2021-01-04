import style from "./Checkout.module.css";
import stylePopup from "../Popup.module.css";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";

const Checkout = (props) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
    <>
      <button onClick={openPopup} className={`buttonPrimary`}>
        Buy
      </button>
      {isPopupOpen && (
        <div className={isPopupOpen ? stylePopup.popup : null}>
          <div className={stylePopup.popup__body}>
            <div className={stylePopup.popup__content}>
              <span onClick={closePopup} className={stylePopup.popup__close}>
                x
              </span>
              <div className={stylePopup.popup__title}>Buy in one click</div>
              <div className={stylePopup.popup__text}>
                <Formik
                  initialValues={{ name: "", email: "", tel: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => alert(JSON.stringify(values, null, 2))}
                >
                  {({ isSubmitting }) => (
                    <Form className={style.formCheckout}>
                      <Field type="text" name="name" placeholder="Name" />
                      <Field type="email" name="email" placeholder="Email" />
                      <ErrorMessage name="email" component="div" />
                      <Field type="tel" name="tel" placeholder="Phone" />
                      <ErrorMessage name="tel" component="div" />
                      <button
                        className={`buttonPrimary ${style.btnSubmitForm}`}
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(Checkout);
