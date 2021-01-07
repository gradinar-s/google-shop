import style from "./CardProduct.module.css";

import React from "react";
import { connect } from "react-redux";

import { setProductToCartAC } from "../../redux/cardProductReducer";
import Checkout from "../ModalWindows/Cart/Сheckout/Сheckout";
import { NavLink } from "react-router-dom";
import { compose } from "redux";

const CardProduct = (props) => {
  const addToCart = (card) => {
    if (!props.cart.length) {
      props.setProductToCartAC(card);
    } else {
      const result = props.cart.some((item) => {
        return card.id === item.id;
      });
      if (result) console.log("уже есть..");
      else props.setProductToCartAC(card);
    }
  };
  return (
    <div className={style.cardProduct}>
      {props.products.map((item) => (
        <div key={item.id} className={style.item}>
          <NavLink to={`/goods/${item.id}`} className={style.photoProduct}>
            <img src={item.img} alt="" />
          </NavLink>
          <div className={style.title}>{item.name}</div>
          <div className={style.price}>{item.cost} UAH</div>
          <div className={style.buttons}>
            <Checkout />
            <button onClick={() => addToCart(item)} className={`buttonPrimary ${style.addCard}`} />
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

export default compose(connect(mapStateToProps, { setProductToCartAC }))(CardProduct);
