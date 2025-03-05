import React, { useState } from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactCard from './components/ContactCard';
import ContactDetail from './components/ContactDetail';
import contacts from './data/contact';
import './App.css';

function App() {
  const [view, setView] = useState('list');
  const [featuredContact, setFeaturedContact] = useState(null);

  const toggleView = () => {
    setView(view === 'list' ? 'cards' : 'list');
  };

  const handleContactClick = (contact) => {
    setFeaturedContact(contact);
  };

  return (
    <>
      <Header />
      <button onClick={toggleView}>
        Alternar Vista
      </button>
      <div className="card">
        {view === 'list' ? (
          <ContactList contacts={contacts} onContactClick={handleContactClick} />
        ) : (
          <div className="contact-cards">
            {contacts.map((contact, index) => (
              <ContactCard key={index} contact={contact} onContactClick={handleContactClick} />
            ))}
          </div>
        )}
        {featuredContact && <ContactDetail contact={featuredContact} />}
      </div>
    </>
  );
}

export default App;