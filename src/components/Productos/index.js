import React from "react";
import IMG from "../../images/comida.png";
export const ProductosLista = () => {
  return (
    <>
      <h1 className="tittle">Productos</h1>
      <div className="productos">
        <div className="producto">
          <a href="#">
            <div className="producto_img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto_footer">
            <h1>Tittle</h1>
            <p> categoria </p>
            <p className="price">$1700</p>
          </div>
          <div className="button">
            <button className="btn">añadir al carro</button>
            <div>
              <a href="#" className="btn">
                vista
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
