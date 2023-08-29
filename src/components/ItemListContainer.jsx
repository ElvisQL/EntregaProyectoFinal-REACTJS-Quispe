import ItemList from "../components/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from "../products";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    const filteredList = categoria
      ? productos.filter((p) => p.categoria === categoria)
      : productos;
    setProducts(filteredList);
  }, [categoria]);

  return (
    <div className="ItemListContainer">
      <h1>{categoria ? categoria.toUpperCase() : "CATALOGO"}</h1>
      <ItemList productos={products}></ItemList>
    </div>
  );
};

export default ItemListContainer;
