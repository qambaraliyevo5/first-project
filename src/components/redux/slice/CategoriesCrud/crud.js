import { createApi } from '@reduxjs/toolkit/query/react';
import { api } from '../../../../Api/api';





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
