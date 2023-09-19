import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { BsPersonCircle, BsCart } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import brand from "../assets/logo.png";
import "../sass/components/_header.scss";

const Header = () => {
  const { calculoTotalProductos } = useContext(CartContext);

  return (
    <header>
      <div className="h_sup">
        <NavLink to="/">
          <img src={brand} alt="logo" />
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink
                to={"/catalogo/celulares"}
                className={({ isActive }) =>
                  isActive ? "isactivelink" : "isnotactivelink"
                }
              >
                Celulares
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/catalogo/televisores"}
                className={({ isActive }) =>
                  isActive ? "isactivelink" : "isnotactivelink"
                }
              >
                Televisores
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/catalogo/laptops"}
                className={({ isActive }) =>
                  isActive ? "isactivelink" : "isnotactivelink"
                }
              >
                Laptops
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/catalogo/audio"}
                className={({ isActive }) =>
                  isActive ? "isactivelink" : "isnotactivelink"
                }
              >
                Audio
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="iconos_header">
          <Link className="icon-link">
            <BsPersonCircle className="icon" />
          </Link>
          <Link to={"/carrito"} className="icon-link">
            <BsCart className="icon" />
            <span className="total-carrito">{calculoTotalProductos()}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
