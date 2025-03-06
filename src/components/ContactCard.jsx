import React from 'react';
import PropTypes from 'prop-types';


const ContactCard = ({ contact }) => {
  return (
    <div className="contact-card">
      <h3>{contact.fullname}</h3>
      <p>Phone: {contact.phonenumber}</p>
      <p>Email: {contact.email}</p>
      <p>Type: {contact.type}</p>
    </div>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.shape({
    fullname: PropTypes.string.isRequired,
    phonenumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactCard;