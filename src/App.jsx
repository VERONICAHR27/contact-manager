import React, { useState } from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactGrid from './components/ContactGrid';
import ContactPinned from './components/ContactPinned';
import './App.css';

const App = () => {
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

  return (
    <div className="App">
      <Header />
      <button onClick={toggleView}>
        {isCardView ? 'Switch to List View' : 'Switch to Card View'}
      </button>
      <div className="content">
        <div className="contact-view">
          {isCardView ? (
            <ContactGrid onContactClick={handleContactClick} onSelectContact={handleSelectContact} />
          ) : (
            <ContactList
              onContactClick={handleContactClick}
              onSelectContact={handleSelectContact}
              selectedContact={selectedContact}
            />
          )}
        </div>
        <div className="contact-pinned-view">
          {pinnedContact && (
            <ContactPinned contact={pinnedContact} onClearContact={handleClearPinnedContact} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;