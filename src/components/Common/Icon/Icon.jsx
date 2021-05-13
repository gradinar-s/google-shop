import React from "react";
import style from "../Icon/Icon.module.css";

const Icon = ({ className, src }) => {
  return (
    <div className={`${className} ${style.icon}`}>
      <img src={src} alt="" />
    </div>
  );
};

export default Icon;
