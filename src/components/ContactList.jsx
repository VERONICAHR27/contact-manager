import React from 'react';


const ContactList = ({ contacts, onContactClick }) => {
  return (
    <div>
      <h2>Lista de Contactos</h2>
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