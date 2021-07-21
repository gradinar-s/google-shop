import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import {
  setProductToCartAC,
  setAlreadyInCartAC,
  setAddProductToCart,
} from "../../../store/cardProductReducer";
import {
  openWindowCheckout,
  setCoordinateElement,
} from "../../../store/appReducer";
import {
  createAnimationElement,
  setCoordinatesKeyframes,
} from "../../../helpers/functions/common";

import CardProduct from "../../presentations/CardProduct/CardProduct";

const CardProductContainer = (props) => {
  // Element creation and animation add to cart
  const animationAddingItemCart = setCoordinatesKeyframes(
    props.coordinatesIconCart.top,
    props.coordinatesIconCart.left
  );

  // The item that moves from the clicked location to the trash can
  const EffectAddingItemCart = createAnimationElement(
    props.coordinateElement.top,
    props.coordinateElement.left,
    animationAddingItemCart
  );

  return (
    <CardProduct
      EffectAddingItemCart={EffectAddingItemCart}
      isAddProduct={props.isAddProduct}
      products={props.products}
      openWindowCheckout={props.openWindowCheckout}
      addCartGoodsValidation={props.addCartGoodsValidation}
      setCoordinateElement={props.setCoordinateElement}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.cardProduct.products,
    cart: state.cardProduct.cart,
    isAddProduct: state.cardProduct.isAddProduct,
    coordinateElement: state.app.coordinateElement,
    coordinatesIconCart: state.app.coordinatesIconCart,
  };
};

export default compose(
  connect(mapStateToProps, {
    setProductToCartAC,
    setAlreadyInCartAC,
    setAddProductToCart,
    // Coordinates icon cart
    openWindowCheckout,
    setCoordinateElement,
  })
)(CardProductContainer);
