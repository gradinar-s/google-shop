import "./App.css";

import React, { useEffect } from "react";
import { connect } from "react-redux";

import Header from "./components/Header/Header";
import { getProductCardDataTC } from "./redux/cardProductReducer";
import CardProduct from "./components/CardProduct/CardProduct";
import ProductPage from "./components/ProductPage/ProductPage";
import { Route } from "react-router-dom";

const App = (props) => {
  useEffect(() => {
    props.getProductCardDataTC();
  }, []);
  return (
    <div className="wrapper-app">
      <div className="container">
        <Header />
        <div className="shop-body">
          <Route exact path="/" render={() => <CardProduct />} />
          <Route path="/selectionGoods" render={() => <CardProduct />} />
          <Route path="/goods/:id" render={() => <ProductPage />} />
        </div>
      </div>
    </div>
  );
};

export default connect(null, { getProductCardDataTC })(App);
