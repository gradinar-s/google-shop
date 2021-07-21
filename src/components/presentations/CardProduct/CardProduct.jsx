import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getCoordinateElement } from "../../../helpers/functions/common";

import CheckoutContainer from "../../containers/CheckoutContainer/CheckoutContainer";
import Portal from "../Portal/Portal";
import SelectSize from "../SelectSize/SelectSize";
import Cost from "../Cost/Cost";

import style from "./CardProduct.module.css";
import AddNewProduct from "../AddNewProduct/AddNewProduct";

const CardProduct = ({
  products,
  isAddProduct,
  EffectAddingItemCart,
  openWindowCheckout,
  addCartGoodsValidation,
  setCoordinateElement,
}) => {
  const isAuthManager = useSelector((state) => state.auth.isAuthManager);

  return (
    <div className={style.cardProduct}>
      {isAuthManager && <AddNewProduct />}
      <CheckoutContainer />
      {isAddProduct && (
        <Portal>
          <EffectAddingItemCart />
        </Portal>
      )}
      {products.map((item) => (
        <div key={item.id} className={style.item}>
          <NavLink to={`/goods/${item.id}`} className={style.photoProduct}>
            <img src={item.img} alt="" />
          </NavLink>
          <NavLink to={`/goods/${item.id}`} className={style.title}>
            {item.name}
          </NavLink>
          <Cost cost={item.cost} className={style.price} fontSize="18px" />
          <div className={style.buttons}>
            <button onClick={openWindowCheckout} className="buttonPrimary">
              Buy
            </button>
            <div className={style.addCartWrapper}>
              <SelectSize
                className={style.selectionSize}
                direction="bottom"
                background="#333"
                borderColor="#333"
                iterationEl={item}
                addCartGoodsValidation={addCartGoodsValidation}
              />
              <button
                className={`buttonPrimary ${style.addCart}`}
                onClick={(e) => {
                  addCartGoodsValidation(item);
                  setCoordinateElement(getCoordinateElement(e));
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
