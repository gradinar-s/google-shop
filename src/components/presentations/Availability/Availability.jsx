import React from "react";

import style from "./Availability.module.sass";

const Availability = ({ quantity }) => {
  return (
    <div className={style.availability}>
      {quantity >= 10 && (
        <span className={`${style.areAvailable}`}>Are available</span>
      )}
      {quantity < 10 && quantity !== 0 && (
        <span className={`${style.last}`}>The item is running out</span>
      )}
      {quantity === 0 && (
        <span className={`${style.notAvailable}`}>Not available</span>
      )}
    </div>
  );
};

export default Availability;
