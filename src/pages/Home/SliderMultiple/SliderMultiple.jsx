import React from 'react'
import { useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink, Link } from "react-router-dom"
import "./SliderMultiple.css"
import { useProducts } from "../../../context/ProductsContext"
import Loader from "../../../components/Loader/Loader"

function SliderMultiple() {
    const { getDestacados, products } = useProducts()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        async function loadProducts() {
            await getDestacados()
            setLoading(false)
        }
        loadProducts()
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrow:false
    };


    return (
  
        <>
            <h2 className='section-destacados-title'> DESTACADOS</h2>
            {products && products.length > 0 ? (
                <Slider {...settings}>
                    {products.map(product => (
                        <NavLink to={`/products/${product._id}`} className="card1" key={product._id}>
                            <div>{product.nombre}</div>
                            <img src={`../../../products/${product.img}`} alt="prueba" />
                            <p>{product.descripcion}</p>
                            <div>${product.precio}</div>
                        </NavLink>
                    ))}
                </Slider>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default SliderMultiple