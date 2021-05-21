import React from "react";
import { connect } from "react-redux";

import { getCoordinateElement } from "../../../helpers/functions/common";
import { setCoordinateElement } from "../../../redux/appReducer";
import { setSelectSize } from "../../../redux/cardProductReducer";

import Notification from "../Notification/Notification";

import style from "./SelectSize.module.css";

const SelectSize = ({
  className,
  direction,
  background,
  borderColor,
  iterationEl,
  setSelectSize,
  setCoordinateElement,
  ...attrs
}) => {
  return (
    <Notification
      className={className}
      direction={direction}
      background={background}
      borderColor={borderColor}
    >
      {iterationEl.availableSizes.map((size, index) => (
        <span
          key={index}
          className={style.size}
          onClick={(e) => {
            setCoordinateElement(getCoordinateElement(e));
            attrs.addCartGoodsValidation(iterationEl);
            setSelectSize(size);
          }}
        >
          {size}
        </span>
      ))}
    </Notification>
  );
};

export default connect(null, { setSelectSize, setCoordinateElement })(
  SelectSize
);
