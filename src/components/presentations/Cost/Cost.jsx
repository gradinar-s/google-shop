import React from "react";

import style from "./Cost.module.sass";

const Cost = ({ cost, fontSize, className }) => {
  return (
    <div className={`${className} ${style.cost}`} style={{ fontSize }}>
      {cost} UAH
    </div>
  );
};

export default Cost;
