import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.rutaimagen} alt="rutaimagen" />
      <div className="card-body">
        <h4>{product.nombre}</h4>
        <span>{product.precio}</span>
        <div className="container-boton-card">
          <button className="link-boton">Agregar Al Carrito</button>
          <Link className="link-boton" to={`/item/${product.id}`}>
            <span>Ver Producto</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
