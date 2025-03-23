import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const ContactFormPage = ({ addContact, editContact, contacts }) => {
  const { id } = useParams(); // Captura el ID del contacto desde la URL
  const contactToEdit = id ? contacts.find((contact) => contact.id === parseInt(id, 10)) : null;

  // Estado para manejar el mensaje de éxito
  const [successMessage, setSuccessMessage] = useState('');

  // Función para manejar la edición y mostrar el mensaje
  const handleEditContactWithMessage = (updatedContact) => {
    editContact(updatedContact); // Llama a la función de edición
    setSuccessMessage('¡Los cambios se guardaron correctamente!'); // Establece el mensaje de éxito
    setTimeout(() => setSuccessMessage(''), 3000); // Limpia el mensaje después de 3 segundos
  };

  // Función para manejar la creación y mostrar el mensaje
  const handleAddContactWithMessage = (newContact) => {
    addContact(newContact); // Llama a la función de creación
    setSuccessMessage('¡El contacto se agregó correctamente!'); // Establece el mensaje de éxito
    setTimeout(() => setSuccessMessage(''), 3000); // Limpia el mensaje después de 3 segundos
  };

  return (
    <div>
      <h1>{contactToEdit ? 'Editar Contacto' : 'Agregar Contacto'}</h1>
      {/* Mostrar mensaje de éxito si existe */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <ContactForm
        addContact={handleAddContactWithMessage} // Usa la función con mensaje para agregar
        editContact={handleEditContactWithMessage} // Usa la función con mensaje para editar
        contactToEdit={contactToEdit} // Determina si se está editando o creando
      />
    </div>
  );
};

export default ContactFormPage;