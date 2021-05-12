import React from "react";

import style from "./PageNotExist.module.css";

import oops from "../../img/icon/oops.svg";

const PageNotExist = ({ location }) => {
  return (
    <div className={style.pageNotExist}>
      <div className={style.image}>
        <img src={oops} alt="" />
      </div>
      <h1 className={style.description}>
        The page with the address <code>{location}</code> does not exist
      </h1>
    </div>
  );
};

export default PageNotExist;
