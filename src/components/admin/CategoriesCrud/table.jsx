import React, { useState } from "react";
import AddCategories from "./AddCategories";
import { useGetCategoriesQuery } from "../../redux/slice/CategoriesCrud/crud";

const Table = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  console.log(categories, 'categories');
  const [search, setSearch] = useState("");
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.error}</div>;

  return (
    <div class="bg-gray-800  dark:bg-white-900 p-3 sm:p-4 antialiased">
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
      <div className=" overflow-x-auto  h-[80vh] ">
        <table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="  text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full">
              <tr>
                <th scope="col" className="p-4">
                  Maxsulot rasmi
                </th>

                <th scope="col" className="p-4">
                  Maxsulot Narxi
                </th>
                <th scope="col" className="p-4">
                  Action
                </th>
                <th scope="col" className="p-4"></th>
              </tr>
          </thead>
          <tbody>
            {[...categories].reverse()?.map((value) => {
              return (
                <tr>
                  <th scope="col" class="p-4">
                    <img className="rounded-2xl  w-[70px] h-[60px]" src={value?.image} alt={value?.title} />
                  </th>
                  <th scope="col" class="p-4">
                    {value?.title}
                  </th>
                  <th scope="col" class="p-4 flex gap-2">
                    <button>edit</button>
                    <button>delte</button>

                  </th>

                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
