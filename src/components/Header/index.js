import React from "react";
import mascotas from "../../images/mascotas2.png";
export const Header = () => {
  return (
    <header>
      <a href="#">
        <div className="logo">
          <img src={mascotas} alt="logo" width="100" />
        </div>
      </a>
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item_total">0</span>
      </div>
    </header>
  );
};
