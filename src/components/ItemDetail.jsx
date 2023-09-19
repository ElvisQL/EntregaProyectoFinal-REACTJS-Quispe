import Count from "../components/Count";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";

const ItemDetail = ({ producto }) => {
  const { añadirAlCart } = useContext(CartContext);
  const handleAddProduct = (quantity) => {
    añadirAlCart(producto, quantity);
    toast("Producto Agregado");
  };

  return (
    <main>
      <div className="container-detail">
        <div className="container-imagen">
          <img src={producto.rutaimagen} alt="" />
        </div>
        <div className="description-product">
          <h1>{producto.nombre}</h1>
          <p>{producto.descripcion}</p>
          <span>{`Precio: $${producto.precio}`}</span>
          <div className="description-bottom">
            <Count stock={producto.stock} añadir={handleAddProduct}></Count>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </main>
  );
};

export default ItemDetail;
