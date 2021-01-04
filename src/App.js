import "./App.css";

import React, { useEffect } from "react";
import { connect } from "react-redux";

import Header from "./components/Header/Header";
import { getProductCardDataTC, setProductToCartAC } from "./redux/cardProductReducer";
import CardProduct from "./components/CardProduct/CardProduct";

const App = (props) => {
  useEffect(() => {
    props.getProductCardDataTC();
  }, [props]);

  return (
    <div className="wrapper-app">
      <div className="container">
        <Header />
        <div className="shop-body">
          <div className="shop-body-wrapper">
            <CardProduct />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    // products: state.cardProduct.products,
    // cart: state.cardProduct.cart,
  };
};
export default connect(mapStateToProps, { getProductCardDataTC, setProductToCartAC })(App);
