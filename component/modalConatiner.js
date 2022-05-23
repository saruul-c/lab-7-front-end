import React from "react";

export default function ModalConatiner({ onClose, children, open }) {
  return (
    <div className={`modal ${open ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-content" style={{ background: "white", padding: "50px", borderRadius: "20px" }}>
        {children}
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
    </div>
  );
}
