// api.js
import { createApi,  } from '@reduxjs/toolkit/query/react';
import { api } from '../../../../Api/api';

export const ProductCrud = createApi({
    baseQuery:api,
    reducerPath: 'ProductData',
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products/',
            providesTags: ['Product'],
        }),
        createProduct: builder.mutation({
            query: (body) => ({
                url: `products/`,
                method: "POST",
                body,
            }),
            invalidatesTags: ['Product'],
        }),
        deleteProduct: builder.mutation({
            query: (body) => ({
                url: `products/body.id}`,
                method: 'DELETE',
                body,
            }),
            invalidatesTags: ['Product']
        }),
    }),
});

export const {
    useGetProductsQuery,
    useCreateProductMutation,
    useDeleteProductMutation
} = ProductCrud;