import style from "./CardProduct.module.css";

import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { compose } from "redux";

import {
  setProductToCartAC,
  setAlreadyInCartAC,
} from "../../redux/cardProductReducer";
import Checkout from "../Сheckout/Сheckout";
import Notification from "../Common/Notification/Notification";

const CardProduct = (props) => {
  const addToCart = (card) => {
    if (!props.cart.length) {
      props.setProductToCartAC(card);
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
      }
    }
  };
  return (
    <div className={style.cardProduct}>
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
            <Checkout />
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
                onClick={() => addToCart(item)}
                className={`buttonPrimary ${style.addCart}`}
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
  };
};

export default compose(
  connect(mapStateToProps, { setProductToCartAC, setAlreadyInCartAC })
)(CardProduct);
