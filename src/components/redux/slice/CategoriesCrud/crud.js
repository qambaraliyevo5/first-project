// import { createApi } from "@reduxjs/toolkit/query/react";
// import { apiUrl } from "../../../../Api/api";


// export const CategoryCrud = createApi({
//     reducerPath: "getCategorytData",
//     baseQuery: apiUrl,
//     tagTypes: ["getCategoryt"],
//     endpoints: (build) => ({
//         getCategory: build.query({
//             query: (body) => "categories/",
//             providesTags: ["getCategoryt"],
//         }),
//         getProductId: build.query({
//             query: (body) => ({
//                 url: `categories/${body.id}/get_products/?category=true`,
//                 method: "GET",
//             }),
//             invalidatesTags: ["getCategoryt"],
//         }),

//         createCategoria: build.mutation({
//             query: (body) => ({
//                 url: 'categories/',
//                 method: 'POST',
//                 body,
//             }),
//             invalidatesTags: ["getCategoryt"]
//         }),
//         updateCategorie: build.mutation({
//             query: (body) => ({
//                 url: `categories/${body.get("id")}/`,
//                 method: "PATCH",
//                 body,
//             }),
//             invalidatesTags: ["getCategoryt"],
//         }),

//         deleteCategorie: build.mutation({
//             query: (body) => ({
//                 url: `categories/${body.id}/`,
//                 method: "DELETE",
//                 body,
//             }),
//             invalidatesTags: ["getCategoryt"],
//         }),
//     }),
// });

// export const {
//     useGetCategoryQuery,
//     useGetProductIdQuery,
//     useCreateCategoriaMutation,
//     useDeleteCategorieMutation,
//     useUpdateCategorieMutation,
// } = CategoryCrud;


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api, apiUrl } from '../../../../Api/api';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: api, // Replace with your actual API base URL
  tagTypes: ['Category'],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'categories/',
      providesTags: ['Category'],
    }),
    createCategory: builder.mutation({
      query: (newCategory) => ({
        url: 'categories/',
        method: 'POST',
        body: newCategory,
      }),
      invalidatesTags: ['Category'],
    }),
    updateCategory: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `categories/${id}/`,
        method: 'PATCH',
        body: rest,
      }),
      invalidatesTags: ['Category'],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `categories/${id}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Category'],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoriesApi;
