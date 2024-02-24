import { createContext, useContext, useState } from "react"
import { getProductRequest, getProductsRequest, getDestacadosRequest, getProductBuscarRequest } from "../api/services"
const ProductsContext = createContext()

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error("useIntranet must be used within a IntranetProvider")
    }
    return context
}

export function ProductsProvider({ children }) {

    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])

    const getProductsByCategoria = async (categoriaId) => {
        const res = await getProductsRequest(categoriaId)
        try {
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getDestacados = async () => {
        const res = await getDestacadosRequest()
        try {
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    const getProduct = async (id) => {
        try {
            const res = await getProductRequest(id)
            setProduct(res.data)
        } catch (error){
            console.log(error)
        }
    }

    const getProductsByBuscar = async(query) => {
        try {
            const res = await getProductBuscarRequest(query)
            setProducts(res.data)
        } catch (error){
            console.log(error)
        }
    }

    return (
        <ProductsContext.Provider value={{
            products,
            product,
            getProduct,
            getProductsByCategoria,
            getDestacados,
            getProductsByBuscar
        }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

