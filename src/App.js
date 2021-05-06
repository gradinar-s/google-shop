import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import {
  setProductToCartAC,
  setAddProductToCart,
  setAlreadyInCartAC,
} from "./redux/cardProductReducer";
import { initializeApp } from "./redux/appReducer";

import Header from "./components/Header/Header";
import CardProduct from "./components/CardProduct/CardProduct";
import ProductPage from "./components/ProductPage/ProductPage";
import Loading from "./components/Common/Loading/Loading";

import "./App.css";

const App = (props) => {
  // Get data on page load
  useEffect(() => props.initializeApp(), []);

  // Validation of adding items to cart
  const addCartGoodsValidation = (card) => {
    if (!props.cart.length) {
      props.setProductToCartAC(card);
      props.setAddProductToCart(true);
      setTimeout(() => {
        props.setAddProductToCart(false);
      }, 1000);
    } else {
      const result = props.cart.some((item) => {
        return card.id === item.id;
      });
      if (result) {
        if (!card.selectSize) {
          return;
        } else {
          props.setAlreadyInCartAC(true);
          // To add a temporary notification
          setTimeout(() => {
            props.setAlreadyInCartAC(false);
          }, 2700);
        }
      } else {
        props.setProductToCartAC(card);
        props.setAddProductToCart(true);
        setTimeout(() => {
          props.setAddProductToCart(false);
        }, 1000);
      }
    }
  };

  const CARD_PRODUCT = (
    <CardProduct addCartGoodsValidation={addCartGoodsValidation} />
  );

  if (!props.initializedApp) {
    return <Loading />;
  }
  return (
    <div className="wrapper-app">
      <Header addCartGoodsValidation={addCartGoodsValidation} />
      <div className="container">
        <div className="shop-body">
          <Route exact path="/" render={() => CARD_PRODUCT} />
          <Route path="/selectionGoods" render={() => CARD_PRODUCT} />
          <Route
            path="/goods/:id"
            render={() => (
              <ProductPage addCartGoodsValidation={addCartGoodsValidation} />
            )}
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    initializedApp: state.app.initializedApp,
    cart: state.cardProduct.cart,
  };
};
export default connect(mapStateToProps, {
  setProductToCartAC,
  setAddProductToCart,
  setAlreadyInCartAC,
  initializeApp,
})(App);
