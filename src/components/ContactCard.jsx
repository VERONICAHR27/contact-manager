import React from 'react';


const ContactCard = ({ contact, onContactClick }) => {
  return (
    <div className="contact-card" onClick={() => onContactClick(contact)}>
      <h3>{contact.name}</h3>
      <p><strong>Teléfono:</strong> {contact.phone}</p>
      <p><strong>Email:</strong> {contact.email}</p>
    </div>
  );
};

export default ContactCard;