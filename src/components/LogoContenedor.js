import React from "react";
import freeCodeCampLogo from "../images/fcc-logo.png"
import "../stylesheets/LogoContenedor.css"

const LogoContenedor = () => (
  <div className="contenedor-logo-freecodecamp">
    <img 
      src={freeCodeCampLogo}
      className="logo-freecodecamp"
      alt="Logo de freeCodeCamp" />
  </div>
)

export default LogoContenedor;