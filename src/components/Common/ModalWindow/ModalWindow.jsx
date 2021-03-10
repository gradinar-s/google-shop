import React, { useEffect, useRef } from "react";
import Portal from "../Portal/Portal";

import "./ModalWindow.css";

const ModalWindow = ({
  className,
  title,
  children,
  isClosed,
  isOpen,
  width,
}) => {
  const closeModalWindow = (e) => {
    if (e.target.dataset.modalwindow) {
      isClosed();
    }
  };

  return (
    <>
      {isOpen && (
        <Portal>
          <div className={`modalWindow ${className}`}>
            <div
              className="modalOverlay"
              onClick={closeModalWindow}
              data-modalwindow
            >
              <div className="modalBody" style={{ maxWidth: width }}>
                <div className="modalHeader">
                  <h2 className="modalTitle">{title}</h2>
                  <span className="modalClosed" onClick={isClosed}>
                    &#10006;
                  </span>
                </div>
                <div className="modalContent">{children}</div>
                <div className="modalFooter"></div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default ModalWindow;
