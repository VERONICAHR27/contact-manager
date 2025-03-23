import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Importar Navigate
import Header from './components/Header';
import Navbar from './components/Navbar';
import ContactListPage from './pages/ContactListPage';
import ContactFormPage from './pages/ContactFormPage';
import ContactPinned from './components/ContactPinned';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Cargar los contactos desde la API
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
      setErrorMessage('Error al cargar contactos');
      console.error('Error al cargar contactos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Cargar contactos desde localStorage al iniciar la aplicación
  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    } else {
      fetchData(); // Si no hay contactos en localStorage, cargar desde la API
    }
  }, []);

  // f. Sincronizar contactos con la API
  const handleSyncContacts = async () => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Error al sincronizar contactos');
      }
      const data = await response.json();
      setContacts(data); // Actualiza el estado con los nuevos contactos
      localStorage.setItem('contacts', JSON.stringify(data)); // Guarda los contactos en LocalStorage
      alert('Sincronización exitosa'); // Muestra un mensaje de éxito
    } catch (error) {
      setErrorMessage('Error al sincronizar contactos');
      console.error('Error al sincronizar contactos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  
  const saveContact = async (newContact) => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
      });
      if (!response.ok) {
        throw new Error('Failed to save contact');
      }
      const savedContact = await response.json();
      const updatedContacts = [...contacts, savedContact];
      setContacts(updatedContacts);
    } catch (error) {
      setErrorMessage('Ocurrió un error al guardar el contacto');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditContact = (updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts)); // Actualizar en localStorage
  };

  const handleDeleteContact = (id) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este contacto?');
    if (confirmDelete) {
      const updatedContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(updatedContacts); // Actualiza el estado global
      localStorage.setItem('contacts', JSON.stringify(updatedContacts)); // Actualiza en localStorage
      alert('Contacto eliminado correctamente.');
    }
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          {/* Redirigir la ruta raíz (/) a la página de Agenda */}
          <Route path="/" element={<Navigate to="/agenda" />} />
          {/* Ruta principal para la agenda y filtrado por tipo */}
          <Route path="/agenda/:type?" element={ <ContactListPage contacts={contacts} onSyncContacts={handleSyncContacts} onDeleteContact={handleDeleteContact}/>} />
          {/* Ruta para el formulario */}
          <Route
            path="/formulario/:id?"
            element={ <ContactFormPage addContact={saveContact} editContact={handleEditContact} contacts={contacts} /> } />
          {/* Ruta dinámica para los detalles del contacto */}
          <Route path="/agenda/contact/:id" element={<ContactPinned contacts={contacts} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;