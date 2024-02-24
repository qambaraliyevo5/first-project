import { useState } from "react";
import { useGetSubcatigoriesQuery } from "../../redux/slice/SubCategories/crud";
import UpdateCategoriesCom from '../CategoriesCrud/UpdateCategories'
import DeleteCategorieCom from "../productCrud/delete";
import AddCategoriesCom from "./AddCategiresCom";

const TableCom = () => {
  const { data: categories, error, isLoading } = useGetSubcatigoriesQuery();

  console.log(categories, "categories");
  const [search, setSearch] = useState("");
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.error}</div>;

  return (
    <div class=" pt-10px relative overflow-x-auto  h-[99vh] shadow-md sm:rounded-lg">
      <div className="flex justify-between px-3 pt-3 pb-3 dark:bg-white-800">
        <input
          type="text"
          id="table-search-users"
          className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-50 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Izlash..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <AddCategoriesCom/>
      </div>
      <div className=" overflow-x-auto h-[80vh]">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="  shadow-zinc-800 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-white-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                Mahsulod turi rasmi
              </th>
              <th scope="col" class="p-4">
                Mahsulod turi nomi
              </th>
              <th scope="col" class="p-4">
                action
              </th>
            </tr>
            {[...categories].reverse()?.map((value) => {
              return (
                <tr>
                  <th scope="col" class="p-4">
                    <img
                      className="rounded-2xl  w-[70px] h-[60px]"
                      src={value?.image}
                      alt={value?.title}
                    />
                  </th>
                  <th scope="col" class="p-4">
                    {value?.title}
                  </th>
                  <th scope="col" class="p-4 flex gap-2">
                    <div className="flex items-center space-x-4">
                      <DeleteCategorieCom/>
                    </div>
                  </th>
                </tr>
              );
            })}
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <table class="w-full  overflow-y-scroll  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      </table>
    </div>
  );
};

export default TableCom;
