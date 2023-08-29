import Count from "../components/Count";

const ItemDetail = ({ producto }) => {
  return (
    <main>
      <div className="container-detail">
        <div className="container-imagen">
          <img src={producto.rutaimagen} alt="" />
        </div>
        <div className="description-product">
          <h1>{producto.nombre}</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            suscipit nisi accusamus nobis dolor, provident sequi voluptas quis
            cupiditate. Ducimus, aut. Magnam temporibus dolorem rerum explicabo,
            voluptates adipisci aliquam consequatur!
          </p>
          <span>{`Precio: ${producto.precio}`}</span>
          <div className="description-bottom">
            <Count></Count>
            <button className="link-boton">Agregar Al carrito</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ItemDetail;
