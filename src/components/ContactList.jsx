import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import contacts from '../data/contact';

const ContactList = ({ onContactClick, onSelectContact, selectedContact }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <div key={index} onClick={() => onContactClick(contact)}>
          <ContactItem
            contact={contact}
            onSelectContact={onSelectContact}
            isSelected={selectedContact && selectedContact.fullname === contact.fullname}
          />
        </div>
      ))}
    </div>
  );
};

ContactList.propTypes = {
  onContactClick: PropTypes.func.isRequired,
  onSelectContact: PropTypes.func.isRequired,
  selectedContact: PropTypes.object,
};

export default ContactList;