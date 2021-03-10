import style from "./Cart.module.css";
import cart from "../../img/icon/cart.svg";

import React, { useState } from "react";
import { connect } from "react-redux";

import ProductInCart from "../Cart/ProductInCart/ProductInCart";
import ModalWindow from "../Common/ModalWindow/ModalWindow";

const Cart = (props) => {
  /* Add / remove DOM element */
  const [isModalWindowOpen, setModalOpen] = useState(false);
  /* To animate when the modal window is closed */
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
  return (
    <>
      <div className={style.titleCart} onClick={openPopup}>
        <img src={cart} alt="" />
        <span className={style.quan}>{props.cart.length}</span>
      </div>
      <ModalWindow
        className={windowClosingProcess ? "hide" : ""}
        title={props.cart.length ? "Cart" : "Your cart is empty"}
        isOpen={isModalWindowOpen}
        isClosed={closePopup}
        width={!props.cart.length && "400px"}
      >
        {props.cart.length ? (
          <ProductInCart />
        ) : (
          <span className={style.backToShop} onClick={closePopup}>
            Back to shopping
          </span>
        )}
      </ModalWindow>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cardProduct.cart,
  };
};
export default connect(mapStateToProps, {})(Cart);
