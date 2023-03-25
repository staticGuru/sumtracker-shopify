import React from "react";
import { ContactState } from "../context/ContactProvider";

function PaginateDetails() {
  const { products = [], page, setPage, isPreviousData } = ContactState();
  return (
    <div className="flex flex-row justify-between">
      <div>{`Showing ${page * products.results.length} of ${
        products.count
      } products.`}</div>
      <div className="flex">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 1}
          className="mr-5 pl-5 pr-5 pt-1 pb-1 bg-slate-500 text-white rounded-sm cursor-pointer"
        >
          Prev
        </button>
        <div>{page}</div>
        <button
          onClick={() => {
            setPage((old) =>
              page * products.results.length <= products.count ? old + 1 : old
            );
          }}
          disabled={
            isPreviousData ||
            !(page * products.results.length <= products.count)
          }
          className="mr-5 pl-5 pr-5 pt-1 pb-1 bg-slate-500 text-white rounded-sm cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginateDetails;
