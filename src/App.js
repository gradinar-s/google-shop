import "./App.css";

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import {
  getProductCardDataTC,
  setProductToCartAC,
  setAddProductToCart,
  setAlreadyInCartAC,
} from "./redux/cardProductReducer";

import Header from "./components/Header/Header";
import CardProduct from "./components/CardProduct/CardProduct";
import ProductPage from "./components/ProductPage/ProductPage";

const App = (props) => {
  // Get data on page load
  useEffect(() => props.getProductCardDataTC(), []);

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
        props.setAlreadyInCartAC(true);
        // To add a temporary notification
        setTimeout(() => {
          props.setAlreadyInCartAC(false);
        }, 2800);
      } else {
        props.setProductToCartAC(card);
        props.setAddProductToCart(true);
        setTimeout(() => {
          props.setAddProductToCart(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="wrapper-app">
      <div className="container">
        <Header />
        <div className="shop-body">
          <Route exact path="/" render={() => <CardProduct />} />
          <Route
            path="/selectionGoods"
            render={() => (
              <CardProduct addCartGoodsValidation={addCartGoodsValidation} />
            )}
          />
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
    cart: state.cardProduct.cart,
  };
};
export default connect(mapStateToProps, {
  getProductCardDataTC,
  setProductToCartAC,
  setAddProductToCart,
  setAlreadyInCartAC,
})(App);
