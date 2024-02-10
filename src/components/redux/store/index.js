<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { GetProducts } from "../slice/client/getProduct";

export const store = configureStore({
    reducer: {
        [GetProducts.reducerPath]:GetProducts.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
          GetProducts.middleware
        ),
});

setupListeners(store.dispatch);
=======
// import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
// import { ProductCrud } from '../slice/product'
// import { categoriesApi, useCreateCategoryMutation } from '../slice/CategoriesCrud/crud'



// export const store = configureStore({
//   reducer: {
//     [ProductCrud.reducerPath]: ProductCrud.reducer,
//     [useCreateCategoryMutation.reducerPath]: useCreateCategoryMutation.reducer,
//     [categoriesApi.reducerPath]: categoriesApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware()
//     .concat(ProductCrud.middleware,
//       useCreateCategoryMutation.middleware,
//       ),
// })
// setupListeners(store.dispatch)

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { categoriesApi } from '../slice/CategoriesCrud/crud';
import { ProductCrud } from '../slice/product';

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [ProductCrud.reducerPath] :ProductCrud.reducer,

    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      ProductCrud.middleware,
      ), 
  

});

setupListeners(store.dispatch);
>>>>>>> 0a32c754a455ad9ab69c2c8b8e1a682147036177
