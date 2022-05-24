import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    addNewClient: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { addNewClient } = clientsSlice.actions;

export const getAllClientsSelector = (state) => state.clients.data;

export default clientsSlice.reducer;
