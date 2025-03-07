import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import ContactCard from './ContactCard';

const ContactList = ({ contacts, onContactClick, onSelectContact, selectedContact, isCardView }) => {
  return (
    <div className={isCardView ? 'contact-grid' : 'contact-list'}>
      {contacts.map((contact, index) => (
        <div key={index} onClick={() => onContactClick(contact)}>
          {isCardView ? (
            <ContactCard contact={contact} onSelectContact={onSelectContact} />
          ) : (
            <ContactItem
              contact={contact}
              onSelectContact={onSelectContact}
              isSelected={selectedContact && selectedContact.fullname === contact.fullname}
            />
          )}
        </div>
      ))}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      fullname: PropTypes.string.isRequired,
      phonenumber: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  onContactClick: PropTypes.func.isRequired,
  onSelectContact: PropTypes.func.isRequired,
  selectedContact: PropTypes.object,
  isCardView: PropTypes.bool.isRequired,
};

export default ContactList;