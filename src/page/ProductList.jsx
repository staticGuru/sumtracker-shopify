import React from "react";
import ContactTable from "../components/ContactTable";
import Header from "../components/Header";
import { ContactState } from "../context/ContactProvider";

function ProductList() {
  const { fetchStatus } = ContactState();
  if (fetchStatus == "loading") return "Loading...";
  return (
    <div>
      <span className="flex text-2xl align-left font-bold text-violet-500 mb-1">
        Product List
      </span>
      <span className="flex text-sm align-left font-normal text-slate-700 mb-4">
        List of all Products created in Sumtracker based on unique SKU
      </span>
      <Header />
      <ContactTable />
    </div>
  );
}

export default ProductList;
