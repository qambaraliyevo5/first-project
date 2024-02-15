// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api } from '../../../../Api/api';


export const ProductCrud = createApi({
    baseQuery:api,
    reducerPath: 'FamousData',
    tagTypes: ['Famous'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products/',
            providesTags: ['Famous'],
        }),
        createFamous: builder.mutation({
            query: (body) => ({
                url: `products/`,
                method: "POST",
                body,
            }),
            invalidatesTags: ['Famous'],
        }),
        deleteFamous: builder.mutation({
            query: (body) => ({
                url: `products/body.id}`,
                method: 'DELETE',
                body,
            }),
            invalidatesTags: ['Famous']
        }),
    }),
});

export const {
    useGetProductsQuery,
    useDeleteFamousMutation,
    useCreateFamousMutation,
} = ProductCrud;