import axios from "./axios"

export const getProductsRequest = (categoriaId) => axios.get(`/products/categoria/${categoriaId}`)

export const getProductRequest = (id) => axios.get(`/products/${id}`)

export const getDestacadosRequest = () => axios.get("/products/categoria/destacados")

export const getProductBuscarRequest = (query) => axios.get(`/buscar?nombre=${query}`)
