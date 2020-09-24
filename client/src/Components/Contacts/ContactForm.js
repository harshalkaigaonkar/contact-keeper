import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../Context/Contact/ContactContext";
import "./ContactForm.css";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, updateContact, clearCurrent, current } = contactContext;
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
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }

    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <h2 className='blue pa1 mt0 ba tc'>
            {current ? "Update Contact" : "Add Contact"}
          </h2>
          <p className='ma1 pa1'>Name:</p>
          <div className='container'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={onChange}
            />
          </div>
          <p className='ma1 pa1'>Email:</p>
          <div className='container'>
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={onChange}
            />
          </div>
          <p className='ma1 pa1'>Phone:</p>
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
              value={current ? "Update Contact" : "Add Contact"}
              className='f6 mt2 mb2 w-90 pointer dim bn br3 ph3 pv2 dib white bg-blue'
            />
          </div>
          {current && (
            <div>
              <p
                className='f6 mt2 tc mb2 w-90 pointer dim bn br3 ph3 pv2 dib white bg-light-blue'
                onClick={clearAll}
              >
                Clear Contact
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
