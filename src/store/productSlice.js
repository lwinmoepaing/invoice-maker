import { createSlice } from "@reduxjs/toolkit";
import localforage from "localforage";
import { nanoid } from "nanoid";
import { PRODUCTS_KEY, PRODUCT_FORM_KEY } from "../constants/localKeys";

const initialState = {
  openProductSelector: false,
  selectedProduct: null,
  data: [],
  newForm: {
    id: nanoid(),
    productID: "",
    image: "",
    name: "",
    amount: 0,
  },
  editedID: null,
  deletedID: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addNewProduct: (state, action) => {
      const newDatas = [...state.data, action.payload];
      state.data = newDatas;
      localforage.setItem(PRODUCTS_KEY, newDatas);

      const reNewForm = {
        id: nanoid(),
        image: "",
        productID: "",
        name: "",
        amount: 0,
      };

      state.newForm = { ...reNewForm };
      localforage.setItem(PRODUCT_FORM_KEY, reNewForm);
    },

    updateNewProductForm: (state, action) => {
      state.newForm = { ...action.payload };
      localforage.setItem(PRODUCT_FORM_KEY, { ...state.newForm });
    },

    updateNewProductFormField: (state, action) => {
      state.newForm[action.payload.key] = action.payload.value;
      localforage.setItem(PRODUCT_FORM_KEY, { ...state.newForm });
    },

    setAllProducts: (state, action) => {
      state.data = action.payload;
    },

    setDeleteId: (state, action) => {
      state.deletedID = action.payload;
    },

    setEditedId: (state, action) => {
      state.editedID = action.payload;
    },

    onConfirmDeletedProduct: (state, action) => {
      const newDatas = state.data.filter(
        (product) => product.id !== state.deletedID
      );
      state.data = newDatas;
      state.deletedID = null;
      localforage.setItem(PRODUCTS_KEY, newDatas);
    },

    onConfirmEditProduct: (state, action) => {
      const isFindIndex = state.data.findIndex(
        (product) => product.id === state.editedID
      );
      if (isFindIndex !== -1) {
        state.data[isFindIndex] = { ...action.payload };
      }
      state.editedID = null;
      localforage.setItem(PRODUCTS_KEY, [...state.data]);
    },

    setOpenProductSelector: (state, action) => {
      state.openProductSelector = action.payload;
      if (!action.payload) {
        state.selectedProduct = null;
      }
    },

    setProductSelector: (state, action) => {
      const isFindIndex = state.data.findIndex(
        (product) => product.id === action.payload
      );
      if (isFindIndex !== -1) {
        state.selectedProduct = state.data[isFindIndex];
      }
    },
  },
});

export const {
  addNewProduct,
  updateNewProductForm,
  updateNewProductFormField,
  setAllProducts,
  setDeleteId,
  setEditedId,
  onConfirmDeletedProduct,
  onConfirmEditProduct,
  setOpenProductSelector,
  setProductSelector,
} = productSlice.actions;

export const getAllProductSelector = (state) => state.products.data;

export const getProductNewForm = (state) => state.products.newForm;

export const getDeletedProductForm = (state) => state.products.deletedID;

export const getEditedIdForm = (state) => state.products.editedID;

export const getIsOpenProductSelector = (state) =>
  state.products.openProductSelector;

export const getSelectedProduct = (state) => state.products.selectedProduct;

export default productSlice.reducer;
