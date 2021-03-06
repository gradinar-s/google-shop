import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import {
  openCart,
  closeCart,
  setWindowClosingProcess,
  setCoordinatesIconCart,
} from "../../../store/appReducer";

import Header from "../../presentations/Header/Header";

const HeaderContainer = (props) => {
  // Close modal window
  const closePopup = (closeElement) => {
    const ANIMATION_TIME = 210;
    props.setWindowClosingProcess(true);
    setTimeout(() => {
      props.closeCart();
      props.setWindowClosingProcess(false);
    }, ANIMATION_TIME);
  };

  // Get cart coordinates
  const cartElement = useRef();

  useEffect(() => {
    const coordinations = cartElement.current.getBoundingClientRect();
    const top = Math.round(coordinations.top);
    const left = Math.round(coordinations.left);
    props.setCoordinatesIconCart({ top, left });
  }, []);

  return (
    <Header
      cart={props.cart}
      cartElement={cartElement}
      openCart={props.openCart}
      closePopup={closePopup}
      isAlreadyInCart={props.isAlreadyInCart}
      addCartGoodsValidation={props.addCartGoodsValidation}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAlreadyInCart: state.cardProduct.isAlreadyInCart,
    cart: state.cardProduct.cart,
    initializedApp: state.app.initializedApp,
  };
};

export default connect(mapStateToProps, {
  setWindowClosingProcess,
  setCoordinatesIconCart,
  // modal window cart
  openCart,
  closeCart,
})(HeaderContainer);
