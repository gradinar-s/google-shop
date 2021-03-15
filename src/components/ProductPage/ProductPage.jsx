import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import Portal from "../Common/Portal/Portal";
import Checkout from "../Сheckout/Сheckout";
import Loading from "../Common/Loading/Loading";

import {
  openWindowCheckout,
  setCoordinateElement,
} from "../../redux/appReducer";
import {
  getProductCardDataTC,
  setProductToCartAC,
  setAlreadyInCartAC,
  setAddProductToCart,
} from "../../redux/cardProductReducer";
import {
  createAnimationElement,
  getCoordinateElement,
  setCoordinatesKeyframes,
} from "../../helpers/functions/common";

import style from "./ProductPage.module.scss";

const ProductPage = (props) => {
  const id = props.match.params.id;
  const goods = props.products[id];

  // Element creation and animation add to cart
  const animationAddingItemCart = setCoordinatesKeyframes(
    props.coordinatesIconCart.top,
    props.coordinatesIconCart.left
  );
  const EffectAddingItemCart = createAnimationElement(
    props.coordinateElement.top,
    props.coordinateElement.left,
    animationAddingItemCart
  );

  if (!props.products.length) {
    return <Loading />;
  }
  return (
    <div className={style.productPage}>
      {props.isAddProduct && (
        <Portal>
          <EffectAddingItemCart />
        </Portal>
      )}
      <div className={style.infoSection}>
        <div className={style.photo}>
          <img src={goods.img} alt="" />
        </div>
      </div>
      <div className={style.orderSelection}>
        <div className={style.title}>{goods.name}</div>
        <div className={style.availability}>
          {goods.quantity >= 10 && (
            <span className={`${style.areAvailable}`}>Are available</span>
          )}
          {goods.quantity < 10 && goods.quantity !== 0 && (
            <span className={`${style.last}`}>The item is running out</span>
          )}
          {goods.quantity === 0 && (
            <span className={`${style.notAvailable}`}>Not available</span>
          )}
        </div>
        <div className={style.cost}>{goods.cost} UAH</div>
        <div className={style.descriptionGoods}>
          <hr />
          <p>{goods.description}</p>
        </div>
        <div className={style.sizeSelection}>
          <hr />
          {goods.availableSizes.map((size) => (
            <div
              key={size}
              onClick={() => console.log(size)}
              className={style.sizeGoods}
            >
              {size}
            </div>
          ))}
          <hr />
        </div>
        <div className={style.buttons}>
          <Checkout />
          <button
            className={`buttonPrimary`}
            onClick={props.openWindowCheckout}
          >
            Buy
          </button>

          <button
            className={`buttonPrimary ${style.addToCart}`}
            onClick={(e) => {
              props.addCartGoodsValidation(goods);
              props.setCoordinateElement(getCoordinateElement(e));
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.cardProduct.products,
    cart: state.cardProduct.cart,
    isAddProduct: state.cardProduct.isAddProduct,
    coordinatesIconCart: state.app.coordinatesIconCart,
    coordinateElement: state.app.coordinateElement,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProductCardDataTC,
    setProductToCartAC,
    setAlreadyInCartAC,
    setAddProductToCart,
    //
    openWindowCheckout,
    setCoordinateElement,
  }),
  withRouter
)(ProductPage);
