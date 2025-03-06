import React from 'react';
import PropTypes from 'prop-types';

const ContactPinned = ({ contact, onClear }) => {
  if (!contact) {
    return <div className="contact-pinned">No contact selected</div>;
  }

  return (
    <div className="contact-pinned">
      <h2>Contacto Destacado</h2>
      <h3>{contact.fullname}</h3>
      <p>Phone: {contact.phonenumber}</p>
      <p>Email: {contact.email}</p>
      <p>Type: {contact.type}</p>
      <button onClick={onClear}>Limpiar</button>
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
  onClear: PropTypes.func.isRequired,
};

export default ContactPinned;