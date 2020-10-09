import React, { useContext, useEffect } from "react";
import Contacts from "../Contacts/Contacts";
import ContactForm from "../Contacts/ContactForm";
import ContactFilter from "../Contacts/ContactFilter";
import AuthContext from "../../Context/Auth/AuthContext";

const Home = () => {

  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, [])
  return (
    <div className='ma4'>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div className='mr4 container'>
          <ContactForm />
        </div>
        <div className='ml4'>
          <ContactFilter />
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Home;
