import React from "react";
import style from "./Header.module.css";
import Cart from "../ModalWindows/Cart/Cart";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.rowTitle}>
        <div className={style.title}>Google Shop</div>
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
