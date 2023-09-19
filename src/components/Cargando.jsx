import loading from "../assets/Spinner-1s-200px.gif";

export const Cargando = () => {
  return (
    <div className="container-loading">
      <img src={loading} alt="Cargando..." />
      <span>Cargando</span>
    </div>
  );
};
