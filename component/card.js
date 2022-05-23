import React from "react";

export default function Card({ title = "", count = 0, onClick = () => {} }) {
  return (
    <div
      // className="container"
      style={{ padding: "20px", borderRadius: "10px", backgroundColor: "white", boxShadow: "0 0 0 5px rgba(0,0,0,0.3)", cursor: "pointer" }}
      onClick={onClick}>
      <h1 className="is-size-4">{title}</h1>
      <h2 className="is-size-6">Асуултууд: {count}</h2>
    </div>
  );
}
