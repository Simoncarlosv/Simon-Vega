import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 w-100">
      © {new Date().getFullYear()} - Gestión de Empleados. Todos los derechos reservados.
    </footer>
  );
};

export default Footer;