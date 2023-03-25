import React from "react";
import { ContactState } from "../context/ContactProvider";
import TableRow from "./TableRow";

function ContactTable() {
  const { products, fetchStatus } = ContactState();
  console.log("==========>", fetchStatus, products);
  if (fetchStatus == "loading") return "Loading...";
  return (
    <div>
      <table class="min-w-full table-auto">
        <thead class="justify-between">
          <tr class="bg-gray-800">
            <th class="px-16 py-2">
              <span class="text-gray-300">Product</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">SKU</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Name</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Variant Name</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-200">
          {products.results.map((product, index) => (
            <TableRow key={index} {...product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactTable;
