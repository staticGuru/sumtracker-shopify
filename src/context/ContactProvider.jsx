import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getProductList } from "../api";

const ContactContext = createContext(null);

const ContactProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const [searchContact, setSearchContact] = useState("");
  const [page, setPage] = React.useState(1);
  const searchParams = new URLSearchParams(document.location.search);
  const [contact, setContact] = useState(searchParams.get("contact"));
  const {
    status: fetchStatus,
    data: products,
    error,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ["product", contact, page],
    queryFn: () => getProductList(page),
    keepPreviousData: true,
    staleTime: 5000,
  });

  useEffect(() => {
    if (!isPreviousData && products?.hasMore) {
      queryClient.prefetchQuery({
        queryKey: ["product", contact, page*25],
        queryFn: () => getProductList(page*25),
      });
    }
  }, [searchParams, products, isPreviousData, page, queryClient]);

  return (
    <ContactContext.Provider
      value={{
        searchContact,
        setSearchContact,
        contact,
        setContact,
        page,
        setPage,
        products,
        fetchStatus,
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
