import ItemList from "../components/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { Cargando } from "./Cargando";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const coleccion = collection(db, "productos");
    const filtrado = categoriaId
      ? query(coleccion, where("categoria", "==", categoriaId))
      : coleccion;
    getDocs(filtrado)
      .then((response) => {
        if (response.size > 0) {
          setProducts(response.docs.map((p) => ({ id: p.id, ...p.data() })));
          setIsLoading(false);
        } else {
          console.error("No se pudo encontrar los productos en la coleccion!");
        }
      })
      .catch((e) => {
        console.error("Error al obtener productos:", e);
      });
  }, [categoriaId]);

  return (
    <div className="ItemListContainer">
      {isLoading ? (
        <Cargando></Cargando>
      ) : (
        <>
          <h1>{categoriaId ? categoriaId.toUpperCase() : "CATALOGO"}</h1>
          <ItemList productos={products}></ItemList>
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
