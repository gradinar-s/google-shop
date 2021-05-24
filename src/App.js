import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import {
  setProductToCartAC,
  setAddProductToCart,
  setAlreadyInCartAC,
} from "./store/cardProductReducer";
import { initializeApp } from "./store/appReducer";

import HeaderContainer from "./components/containers/HeaderContainer/HeaderContainer";
import CardProductContainer from "./components/containers/CardProductContainer/CardProductContainer";

import Loading from "./components/presentations/Loading/Loading";
import ProductPage from "./pages/ProductPage/ProductPage";
import NotExistPage from "./pages/NotExistPage/NotExistPage";

import "./App.css";
import "./reset.sass";

const App = (props) => {
  // Get data on page load
  useEffect(() => props.initializeApp(), []);

  // Validation of adding items to cart
  const addCartGoodsValidation = (card) => {
    const isAlreadyCart = props.cart.some((item) => {
      return card.id === item.id;
    });

    if (isAlreadyCart) {
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
  };

  if (!props.initializedApp) {
    return <Loading />;
  }
  return (
    <div className="wrapper-app">
      <HeaderContainer addCartGoodsValidation={addCartGoodsValidation} />
      <div className="container">
        <div className="shop-body">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <CardProductContainer
                  addCartGoodsValidation={addCartGoodsValidation}
                />
              )}
            />
            <Route
              path="/selectionGoods"
              render={() => (
                <CardProductContainer
                  addCartGoodsValidation={addCartGoodsValidation}
                />
              )}
            />
            <Route
              path="/goods/:id"
              render={() => (
                <ProductPage addCartGoodsValidation={addCartGoodsValidation} />
              )}
            />
            <Route
              render={() => <NotExistPage location={props.location.pathname} />}
            />
          </Switch>
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
export default compose(
  connect(mapStateToProps, {
    setProductToCartAC,
    setAddProductToCart,
    setAlreadyInCartAC,
    initializeApp,
  }),
  withRouter
)(App);
