import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ProductCrud } from '../slice/product'

export const store = configureStore({
  reducer: {
    [ProductCrud.reducerPath]: ProductCrud.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ProductCrud.middleware
      
      ),
})
setupListeners(store.dispatch)