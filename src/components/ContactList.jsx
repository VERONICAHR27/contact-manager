import React from 'react';


const ContactList = ({ contacts, onContactClick }) => {
  return (
    <div>
            <ul>
        {contacts.map((contact, index) => (
          <li key={index} onClick={() => onContactClick(contact)}>
            <strong>{contact.name}</strong>: {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList;