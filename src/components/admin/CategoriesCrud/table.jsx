// import React from 'react';
// import { FiEdit2, FiTrash2 } from 'react-icons/fi'; // For edit and delete icons

// const Table = ({ categories, onDelete, onEdit }) => {
//   return (
//     <div className="min-w-full">
//       <table className="w-full text-left">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Mahsulot turi rasmi</th>
//             <th className="px-4 py-2">Mahsulot turi nomi</th>
//             <th className="px-4 py-2">Harakatlar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {categories.map((category) => (
//             <tr key={category.id} className="border-b">
//               <td className="px-4 py-2">
//                 <img src={category.image} alt={category.name} className="w-16 h-16" />
//               </td>
//               <td className="px-4 py-2">{category.name}</td>
//               <td className="px-4 py-2">
//                 <button onClick={() => onEdit(category.id)} className="mr-2">
//                   <FiEdit2 className="text-blue-500" />
//                 </button>
//                 <button onClick={() => onDelete(category.id)}>
//                   <FiTrash2 className="text-red-500" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

import React, { useState } from "react";
import AddCategories from "./AddCategories";
import { useGetCategoriesQuery } from "../../redux/slice/CategoriesCrud/crud";

const Table = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();
  const [search, setSearch] = useState("");
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.error}</div>;

  return (
    <div class=" pt-10px relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex  justify-between">
        <div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            id="Oziq Ovqadlar"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search....."
            required
          />
        </div>
        <div>
          <button
            type="button"
            class="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {" "}
            <AddCategories />{" "}
          </button>
        </div>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              Mahsulod turi rasmi
            </th>
            <th scope="col" class="p-4">
              Mahsulod turi nomi
            </th>
            <th scope="col" class="p-4"></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Table;
