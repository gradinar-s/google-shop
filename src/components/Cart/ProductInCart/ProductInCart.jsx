import React from "react";

import { connect } from "react-redux";
import {
  incrementGoodsAC,
  decrementGoodsAC,
  removeFromCartAC,
} from "../../../redux/cardProductReducer";
import { closeCart, openWindowCheckout } from "../../../redux/appReducer";

import SelectSize from "../../SelectSize/SelectSize";
import Notification from "../../Common/Notification/Notification";

import style from "./ProductInCart.module.css";

const ProductInCart = ({
  cart,
  decrementGoodsAC,
  incrementGoodsAC,
  removeFromCartAC,
  sum,
  addCartGoodsValidation,
  closeCart,
  openWindowCheckout,
}) => {
  const incrementGoods = (id) => {
    incrementGoodsAC(id);
  };
  const decrementGoods = (id, counter) => {
    if (counter <= 1) removeFromCartAC(id);
    else decrementGoodsAC(id);
  };

  return (
    <>
      {cart.map((item) => (
        <div key={item.id} className={style.goodsItem}>
          <div className={style.info}>
            <div className={style.smallProductIcons}>
              <img src={item.img} alt="" />
            </div>
            <div className={style.mainInfoProduct}>
              <div className={style.nameGoods}>{item.name}</div>
              {item.selectSize ? (
                <div className={style.selectSize}>
                  Select size: {item.selectSize}
                </div>
              ) : (
                <div className={style.notSelectSize}>
                  <span className={style.btnSelectSize}>Select size</span>
                  <SelectSize
                    className={style.selectionSize}
                    direction="bottom"
                    background="#333"
                    borderColor="#333"
                    iterationEl={item}
                    addCartGoodsValidation={addCartGoodsValidation}
                  />
                </div>
              )}
            </div>
            <div className={style.btnCartManagement}>
              <div
                className={`${style.btnBuyWrapper} ${
                  item.selectSize ? "" : style.btnDisabled
                }`}
              >
                <Notification
                  direction="bottom"
                  className={style.notifySelectSize}
                >
                  <span>Please choose size first</span>
                </Notification>
                <button
                  disabled={item.selectSize ? false : true}
                  onClick={() => {
                    closeCart();
                    openWindowCheckout();
                  }}
                  className={"buttonPrimary"}
                >
                  Buy
                </button>
              </div>
              <div className={style.btnDelWrapper}>
                <button
                  onClick={() => removeFromCartAC(item.id)}
                  className={`buttonPrimary ${style.btnDelGoodsTheCart}`}
                ></button>
              </div>
            </div>
          </div>
          <div className={style.quantityGoods}>
            <div className={style.quantityTitle}>
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
        </div>
      ))}
      {!!cart.length && (
        <div className={style.totalCost}>
          Total: <span>{sum} UAH</span>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cardProduct.cart,
    sum: state.cardProduct.sum,
    totalCost: state.cardProduct.totalCost,
    selectSize: state.cardProduct.selectSize,
  };
};
export default connect(mapStateToProps, {
  incrementGoodsAC,
  decrementGoodsAC,
  removeFromCartAC,
  closeCart,
  openWindowCheckout,
})(ProductInCart);
