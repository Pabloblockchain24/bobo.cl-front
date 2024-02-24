import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider} from "./context/ProductsContext"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ItemList from "./pages/ItemListContainer/ItemListContainer"
import ItemDetail from "./pages/ItemDetailContainer/ItemDetailContainer"
import Cart from "./pages/Cart/Cart"

function App() {

  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/categoria/:categoriaId" element={<ItemList />}/>
              <Route path="/buscar" element={<ItemList />}/>
              <Route path="/products/:id" element={<ItemDetail />}/>
              <Route path="/cart" element={<Cart />}/>
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </>
  )
}

export default App
