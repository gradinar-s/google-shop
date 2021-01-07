import React from "react";
import style from "./Header.module.css";
import Cart from "../ModalWindows/Cart/Cart";
import { NavLink } from "react-router-dom";

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
          <hr />
          <Cart />
          <hr />
        </div>
      </div>
    </header>
  );
};

export default Header;
