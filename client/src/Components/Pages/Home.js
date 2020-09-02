import React from "react";
import Contacts from "../../Contacts/Contacts";
import ContactForm from "../../Contacts/ContactForm";

const Home = () => {
  return (
    <div className='ma4'>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div className='mr4'>
          <ContactForm />
        </div>
        <div className='ml4'>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Home;
