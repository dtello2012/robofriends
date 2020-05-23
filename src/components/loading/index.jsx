import React from "react";
import "./index.css";

export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        top: "50%",

        zIndex: 2,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
