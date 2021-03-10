import React from "react";
import style from "./Header.module.css";
import Cart from "../Cart/Cart";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Notification from "../Common/Notification/Notification";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.rowTitle}>
        <NavLink to="/selectionGoods" className={style.title}>
          Google Shop
        </NavLink>
      </div>
      <div className={style.nav}>
        <div className={style.rowNav}>
          <Cart />
          {props.isAlreadyInCart && (
            <Notification
              className={style.alreadyNotification}
              direction="left"
            >
              <span className={style.message}>
                This goods is already in your cart
              </span>
            </Notification>
          )}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isAlreadyInCart: state.cardProduct.isAlreadyInCart,
  };
};
export default connect(mapStateToProps, null)(Header);
