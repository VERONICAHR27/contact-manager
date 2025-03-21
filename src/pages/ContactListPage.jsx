import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ContactListPage = () => {
  return (
    <div className="contact-list-page">
      
      <nav>
        <Link to="social">Social</Link> | <Link to="familia">Familia</Link> | <Link to="trabajo">Trabajo</Link>
      </nav>
      <Outlet /> {/* Renderiza las rutas anidadas */}
    </div>
  );
};

export default ContactListPage;