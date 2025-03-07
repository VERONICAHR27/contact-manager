import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ContactForm = ({ addContact }) => {
  const [fullname, setFullname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('familia');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!fullname) newErrors.fullname = 'Full name is required';
    if (!phonenumber) newErrors.phonenumber = 'Phone number is required';
    if (!email) newErrors.email = 'Email is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newContact = { fullname, phonenumber, email, type };
    addContact(newContact);

    // Clear form
    setFullname('');
    setPhonenumber('');
    setEmail('');
    setType('familia');
    setErrors({});
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div>
        <label>Full Name</label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        {errors.fullname && <span className="error">{errors.fullname}</span>}
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
        {errors.phonenumber && <span className="error">{errors.phonenumber}</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="familia">Familia</option>
          <option value="trabajo">Trabajo</option>
          <option value="social">Social</option>
        </select>
      </div>
      <button type="submit" disabled={!fullname || !phonenumber || !email}>
        Guardar
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;