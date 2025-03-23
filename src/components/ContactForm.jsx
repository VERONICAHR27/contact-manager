import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ addContact, editContact, contactToEdit }) => {
  const [fullname, setFullname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('familia');
  const [errors, setErrors] = useState({});

  // Cargar los datos del contacto a editar si existe
  useEffect(() => {
    if (contactToEdit) {
      setFullname(contactToEdit.fullname);
      setPhonenumber(contactToEdit.phonenumber);
      setEmail(contactToEdit.email);
      setType(contactToEdit.type);
    } else {
      // Limpiar el formulario si no se está editando
      setFullname('');
      setPhonenumber('');
      setEmail('');
      setType('familia');
    }
  }, [contactToEdit]);

  const validate = () => {
    const newErrors = {};
    if (!fullname) newErrors.fullname = 'El nombre es obligatorio';
    if (!phonenumber) newErrors.phonenumber = 'El número de teléfono es obligatorio';
    if (!email) newErrors.email = 'El correo electrónico es obligatorio';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newContact = { fullname, phonenumber, email, type };
    if (contactToEdit) {
      editContact({ ...contactToEdit, ...newContact }); // Editar contacto existente
    } else {
      addContact(newContact); // Crear nuevo contacto
    }

    // Limpiar el formulario después de agregar un contacto
    if (!contactToEdit) {
      setFullname('');
      setPhonenumber('');
      setEmail('');
      setType('familia');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        {errors.fullname && <p>{errors.fullname}</p>}
      </div>
      <div>
        <label>Teléfono:</label>
        <input
          type="text"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
        {errors.phonenumber && <p>{errors.phonenumber}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Tipo:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="social">Social</option>
          <option value="familia">Familia</option>
          <option value="trabajo">Trabajo</option>
        </select>
      </div>
      <button type="submit">{contactToEdit ? 'Guardar Cambios' : 'Agregar Contacto'}</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  editContact: PropTypes.func,
  contactToEdit: PropTypes.object,
};

export default ContactForm;