import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../Context/Contact/ContactContext";
import "./ContactForm.css";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current } = contactContext;
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });
  const { name, email, phone, type } = contact;
  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2 className='bg-blue white tc'>
          {current ? "Edit Contact" : "Add Contact"}
        </h2>

        <div className='container'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={onChange}
          />
        </div>
        <div className='container'>
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className='container'>
          <input
            type='text'
            placeholder='Phone'
            name='phone'
            value={phone}
            onChange={onChange}
          />
        </div>
        <p>Type:</p>
        <div className='ma2'>
          <input
            type='radio'
            name='type'
            value='personal'
            checked={type === "personal"}
            onChange={onChange}
          />{" "}
          Personal{" "}
          <input
            type='radio'
            name='type'
            value='professional'
            checked={type === "professional"}
            onChange={onChange}
          />{" "}
          Professional{" "}
        </div>
        <div>
          <input
            type='submit'
            value='Add Contact'
            className='ba tc br3 b--black-40 bg--light-blue'
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
