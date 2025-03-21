import React from 'react';
import { useParams } from 'react-router-dom';

const ContactDetailPage = ({ contacts }) => {
  const { id } = useParams(); // Captura el parámetro dinámico de la URL
  const contact = contacts.find((contact) => contact.id === parseInt(id, 10)); // Busca el contacto por ID

  if (!contact) {
    return <p>Contacto no encontrado.</p>;
  }

  return (
    <div className="contact-detail">
      <h2>Detalles del Contacto</h2>
      <p><strong>Nombre:</strong> {contact.name}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Teléfono:</strong> {contact.phone}</p>
      <p><strong>Dirección:</strong> {contact.address}</p>
    </div>
  );
};

export default ContactDetailPage;