import React from "react";
import { ContactState } from "../context/ContactProvider";
import { Removefilters } from "../utils/Removefilters";
import SupplierTag from "./SupplierTag";

function PaginateDetails() {
  const {
    products = [],
    page,
    setPage,
    isPreviousData,
    contact,
    setContact,
  } = ContactState();
  return (
    <div className="flex flex-row justify-between items-center mb-3">
      <div className="flex items-center">
        <div className="mr-4 font-medium text-sm">{`Showing ${
          page * products.results.length - 25 || 1
        } - ${page * products.results.length} of ${
          products.count
        } products.`}</div>
        {contact && <SupplierTag />}
        {(contact || page > 1) && (
          <div
            onClick={() => Removefilters(setContact, setPage)}
            className="flex border-2 border-slate-700 text-xs font-medium rounded-sm  pl-2 pr-2 pt-0 mt-2 ml-2 align-middle bg-slate-500 items-center text-white cursor-pointer"
          >
            Reset
          </div>
        )}
      </div>
      <div
        className={`flex items-center ${
          products.count < 25 ? "pointer-events-none opacity-20" : null
        }`}
      >
        <div
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          className={`mr-5 pl-5 pr-5 pt-0 pb-0 border-2 rounded-lg text-white border-slate-600 bg-slate-500 font-medium ${
            page === 1
              ? "pointer-events-none bg-slate-200 opacity-20"
              : "cursor-pointer"
          }`}
        >
          <span className="text-lg font-medium">{"<"}</span> Prev
        </div>
        <button
          onClick={() => {
            setPage((old) =>
              page * products.results.length <= products.count ? old + 1 : old
            );
          }}
          className={`mr-5 pl-5 pr-5 pt-0 pb-0 border-2  text-white rounded-lg border-slate-600 bg-slate-500 font-medium ${
            isPreviousData ||
            !(page * products.results.length <= products.count)
              ? "pointer-events-none bg-slate-200 opacity-20"
              : "cursor-pointer"
          }`}
        >
          Next <span className="text-lg font-medium">{">"}</span>
        </button>
      </div>
    </div>
  );
}

export default PaginateDetails;
