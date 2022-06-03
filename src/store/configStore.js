import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./clientSlice";
import productRedicer from "./productSlice";
import companyReducer from "./companySlice";

export const store = configureStore({
  reducer: {
    clients: clientsReducer,
    company: companyReducer,
    products: productRedicer,
  },
});
