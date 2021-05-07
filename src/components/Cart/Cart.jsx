import React from "react";

import { connect } from "react-redux";

import ProductInCart from "../Cart/ProductInCart/ProductInCart";
import ModalWindow from "../Common/ModalWindow/ModalWindow";

import style from "./Cart.module.css";

const Cart = (props) => {
  return (
    <ModalWindow
      title={props.cart.length ? "Cart" : "Your cart is empty"}
      isOpen={props.isOpenCart}
      isClosed={props.closePopup}
      width={!props.cart.length && "400px"}
    >
      {props.cart.length ? (
        <ProductInCart addCartGoodsValidation={props.addCartGoodsValidation} />
      ) : (
        <span className={style.backToShop} onClick={props.closePopup}>
          Back to shopping
        </span>
      )}
    </ModalWindow>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpenCart: state.app.isOpenCart,
  };
};
export default connect(mapStateToProps, {})(Cart);
