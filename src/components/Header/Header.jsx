import React, { useRef } from "react";
import style from "./Header.module.css";
import Cart from "../Cart/Cart";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Notification from "../Common/Notification/Notification";
import cart from "../../img/icon/cart.svg";
import {
  openCart,
  closeCart,
  setWindowClosingProcess,
  setCoordinatesIconCart,
} from "../../redux/appReducer";

const Header = (props) => {
  const closePopup = () => {
    const ANIMATION_TIME = 210;
    props.setWindowClosingProcess(true);
    setTimeout(() => {
      props.closeCart();
      props.setWindowClosingProcess(false);
    }, ANIMATION_TIME);
  };

  // =======================================================

  const el = useRef();

  window.addEventListener("load", () => {
    const coordinations = el.current.getBoundingClientRect();
    const top = Math.round(coordinations.top);
    const left = Math.round(coordinations.left);

    props.setCoordinatesIconCart({ top: top, left: left });
  });

  // =======================================================

  return (
    <header className={style.header}>
      <div className={style.rowTitle}>
        <NavLink to="/selectionGoods" className={style.title}>
          Google Shop
        </NavLink>
      </div>
      <div className={style.nav}>
        <div className={style.rowNav}>
          <div className={style.titleCart} onClick={props.openCart}>
            <img src={cart} alt="" />
            <span ref={el} className={style.quan}>
              {props.cart.length}
            </span>
          </div>
          <Cart cart={props.cart} closePopup={closePopup} />
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
    cart: state.cardProduct.cart,
  };
};
export default connect(mapStateToProps, {
  openCart,
  closeCart,
  setWindowClosingProcess,
  setCoordinatesIconCart,
})(Header);
