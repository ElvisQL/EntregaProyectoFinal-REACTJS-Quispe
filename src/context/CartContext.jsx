import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const verificarProducto = (productoId) => {
    return cart.some((p) => p.id === productoId);
  };

  const añadirAlCart = (product, cantidad) => {
    if (!verificarProducto(product.id)) {
      setCart([...cart, { ...product, cantidad: cantidad }]);
    } else {
      const updatedCart = cart.map((p) => {
        if (p.id === product.id) {
          return { ...p, cantidad: p.cantidad + cantidad };
        }
        return p;
      });
      setCart(updatedCart);
    }
  };

  const sacarProducto = (productoId) => {
    const cartFiltrado = cart.filter((p) => p.id !== productoId);
    setCart([...cartFiltrado]);
  };
  const vaciarCarrito = () => {
    setCart([]);
  };
  const calculoTotalProductos = () => {
    return cart.reduce((acum, p) => (acum += p.cantidad), 0);
  };
  const calculoPrecioTotalCarrito = () => {
    return cart.reduce((acum, p) => (acum += p.cantidad * p.precio), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        verificarProducto,
        vaciarCarrito,
        sacarProducto,
        añadirAlCart,
        calculoTotalProductos,
        calculoPrecioTotalCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
