import React from "react";
import { capitalizeFirstLetter } from "../../../helpers/functions/common";

import "./Notification.css"; // default styles are defined in 'Notification.css'

const Notification = ({ children, direction, className, ...attr }) => {
  const dropdownPosition = capitalizeFirstLetter(direction).split("-")[0];
  return (
    <>
      <div
        className={`notification ${className}`}
        style={{
          // Fill distance between element and dropdown so when cursor moves, latter not hide
          [`padding${dropdownPosition}`]: "15px",
        }}
      >
        <div className="notification-wrapper">
          <div
            className="notification-content"
            style={{
              backgroundColor: attr.background,
              borderColor: attr.borderColor,
            }}
          >
            {children}
          </div>
          <span
            className={`arrow ${direction}`}
            style={{
              backgroundColor: attr.background,
              borderColor: attr.borderColor,
            }}
          ></span>
        </div>
      </div>
    </>
  );
};

export default Notification;
