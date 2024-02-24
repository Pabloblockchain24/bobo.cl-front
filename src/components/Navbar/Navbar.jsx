import "./Navbar.css";
import { useState, useEffect } from 'react'
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logobobo.png"
import { PiListFill } from "react-icons/pi";
import { AiFillCloseSquare } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";


function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [query, setQuery] = useState('');


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault();
  //     window.location.href = `/buscar?nombre=${query}`;
  //   }
  // };

  return (
    <>
      <header className='nav-header'>
        <p className='nav-header-paragraph'>¡ ENVIO GRATIS EN COMPRAS SOBRE $60.000 !</p>
      </header>

      <main className="main-header">
        <div className="main-header-logo">
          <NavLink to={"/"}><img src={logo} alt="Logo bobo.cl" className="main-header-img" /> </NavLink>
        </div>
        <div className='main-header-categorias'>
          <NavLink className="categorias-menu" onClick={toggleMenu}>
            <PiListFill className="cataux" />
            <p>CATEGORIAS</p>
          </NavLink>


          <nav className={menuOpen ? 'navbarCustom visible' : 'navbarCustom'}>
            <ul className='nav-list'>
              <button className="cerrarMenuMobile" onClick={toggleMenu}><AiFillCloseSquare /></button>
              <li><NavLink to="/products/categoria/Hombre" className="navbarLink"> HOMBRE </NavLink> </li>
              <li><NavLink to="/products/categoria/Mujer" className="navbarLink"> MUJER </NavLink> </li>
              <li><NavLink to="/products/categoria/Accesorio" className="navbarLink"> ACCESORIOS </NavLink> </li>
              <li><NavLink to="/cart" className="navbarLink"> CART </NavLink> </li>
            </ul>
          </nav>
        </div>

        <div className="main-header-buscar">
          <form className="main-header-buscar-form">
            <input 
              className="main-header-buscar-form-input" 
              type="search" 
              placeholder="Buscar" 
              aria-label="Search" 
              value={query}
              onChange={handleInputChange}
              // onKeyPress={handleKeyPress}
              />
            <NavLink className="main-header-buscar-form-button" to={`/buscar?nombre=${query}`}> <FaSearch /></NavLink>
          </form>
        </div>
  
        <div className="main-header-cart">
          <CartWidget className="customCart"> </CartWidget>
        </div>

      </main>
    </>

  );
}

export default NavBar;

