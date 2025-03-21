import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, useParams } from 'react-router-dom';
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

  useEffect(() => {
    fetchData();
  }, []);

  // Componente para manejar la ruta dinámica
  const ContactDetail = () => {
    const { id } = useParams(); // Obtiene el parámetro dinámico de la URL
    const contact = contacts.find((contact) => contact.id === parseInt(id, 10)); // Busca el contacto por ID

    if (!contact) {
      return <p>Contacto no encontrado.</p>;
    }

    return <ContactPinned contact={contact} />;
  };

  // Componente para manejar el filtrado por tipo
  const ContactType = () => {
    const { type } = useParams(); // Captura el tipo de contacto desde la URL
    const filteredContacts = contacts.filter((contact) => contact.type === type);

    if (filteredContacts.length === 0) {
      return <p>No hay contactos de tipo {type}.</p>;
    }

    return (
      <div>
        <h2>Contactos de tipo: {type}</h2>
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              <a href={`/agenda/contact/${contact.id}`}>{contact.fullname}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          {/* Ruta principal para la agenda */}
          <Route path="/agenda" element={<ContactListPage contacts={contacts} />}>
            {/* Rutas anidadas para tipos de contacto */}
            <Route path=":type" element={<ContactType />} />
          </Route>
          {/* Ruta para el formulario */}
          <Route path="/formulario" element={<ContactFormPage />} />
          {/* Ruta dinámica para los detalles del contacto */}
          <Route path="/agenda/contact/:id" element={<ContactDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;