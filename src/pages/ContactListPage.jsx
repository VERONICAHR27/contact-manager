import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ContactItem from '../components/ContactItem';

const ContactListPage = ({ contacts, onSyncContacts, onDeleteContact, }) => {
  const { type } = useParams(); // Captura el tipo de contacto desde la URL
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  // Filtrar contactos por tipo si se proporciona un tipo en la URL
  const filteredContactsByType = type
    ? contacts.filter((contact) => contact.type === type)
    : contacts;

  // Filtrar contactos por el término de búsqueda
  const filteredContacts = filteredContactsByType.filter((contact) =>
    contact.fullname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Función para guardar contactos en localStorage
  const handleSaveContacts = () => {
    if (contacts && contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
      alert('Contactos guardados en LocalStorage.');
    } else {
      alert('No hay contactos para guardar.');
    }
  };

  return (
    <div className="contact-list-page">
      <div className="search-container">
    <input
      type="text"
      placeholder="Buscar contactos por nombre..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
      <div className="button-group">
        <button onClick={handleSaveContacts}>Guardar Contactos</button>
        <button onClick={onSyncContacts}>Sincronizar Datos</button>
      </div>
      
      <nav>
        <Link to="/agenda/social">Social</Link> | <Link to="/agenda/familia">Familia</Link> | <Link to="/agenda/trabajo">Trabajo</Link>
      </nav>
      {filteredContacts.length === 0 ? (
        <p>No se encontraron contactos con ese nombre.</p>
      ) : (
        <ul>
          {filteredContacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
          ))}
        </ul>

      )}
    </div>
  );
};

export default ContactListPage;