import React from "react";

import style from "./NotExistPage.module.css";

import oops from "../../img/icon/oops.svg";

const NotExistPage = ({ location }) => {
  return (
    <div className={style.notExistPage}>
      <div className={style.image}>
        <img src={oops} alt="" />
      </div>
      <h1 className={style.description}>
        The page with the address <code>{location}</code> does not exist
      </h1>
    </div>
  );
};

export default NotExistPage;
