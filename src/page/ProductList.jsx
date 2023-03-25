import React from "react";
import ContactTable from "../components/ContactTable";
import Header from "../components/Header";
import { ContactState } from "../context/ContactProvider";

function ProductList() {
  const { fetchStatus } = ContactState();
  if (fetchStatus == "loading") return "Loading...";
  return (
    <div>
      <Header />
      <ContactTable />
    </div>
  );
}

export default ProductList;
