import Card from "./Card";

const ItemList = ({ productos }) => {
  return (
    <div className="ItemList">
      {productos.map((p) => {
        return <Card key={p.id} product={p} />;
      })}
    </div>
  );
};

export default ItemList;
