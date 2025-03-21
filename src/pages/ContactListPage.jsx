import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ContactListPage = ({ contacts, onSyncContacts }) => {
  // Función para guardar contactos en localStorage
  const handleSaveContacts = () => {
    if (contacts && contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
      alert('Contactos guardados en LocalStorage.');
    } else {
      alert('No hay contactos para guardar.');
    }
  };

  return (
    <div className="contact-list-page">
      <h1>Agenda de Contactos</h1>
      <button onClick={handleSaveContacts}>Guardar Contactos</button> {/* Botón para guardar contactos */}
      <button onClick={onSyncContacts}>Sincronizar Datos</button> {/* Botón para sincronizar datos */}
      <nav>
        <Link to="social">Social</Link> | <Link to="familia">Familia</Link> | <Link to="trabajo">Trabajo</Link>
      </nav>
      <Outlet /> {/* Renderiza las rutas anidadas */}
    </div>
  );
};

export default ContactListPage;