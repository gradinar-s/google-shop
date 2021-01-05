import style from "./CardProduct.module.css";

import React, { useEffect } from "react";
import { connect } from "react-redux";

import { setProductToCartAC, setTotalCostAC } from "../../redux/cardProductReducer";
import Checkout from "../ModalWindows/Cart/Сheckout/Сheckout";

const CardProduct = (props) => {
  useEffect(() => {
    props.setTotalCostAC();
  }, []);
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
          <div className={style.photoProduct}>
            <img src={item.img} alt="" />
          </div>
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

export default connect(mapStateToProps, { setProductToCartAC, setTotalCostAC })(CardProduct);
