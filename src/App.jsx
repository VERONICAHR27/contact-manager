import React, { useState } from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactPinned from './components/ContactPinned';
import ContactForm from './components/ContactForm';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [pinnedContact, setPinnedContact] = useState(null);
  const [isCardView, setIsCardView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleSelectContact = (contact) => {
    setPinnedContact(contact);
  };

  const handleClearPinnedContact = () => {
    setPinnedContact(null);
  };

  const toggleView = () => {
    setIsCardView(!isCardView);
  };

  const fetchContacts = async () => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Error al cargar contactos');
      }
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      setErrorMessage('Error al cargar contactos');
    } finally {
      setIsLoading(false);
    }
  };

  const saveContact = async (data) => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Error al guardar contacto');
      }
      const newContact = await response.json();
      setContacts((prevContacts) => [...prevContacts, newContact]);
    } catch (error) {
      setErrorMessage('Error al guardar contacto');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <button onClick={toggleView}>
        {isCardView ? 'Switch to List View' : 'Switch to Card View'}
      </button>
      <button onClick={fetchContacts} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Contacts'}
      </button>
      {errorMessage && (
        <div>
          <p className="error">{errorMessage}</p>
          <button onClick={fetchContacts}>Reintentar</button>
        </div>
      )}
      <div className="content">
        <div className="column">
          <ContactForm addContact={saveContact} />
        </div>
        <div className="column">
          <ContactList
            contacts={contacts}
            onContactClick={handleContactClick}
            onSelectContact={handleSelectContact}
            selectedContact={selectedContact}
            isCardView={isCardView}
          />
        </div>
        <div className="column">
          {pinnedContact && (
            <ContactPinned contact={pinnedContact} onClearContact={handleClearPinnedContact} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;