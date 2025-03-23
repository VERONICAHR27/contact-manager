import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/agenda"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Inicio
      </NavLink>
      
      <NavLink
        to="/formulario"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Agregar Contacto
      </NavLink>
    </nav>
  );
};

export default Navbar;