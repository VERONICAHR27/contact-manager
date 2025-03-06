import React, { useState } from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactGrid from './components/ContactGrid';
import ContactPinned from './components/ContactPinned';
import './App.css';

const App = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [isCardView, setIsCardView] = useState(false);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleClearContact = () => {
    setSelectedContact(null);
  };

  const toggleView = () => {
    setIsCardView(!isCardView);
  };

  return (
    <div className="App">
      <Header />
      <button onClick={toggleView}>
        {isCardView ? 'Cambiar a vista de lista' : 'Cambiar a vista de tarjetas'}
      </button>
      {isCardView ? (
        <ContactGrid onContactClick={handleContactClick} />
      ) : (
        <ContactList onContactClick={handleContactClick} />
      )}
      <ContactPinned contact={selectedContact} onClear={handleClearContact} />
    </div>
  );
};

export default App;