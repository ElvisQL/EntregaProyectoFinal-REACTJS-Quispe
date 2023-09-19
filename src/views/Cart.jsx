import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { BsTrashFill } from "react-icons/bs";

export default function Cart() {
  const { cart, sacarProducto, vaciarCarrito, calculoPrecioTotalCarrito } =
    useContext(CartContext);

  return cart.length === 0 ? (
    <main>
      <div className="without-products">
        <img src="images/carritovacio.png" alt="" />
        <h1>Carrito Vacio</h1>
        <span>Agregue productos al carrito</span>
        <Link className="link-boton" to={"/"}>
          Ir al Catalogo
        </Link>
      </div>
    </main>
  ) : (
    <main>
      <div id="hay-productos">
        <h1>TU CARRITO:</h1>
        <div className="titulos-resumen">
          <span className="titulo-producto">Producto:</span>
          <span className="titulo-precio">Precio Unitario:</span>
          <span className="titulo-cantidad">Cantidad:</span>
          <span className="titulo-preciototal">Precio Total:</span>
        </div>
        <div id="productos-en-espera">
          <ul id="lista-carrito">
            {cart.map((p) => (
              <li key={p.id}>
                <div className="card-producto-en-espera">
                  <div className="titulo-producto">
                    <BsTrashFill
                      className="bi-trash"
                      onClick={() => sacarProducto(p.id)}
                    ></BsTrashFill>
                    <div className="container-img-cart">
                      <img src={p.rutaimagen} alt="imagen-producto" />
                    </div>
                    <span>{p.nombre}</span>
                  </div>
                  <div className="titulo-precio">
                    <span className="titulo-precio">${p.precio}</span>
                  </div>
                  <div className="titulo-cantidad">
                    <span className="titulo-cantidad">{p.cantidad}</span>
                  </div>
                  <div className="titulo-preciototal">
                    <span className="titulo-spreciototal">
                      ${p.cantidad * p.precio}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="total-box">
          <span id="total-compra">
            Precio Total: ${calculoPrecioTotalCarrito()}
          </span>
        </div>
        <div className="botones-finales">
          <button id="borrartodo" onClick={() => vaciarCarrito()}>
            Vaciar Carrito
          </button>
          <button id="finalizar">
            <Link to="/checkout">Terminar compra</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
