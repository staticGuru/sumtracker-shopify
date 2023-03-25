import React from "react";
import { ContactState } from "../context/ContactProvider";
import { Removefilters } from "../utils/Removefilters";

function SupplierTag() {
  const { contact, setContact, setPage } = ContactState();
  function removeContact() {
    // setContact(null);
    return Removefilters(setContact, setPage);
  }
  return (
    <div className="flex border-2 border-slate-700 text-xs font-medium rounded-sm  pl-2 pr-2 pt-0 mt-2 align-middle items-center">
      {`Supplier: ${contact}`}
      <span className="ml-3 text-xs cursor-pointer" onClick={removeContact}>
        x
      </span>
    </div>
  );
}

export default SupplierTag;
