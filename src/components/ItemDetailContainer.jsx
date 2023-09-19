import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { Cargando } from "./Cargando";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProducts] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const getProducto = async () => {
      const q = doc(db, "productos", id);
      const r = await getDoc(q);
      const newProduct = { id: r.id, ...r.data() };
      setIsLoading(false);
      setProducts(newProduct);
    };
    getProducto();
  }, [id]);

  return (
    <div>
      {isLoading ? <Cargando /> : <ItemDetail producto={product}></ItemDetail>}
    </div>
  );
};

export default ItemDetailContainer;
