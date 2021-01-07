import style from "./ProductPage.module.scss";

import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import { getProductCardDataTC } from "../../redux/cardProductReducer";
import Loading from "../Loading/Loading";

const ProductPage = (props) => {
  const id = props.match.params.id;
  const goods = props.products[id];
  return (
    <>
      {!props.products.length ? (
        <Loading />
      ) : (
        <div className={style.productPage}>
          <div className={style.infoSection}>
            <div className={style.photo}>
              <img src={goods.img} alt="" />
            </div>
          </div>
          <div className={style.orderSelection}>
            <div className={style.title}>{goods.name}</div>
            <div className={style.availability}>
              {goods.quantity >= 10 && (
                <span className={`${style.areAvailable}`}>Are available</span>
              )}
              {goods.quantity < 10 && goods.quantity !== 0 && (
                <span className={`${style.last}`}>The item is running out</span>
              )}
              {goods.quantity === 0 && (
                <span className={`${style.notAvailable}`}>Not available</span>
              )}
            </div>
            <div className={style.cost}>{goods.cost} UAH</div>
            <div className={style.descriptionGoods}>
              <hr />
              <p>{goods.description}</p>
            </div>
            <div className={style.sizeSelection}>
              <hr />
              {goods.size.map((item) => (
                <div key={item} onClick={() => console.log(item)} className={style.sizeGoods}>
                  {item}
                </div>
              ))}
              <hr />
            </div>
            <div className={style.buttons}>
              <button className={`buttonPrimary`}>Buy</button>
              <button className={`buttonPrimary ${style.addToCart}`}>Add to cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.cardProduct.products,
  };
};
export default compose(connect(mapStateToProps, { getProductCardDataTC }), withRouter)(ProductPage);
