import { Link } from "react-router-dom"



export default function Cart() {
    return(
        <main>
            <div className="without-products">
            <img src="images/carritovacio.png" alt="" />
            <h1>Carrito Vacio</h1>
            <span>Agregue productos al carrito</span>
            <Link className="link-boton" to={"/"}>Ir al Catalogo</Link>
            </div>
        </main>
        
    )
}