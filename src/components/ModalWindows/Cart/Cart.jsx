import style from "./Cart.module.css";
import stylePopup from "./Popup.module.css";
import cart from "../../../img/icon/cart.svg";

import React, { useState } from "react";
import { connect } from "react-redux";

import headerStyle from "../../Header/Header.module.css";
import ProductInCart from "./ProductInCart/ProductInCart";

const Cart = (props) => {
  const [popupState, setPopupState] = useState(false);

  const openPopup = () => {
    setPopupState(true);
  };

  const closePopup = () => {
    setPopupState(false);
  };

  return (
    <>
      <div className={`${headerStyle.header__title} ${style.header__title_cart}`}>
        <span className={style.openPopupBtn} onClick={openPopup}>
          <img src={cart} alt="" />
        </span>
        <span className={style.quan} id="quan">
          {props.cart.length}
        </span>
      </div>
      {popupState && (
        <div className={popupState ? stylePopup.popup : null}>
          <div className={stylePopup.popup__body}>
            <div className={stylePopup.popup__content}>
              <span onClick={closePopup} className={stylePopup.popup__close}>
                x
              </span>
              <div className={stylePopup.popup__title}>
                {props.cart.length ? (
                  "Cart"
                ) : (
                  <div>
                    <span>Your cart is empty</span>
                    <span className={style.backToShop} onClick={closePopup}>
                      Back to shopping
                    </span>
                  </div>
                )}
              </div>
              <div className={stylePopup.popup__text}>
                <ProductInCart />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cardProduct.cart,
  };
};
export default connect(mapStateToProps, {})(Cart);
