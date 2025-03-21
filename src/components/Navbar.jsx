import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/agenda"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Agenda de Contactos
      </NavLink>
      
      <NavLink
        to="/formulario"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Formulario de Creación
      </NavLink>
    </nav>
  );
};

export default Navbar;