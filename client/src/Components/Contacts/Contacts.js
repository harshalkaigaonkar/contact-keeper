import React, { Fragment, useReducer, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../Context/Contact/ContactContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <Fragment>
      <h2 className='tc bg-blue white'>Your Contacts...</h2>
      {contacts.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </Fragment>
  );
};

export default Contacts;
