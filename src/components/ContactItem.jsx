import React from 'react';
import { Link } from 'react-router-dom';

const ContactItem = ({ contact, onDeleteContact }) => (
  <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center)' }}>
    <Link to={`/agenda/contact/${contact.id}`}>
      {contact.fullname}
    </Link>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <button>
        <Link to={`/formulario/${contact.id}`}>
          Editar
        </Link>
      </button>
      <button onClick={() => onDeleteContact(contact.id)} >
        Eliminar
      </button>
    </div>
  </li>
);

export default ContactItem;