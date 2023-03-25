import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getProductList } from "../api";

const ContactContext = createContext(null);

const ContactProvider = ({ children }) => {
  const [searchContact, setSearchContact] = useState("");
  const [page, setPage] = React.useState(0)
  const searchParams = new URLSearchParams(document.location.search);
  const { status, data, error, isFetching, isPreviousData } = useQuery({
     queryKey: ['product', page],
     queryFn: () => getProductList(page),
     keepPreviousData: true,
     staleTime: 5000,
   })


  useEffect(() => {
     if (!isPreviousData && data?.hasMore) {
          queryClient.prefetchQuery({
            queryKey: ['product', page + 25],
            queryFn: () => getProductList(page + 25),
          })
        }
  }, [searchParams,data, isPreviousData, page, queryClient]);

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
