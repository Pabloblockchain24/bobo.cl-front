import React from 'react'
import "./ItemDetailContainer.css"
import ItemDetail from "./ItemDetail/ItemDetail"
import Loader from "../../components/Loader/Loader"
import { useState, useEffect } from 'react'
import { useProducts } from "../../context/ProductsContext"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const { getProduct, product } = useProducts()
  const [loading, setLoading] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    setLoading(true);
    async function loadProduct() {
      await getProduct(id)
      setLoading(false)
    }
    loadProduct()
  }, [])


  if (loading) {
    return (
      <Loader />
    )
  } else {
    return (
      <div className='customItemDetail'>
        <ItemDetail {...product} />
      </div>
    )
  }
}


export default ItemDetailContainer