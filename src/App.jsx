import React, { useState, useEffect } from 'react';
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

  const handleClearContact = () => {
    setSelectedContact(null);
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

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const fetchData = async () => {
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
      if (error.name === 'TypeError') {
        setErrorMessage('Error de red: No se pudo conectar con la API');
      } else {
        setErrorMessage('Error al cargar contactos');
      }
      console.error('Error al cargar contactos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <button onClick={toggleView}>
        {isCardView ? 'Switch to List View' : 'Switch to Card View'}
      </button>
      <button onClick={fetchData} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Contacts'}
      </button>
      {isLoading && <p>Cargando...</p>}
      {errorMessage && (
        <div>
          <p className="error">{errorMessage}</p>
          <button onClick={fetchData}>Reintentar</button>
        </div>
      )}
      {!isLoading && !errorMessage && (
        <div className="content">
          <div className="column">
            <ContactForm addContact={addContact} />
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
      )}
    </div>
  );
};

export default App;