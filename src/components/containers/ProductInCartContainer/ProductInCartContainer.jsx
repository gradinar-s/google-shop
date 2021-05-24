import React from "react";
import { connect } from "react-redux";

import { closeCart, openWindowCheckout } from "../../../store/appReducer";
import {
  incrementGoodsAC,
  decrementGoodsAC,
  removeFromCartAC,
} from "../../../store/cardProductReducer";

import ProductInCart from "../../presentations/ProductInCart/ProductInCart";

const ProductInCartContainer = ({
  cart,
  decrementGoodsAC,
  incrementGoodsAC,
  removeFromCartAC,
  sum,
  addCartGoodsValidation,
  closeCart,
  openWindowCheckout,
}) => {
  const incrementGoods = (id) => {
    incrementGoodsAC(id);
  };
  const decrementGoods = (id, counter) => {
    if (counter <= 1) removeFromCartAC(id);
    else decrementGoodsAC(id);
  };

  return (
    <ProductInCart
      sum={sum}
      cart={cart}
      addCartGoodsValidation={addCartGoodsValidation}
      closeCart={closeCart}
      openWindowCheckout={openWindowCheckout}
      incrementGoods={incrementGoods}
      decrementGoods={decrementGoods}
      removeFromCartAC={removeFromCartAC}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cardProduct.cart,
    sum: state.cardProduct.sum,
  };
};
export default connect(mapStateToProps, {
  incrementGoodsAC,
  decrementGoodsAC,
  removeFromCartAC,
  closeCart,
  openWindowCheckout,
})(ProductInCartContainer);
