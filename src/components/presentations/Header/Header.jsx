import React from "react";
import { NavLink } from "react-router-dom";

import Cart from "../Cart/Cart";
import Icon from "../Icon/Icon";
import Notification from "../Notification/Notification";

import cartIcon from "../../../img/icon/cart.svg";
import userIcon from "../../../img/icon/user.svg";

import style from "./Header.module.css";

const Header = ({
  cart,
  closePopup,
  cartElement,
  openCart,
  isAlreadyInCart,
  addCartGoodsValidation,
}) => {
  return (
    <header className={style.header}>
      <div className={style.rowNav}>
        <div className={style.rowTitle}>
          <NavLink to="/selectionGoods" className={style.title}>
            Google Shop
          </NavLink>
        </div>
        <div className={style.cartWrapper}>
          {isAlreadyInCart && (
            <Notification
              className={style.alreadyNotification}
              direction="right"
            >
              <span className={style.message}>
                This goods is already in your cart
              </span>
            </Notification>
          )}
          <div ref={cartElement} className={style.titleCart} onClick={openCart}>
            <img src={cartIcon} alt="" />
            <span className={style.quan}>{cart.length}</span>
          </div>
          <Icon className={style.userAuthIcon} src={userIcon} />
        </div>
        <Cart
          cart={cart}
          closePopup={closePopup}
          addCartGoodsValidation={addCartGoodsValidation}
        />
      </div>
    </header>
  );
};

export default Header;
