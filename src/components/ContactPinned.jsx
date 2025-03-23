import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const ContactPinned = ({ contacts }) => {
  const { id } = useParams();//Obtiene el parametro dinamico de la url
  const contact = contacts.find((contact) => contact.id === parseInt(id, 10)); // Busca el contacto por ID
  
  if (!contact) {
    return <p>Contact not found</p>;
  }

  return (
    <div className="contact-pinned">
      <h2>Detalles del Contacto</h2>
      <h3>{contact.fullname}</h3>
      <p>Phone: {contact.phonenumber}</p>
      <p>Email: {contact.email}</p>
      <p>Type: {contact.type}</p>
      <a href="/agenda">Volver a la lista</a>
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
};

export default ContactPinned;