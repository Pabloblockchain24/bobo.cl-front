import "./ItemListContainer.css";
import ItemList from "./ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useProducts } from "../../context/ProductsContext"


const ItemListContainer = () => {
  const { getProductsByCategoria, getProductsByBuscar, products } = useProducts()
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const prueba = queryParams.get('nombre');

  if(prueba){
    useEffect(() => {
      setLoading(true);
      async function loadProducts() {
          await getProductsByBuscar(prueba)
          setLoading(false)
      }
      loadProducts()
    }, [prueba])
  }else{
    useEffect(() => {
      setLoading(true);
      async function loadProducts() {
          await getProductsByCategoria(categoriaId)
          setLoading(false)
      }
      loadProducts()
    }, [categoriaId])
  }

  if (products.length === 0) return (<h1 className="customHeader2"> No hay productos para tu busqueda :/ </h1>)

  if (loading) {
    return <Loader />;
  } else {
    return (
      <main className="itemListContainer">
        <h3 className="customHeader">{categoriaId}</h3>
        <ItemList productos={products} />
      </main>
    );
  }
};
export default ItemListContainer;
