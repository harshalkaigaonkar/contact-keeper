import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../Context/Contact/ContactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");
  const { filterContact, clearFilter, filtered } = contactContext;
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type='text'
        className='w-100 pv2'
        placeholder='Search Contacts Here...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
