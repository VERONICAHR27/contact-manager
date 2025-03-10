import React from 'react';
import PropTypes from 'prop-types';

const ContactPinned = ({ contact, onClearContact }) => {
  if (!contact) {
    return null; // No mostrar nada si no hay contacto seleccionado
  }

  return (
    <div className="contact-pinned">
      <h2>Contacto Destacado</h2>
      <h3>{contact.fullname}</h3>
      <p>Phone: {contact.phonenumber}</p>
      <p>Email: {contact.email}</p>
      <p>Type: {contact.type}</p>
      <button onClick={onClearContact}>Limpiar</button>
    </div>
  );
};

ContactPinned.propTypes = {
  contact: PropTypes.shape({
    fullname: PropTypes.string.isRequired,
    phonenumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
  onClearContact: PropTypes.func.isRequired,
};

export default ContactPinned;