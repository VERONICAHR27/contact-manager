import React from 'react';
import PropTypes from 'prop-types';
import ContactCard from './ContactCard';
import contacts from '../data/contact.js';

const ContactGrid = ({ onContactClick, onSelectContact }) => {
  return (
    <div className="contact-grid">
      {contacts.map((contact, index) => (
        <div key={index} onClick={() => onContactClick(contact)}>
          <ContactCard contact={contact} onSelectContact={onSelectContact} />
        </div>
      ))}
    </div>
  );
};

ContactGrid.propTypes = {
  onContactClick: PropTypes.func.isRequired,
  onSelectContact: PropTypes.func.isRequired,
};

export default ContactGrid;