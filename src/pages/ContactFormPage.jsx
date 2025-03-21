import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactFormPage = ({ addContact }) => {
  return (
    <div>
      <h1>Agregar Contacto</h1>
      <ContactForm addContact={addContact} />
    </div>
  );
};

export default ContactFormPage;