import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { compose } from "redux";

import Portal from "../Common/Portal/Portal";
import Checkout from "../Сheckout/Сheckout";
import Notification from "../Common/Notification/Notification";

import {
  setProductToCartAC,
  setAlreadyInCartAC,
  setAddProductToCart,
} from "../../redux/cardProductReducer";
import {
  openWindowCheckout,
  setCoordinateElement,
} from "../../redux/appReducer";
import {
  createAnimationElement,
  getCoordinateElement,
  setCoordinatesKeyframes,
} from "../../helpers/functions/common";

import style from "./CardProduct.module.css";

const CardProduct = (props) => {
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

  return (
    <div className={style.cardProduct}>
      <Checkout />
      {props.isAddProduct && (
        <Portal>
          <EffectAddingItemCart />
        </Portal>
      )}
      {props.products.map((item) => (
        <div key={item.id} className={style.item}>
          <NavLink to={`/goods/${item.id}`} className={style.photoProduct}>
            <img src={item.img} alt="" />
          </NavLink>
          <NavLink to={`/goods/${item.id}`} className={style.title}>
            {item.name}
          </NavLink>
          <div className={style.price}>{item.cost} UAH</div>
          <div className={style.buttons}>
            <button
              onClick={props.openWindowCheckout}
              className="buttonPrimary"
            >
              Buy
            </button>
            <div className={style.addCartWrapper}>
              <Notification
                className={style.selectionSize}
                direction="bottom"
                background="#333"
                borderColor="#333"
              >
                {item.availableSizes.map((size, index) => (
                  <span
                    key={index}
                    className={style.size}
                    onClick={() => console.log(size)}
                  >
                    {size}
                  </span>
                ))}
              </Notification>
              <button
                className={`buttonPrimary ${style.addCart}`}
                onClick={(e) => {
                  props.addCartGoodsValidation(item);
                  props.setCoordinateElement(getCoordinateElement(e));
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
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
    openWindowCheckout,
    setCoordinateElement,
    //
    setProductToCartAC,
    setAlreadyInCartAC,
    setAddProductToCart,
  })
)(CardProduct);
