import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ContactContext = createContext(null);

const ContactProvider = ({ children }) => {
  const [searchContact, setSearchContact] = useState("");
  const searchParams = new URLSearchParams(document.location.search);



  useEffect(() => {
    console.log("searchParams", searchParams.get("contact"));
  }, [searchParams]);

  return (
    <ContactContext.Provider
      value={{
        searchContact,
        setSearchContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const ContactState = () => {
  return useContext(ContactContext);
};

export default ContactProvider;
