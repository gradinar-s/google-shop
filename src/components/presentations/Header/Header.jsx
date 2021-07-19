import React from "react";
import { NavLink } from "react-router-dom";

import AuthDropdownMenuContainer from "../../containers/AuthDropdownMenuContainer/AuthDropdownMenuContainer";
import Notification from "../Notification/Notification";
import Cart from "../Cart/Cart";
import Icon from "../Icon/Icon";

import cartIcon from "../../../img/icon/cart.svg";
import authIcon from "../../../img/icon/user.svg";

import style from "./Header.module.sass";

const Header = ({
  cart,
  openCart,
  closePopup,
  cartElement,
  isAlreadyInCart,
  addCartGoodsValidation,
}) => {
  return (
    <header className={style.header}>
      <div className={style.header__row}>
        <NavLink to="/selectionGoods" className={style.header__title}>
          Google Shop
        </NavLink>
        <div className={style.headerNav}>
          <div className={style.headerNav__element}>
            {isAlreadyInCart && (
              <Notification
                className={style.alreadyNotification}
                direction="right"
              >
                <span className={style.alreadyNotification__message}>
                  This goods is already in your cart
                </span>
              </Notification>
            )}
            <div
              ref={cartElement}
              className={style.headerNav__cartIcon}
              onClick={openCart}
            >
              <img src={cartIcon} alt="" />
              <span className={style.headerNav__quan}>{cart.length}</span>
            </div>
            <Cart
              cart={cart}
              closePopup={closePopup}
              addCartGoodsValidation={addCartGoodsValidation}
            />
          </div>
          <div className={style.headerNav__element}>
            <Icon src={authIcon} className={style.headerNav__authIcon} />
            <AuthDropdownMenuContainer />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
