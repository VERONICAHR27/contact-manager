import React from 'react';
import PropTypes from 'prop-types';


const ContactItem = ({ contact, onSelectContact, isSelected }) => {
  return (
    <div className={`contact-item ${isSelected ? 'selected' : ''}`} onClick={() => onSelectContact(contact)}>
      <h3>{contact.fullname}</h3>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    fullname: PropTypes.string.isRequired,
  }).isRequired,
  onSelectContact: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default ContactItem;