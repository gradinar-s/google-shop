import style from "./Loading.module.scss";
import loading from "../../img/loading.svg";
import React from "react";

const Loading = (props) => {
  return (
    <div className={style.loading}>
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
