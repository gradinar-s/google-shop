import React from "react";

import "./Notification.css";

const Notification = ({ children, direction, className, ...attr }) => {
  // default styles are defined in 'Notification.css'
  return (
    <>
      <div className={`notification ${className}`}>
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
