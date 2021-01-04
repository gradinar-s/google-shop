import style from "./ProductInCart.module.css";
// import styleCheckoutBtn from "../Сheckout/Сheckout.module.css";

import React, { useEffect } from "react";

import { connect } from "react-redux";
import {
  incrementGoodsAC,
  decrementGoodsAC,
  removeFromCartAC,
  setTotalCostAC,
} from "../../../../redux/cardProductReducer";

import Checkout from "../Сheckout/Сheckout";

const ProductInCart = (props) => {
  useEffect(() => {
    props.setTotalCostAC();
  }, []);

  const incrementGoods = (id) => {
    props.incrementGoodsAC(id);
    // props.setTotalCostAC(id);
  };
  const decrementGoods = (id, counter) => {
    if (counter <= 1) props.removeFromCartAC(id);
    else props.decrementGoodsAC(id);
  };
  return (
    <>
      {props.cart.map((item) => (
        <div key={item.id} className={style.goodsItem}>
          <div className={style.info}>
            <img className={style.smallProductIcons} src={item.img} alt="" />
            <span className={style.nameGoods}>{item.name}</span>
            <span className={style.btnCartManagement}>
              <Checkout />
              <button
                onClick={() => props.removeFromCartAC(item.id)}
                className={`buttonPrimary ${style.btnDelGoodsTheCart}`}
              ></button>
            </span>
          </div>
          <div className={style.quantityGoods}>
            <div className={style.quantityTitlte}>
              <span>Quantity:</span>
              {`${item.counter}pc | ${item.cost * item.counter} UAH`}
              <div className={style.buttons}>
                <button
                  onClick={() => incrementGoods(item.id)}
                  className={`buttonPrimary ${style.plusGoods}`}
                >
                  +
                </button>
                <button
                  onClick={() => decrementGoods(item.id, item.counter)}
                  className={`buttonPrimary ${style.minusGoods}`}
                >
                  -
                </button>
              </div>
            </div>
          </div>
          {}
        </div>
      ))}
      {!!props.cart.length && (
        <div className={style.totalCost}>
          Total: <span>{props.sum} UAH</span>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cardProduct.cart,
    sum: state.cardProduct.sum,
    // totalCost: state.cardProduct.totalCost,
  };
};
export default connect(mapStateToProps, {
  incrementGoodsAC,
  decrementGoodsAC,
  removeFromCartAC,
  setTotalCostAC,
})(ProductInCart);
