import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ItemDetail from "./ItemDetail";
import productos from "../products";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProducts] = useState({});

  useEffect(() => {
    let nuevoProducto = productos.find((p) => p.id === parseInt(id));
    setProducts(nuevoProducto);
  }, [id]);

  return (
    <div>
      <ItemDetail producto={product}></ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
