import "./Footer.css";
import { FaInstagram, FaFacebookSquare, FaTwitterSquare, FaTiktok } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logosTransbank from "../../assets/logosTransbank.png"

function Footer() {
  return (
    <footer className="Footer">
      <section className="Footer-rrss" >

        <NavLink to={"https://www.instagram.com/"}><FaInstagram className="Footer-rrss-icon" /></NavLink>
        <NavLink to={"https://www.facebook.com/"}><FaFacebookSquare className="Footer-rrss-icon" /></NavLink>
        <NavLink to={"https://www.twitter.com/"}><FaTwitterSquare className="Footer-rrss-icon" /></NavLink>
        <NavLink to={"https://www.tiktok.com/"}><FaTiktok className="Footer-rrss-icon" /></NavLink>
      </section>

      <section className="Footer-links">
        <div className="Footer-links-div">
        <NavLink className="Footer-links-div-link"> CAMBIOS Y DEVOLUCIONES</NavLink>
        <NavLink className="Footer-links-div-link"> SEGUIMIENTO DE COMPRA</NavLink>
        <NavLink className="Footer-links-div-link"> POST-VENTA</NavLink>
        <NavLink className="Footer-links-div-link"> MEDIOS DE PAGO</NavLink>
        </div>

      </section>
      <section className="Footer-mediosPago">
        <img src={logosTransbank} alt="Logos Transbank" className="Footer-mediosPago-img" />
      </section>

    </footer>
  );
}

export default Footer;