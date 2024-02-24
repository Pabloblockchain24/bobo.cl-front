import React from 'react'
import { useState, useEffect } from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from "react-router-dom"
import "./Home.css"

import { useProducts } from "../../context/ProductsContext"
import SliderMultiple from './SliderMultiple/SliderMultiple';



function Home() {
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
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  }


  return (
    <>
      <Slider {...settings}>
        <div className='Banner1'>
          <div className='BannerSection'>
            <NavLink to="/" className="buttonBanner"> WINTER SEASON IS COMMING </NavLink>
          </div>
        </div>
        <div className='Banner2'>
          <div className='BannerSection'>
            <NavLink to="/" className="buttonBanner"> WINTER SEASON IS COMMING</NavLink>
          </div>
        </div>
        <div className='Banner3'>
          <div className='BannerSection'>
            <NavLink to="/" className="buttonBanner"> WINTER SEASON IS COMMING</NavLink>
          </div>
        </div>
      </Slider>
      <section className='home-categories'>
        <NavLink to={"/products/categoria/Hombre"} className='home-categories-hombre'> HOMBRE</NavLink>
        <NavLink to={"/products/categoria/Mujer"} className='home-categories-mujer'> MUJER</NavLink>
        <NavLink to={"/products/categoria/Accesorio"} className='home-categories-accesorios'> ACCESORIOS</NavLink>

      </section>
      
      <section className='home-destacados'>
        <SliderMultiple/>
      </section>

    </>


  )
}

export default Home