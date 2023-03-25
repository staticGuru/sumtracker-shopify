import React from "react";

function ContactTable() {
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
          <tr class="bg-white border-4 border-gray-200">
            <td class="px-16 py-2 flex flex-row items-center">
              <img
                class="h-8 w-8  object-cover"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
            </td>
            <td>
              <span class="text-center ml-2 font-semibold">Ab-fsd-ersd</span>
            </td>
            <td class="px-16 py-2">
              <span>Product Name</span>
            </td>
            <td class="px-16 py-2">
              <span>Veriant name</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ContactTable;
