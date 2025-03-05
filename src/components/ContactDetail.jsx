import React from 'react';


const ContactDetail = ({ contact }) => {
  return (
    <div className="contact-detail">
      <h2>Contacto Destacado</h2>
      <p><strong>Nombre:</strong> {contact.name}</p>
      <p><strong>Teléfono:</strong> {contact.phone}</p>
      <p><strong>Email:</strong> {contact.email}</p>
    </div>
  );
};

export default ContactDetail;