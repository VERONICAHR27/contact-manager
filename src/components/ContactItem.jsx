import React from 'react';
import PropTypes from 'prop-types';


const ContactItem = ({ contact }) => {
  return (
    <div className="contact-item">
      <h3>{contact.fullname}</h3>
          </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    fullname: PropTypes.string.isRequired,
    
  }).isRequired,
};

export default ContactItem;