import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "sweetalert2/dist/sweetalert2.css";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [errores, setErrores] = useState({
    errorNombre: "",
    errorEmail: "",
    errorTelefono: "",
  });

  const { cart, calculoPrecioTotalCarrito, vaciarCarrito } =
    useContext(CartContext);

  const makeOrder = () => {
    setErrores({
      errorNombre: "",
      errorEmail: "",
      errorTelefono: "",
    });

    let hayErrores = false;

    if (nombre.trim() === "") {
      setErrores((anterior) => ({
        ...anterior,
        errorNombre: "Por favor Ingrese un nombre",
      }));
      hayErrores = true;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrores((anterior) => ({
        ...anterior,
        errorEmail: "Por favor Ingrese un Email valido",
      }));
      hayErrores = true;
    }

    if (!/^\d+$/.test(telefono)) {
      setErrores((anterior) => ({
        ...anterior,
        errorTelefono: "Por favor Ingrese un numero valido",
      }));
      hayErrores = true;
    }

    if (!hayErrores) {
      const datosComprador = { name: nombre, phone: telefono, email: email };
      const itemsComprador = cart.map((item) => ({
        id: item.id,
        title: item.nombre,
        price: item.precio,
      }));
      const fecha = new Date();
      const date = `${fecha.getFullYear()}-${
        fecha.getMonth() + 1
      }-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`;
      const precioTotal = calculoPrecioTotalCarrito();
      const orden = {
        buyer: datosComprador,
        items: itemsComprador,
        date: date,
        total: precioTotal,
      };

      const db = getFirestore();
      const OrdenesCollection = collection(db, "ordenes");
      addDoc(OrdenesCollection, orden)
        .then((docRef) => {
          const Swal = require("sweetalert2");
          Swal.fire({
            title: "Procesando Compra...",
            text: "Tu compra esta siendo procesada...",
            imageUrl: require("../assets/Spinner-1s-200px.gif"),
            showConfirmButton: false,
            timer: 3000,
          }).then(() => {
            Swal.fire({
              title: "Tu compra ha sido finalizada",
              icon: "success",
              text: "Gracias por su Compra",
              showCancelButton: true,
              confirmButtonText: "Ir al catálogo",
              cancelButtonText: "Cancelar",
            }).then((result) => {
              vaciarCarrito();
              if (result.isConfirmed) {
                window.location.href = "/";
              } else {
                window.location.href = "/carrito";
              }
            });
          });
        })
        .catch((resultado) => {
          console.error(
            "Tu compra no pudo ser completada con exito",
            resultado
          );
        });
    }
  };

  return (
    <main>
      <div className="form-container">
        <h1> COMPLETA TU COMPRA</h1>
        <form>
          <div className="formulario-1">
            <input
              type="text"
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
            />
            {errores.errorNombre && (
              <p className="error-message">{errores.errorNombre}</p>
            )}
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errores.errorEmail && (
              <p className="error-message">{errores.errorEmail}</p>
            )}
            <input
              type="number"
              placeholder="Telefono"
              onChange={(e) => setTelefono(e.target.value)}
            />
            {errores.errorTelefono && (
              <p className="error-message">{errores.errorTelefono}</p>
            )}
          </div>
        </form>
        <button type="submit" onClick={makeOrder}>
          Terminar Compra
        </button>
      </div>
      {cart.length > 0 && (
        <div className="resume-container">
          <h2>Tu resumen</h2>
          <div className="container-resproducts">
            {cart.map((p) => (
              <div className="box-resume-padding">
                <div key={p.id} className="container-card-resume">
                  <img src={p.rutaimagen} alt="imagen-producto" />
                  <div className="container-body-card-resume">
                    <span>{p.nombre}</span>
                    <span>UNIDADES: {p.cantidad}</span>
                    <span>TOTAL:{p.cantidad * p.precio}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <span className="total-final-span">
            TOTAL: ${calculoPrecioTotalCarrito()}
          </span>
        </div>
      )}
    </main>
  );
};

export default Checkout;
