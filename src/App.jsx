import Header from "./components/Header";
import Cart from "./views/Cart";
import Footer from "./components/Footer";
import Checkout from "./views/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { CartContextProvider } from "./context/CartContext";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/catalogo/:categoriaId"element={<ItemListContainer />}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/carrito" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartContextProvider>
    </>
  );
}

export default App;
