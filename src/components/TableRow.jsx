import React from "react";

function TableRow({id,sku,variant_name,name,image_url}) {
  return (
    <tr class="bg-white border-2 border-gray-200">
      <td class="px-16 py-2 flex flex-row items-center">
        <img
          class="h-12 w-12 object-cover"
          src={image_url}
          alt=""
        />
      </td>
      <td>
        <span class="text-center ml-2 font-semibold">{sku}</span>
      </td>
      <td class="px-16 py-2">
        <span>{name}</span>
      </td>
      <td class="px-16 py-2">
        <span>{variant_name}</span>
      </td>
    </tr>
  );
}

export default TableRow;
