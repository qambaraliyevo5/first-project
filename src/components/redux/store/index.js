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