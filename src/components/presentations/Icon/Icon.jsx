import React from "react";
import style from "../Icon/Icon.module.css";

const Icon = ({ className, src, onClick }) => {
  return (
    <div onClick={onClick} className={`${className} ${style.icon}`}>
      <img src={src} alt="" />
    </div>
  );
};

export default Icon;
