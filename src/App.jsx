import React, { useState } from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactPinned from './components/ContactPinned';
import ContactForm from './components/ContactForm';
import './App.css';
import contactsData from './data/contact.json';

const App = () => {
  const [contacts, setContacts] = useState(contactsData);
  const [selectedContact, setSelectedContact] = useState(null);
  const [pinnedContact, setPinnedContact] = useState(null);
  const [isCardView, setIsCardView] = useState(false);

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

  return (
    <div className="App">
      <Header />
      <button onClick={toggleView}>
        {isCardView ? 'Switch to List View' : 'Switch to Card View'}
      </button>
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
    </div>
  );
};

export default App;