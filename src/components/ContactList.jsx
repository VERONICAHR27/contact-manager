import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import contacts from '../data/contact';

const ContactList = ({ onContactClick }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <div key={index} onClick={() => onContactClick(contact)}>
          <ContactItem contact={contact} />
        </div>
      ))}
    </div>
  );
};

ContactList.propTypes = {
  onContactClick: PropTypes.func.isRequired,
};

export default ContactList;