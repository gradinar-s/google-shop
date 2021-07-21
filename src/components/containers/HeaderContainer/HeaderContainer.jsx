import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import {
  openCart,
  smoothlyCloseModalWindow,
  closeCart,
  setWindowClosingProcess,
  setCoordinatesIconCart,
} from "../../../store/appReducer";

import Header from "../../presentations/Header/Header";

const HeaderContainer = (props) => {
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
      closeCart={props.closeCart}
      smoothlyCloseModalWindow={props.smoothlyCloseModalWindow}
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
  openCart,
  closeCart,
  smoothlyCloseModalWindow,
})(HeaderContainer);
