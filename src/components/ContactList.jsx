import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactList = ({ contacts }) => {
  const navigate = useNavigate(); // Hook para redirigir a la ruta dinámica

  if (!contacts || contacts.length === 0) {
    return <p>No hay contactos disponibles.</p>;
  }

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div key={contact.id} className="contact-item">
          <h3
            className="contact-name"
            onClick={() => navigate(`/agenda/contact/${contact.id}`)} // Redirige a la ruta dinámica
          >
            {contact.fullname}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ContactList;