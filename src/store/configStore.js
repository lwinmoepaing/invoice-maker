import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./clientSlice";
import productRedicer from "./productSlice";
import companyReducer from "./companySlice";
import invoiceReducer from "./invoiceSlice";

export const store = configureStore({
  reducer: {
    clients: clientsReducer,
    company: companyReducer,
    products: productRedicer,
    invoices: invoiceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
