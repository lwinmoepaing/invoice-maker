import { createSlice, nanoid } from "@reduxjs/toolkit";
import localforage from "localforage";
import imageData from "../shared/imageData.json";
import colorData from "../shared/colorData.json";
import {
  INVOICES_KEY,
  DEFAULT_INVOICE_COLOR,
  DEFAULT_INVOICE_BG,
  INVOICE_DETAILS,
  INVOICE_FORM_KEY,
} from "../constants/localKeys";

const initialState = {
  defaultColor: colorData[0],
  colors: colorData,
  defaultBgImage: imageData[0],
  images: imageData,
  data: [],
  detailList: {},
  deletedID: null,
  currentEditedID: null,
  newForm: {
    id: nanoid(),
    invoiceNo: "",
    statusIndex: "1",
    statusName: "Draft",
    totalAmount: 0,
    color: colorData[0],
    backgroundImage: imageData[0],
    dueDate: "",
    createdDate: "",
    currencyUnit: "",
    clientDetail: {
      id: "",
      name: "",
      mobileNo: "",
      email: "",
      image: "",
      billingAddress: "",
    },
    products: [],
    taxes: [],
  },
};

export const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    setAllInvoice: (state, action) => {
      state.data = [...action.payload];
    },

    setAllInvoiceDetailList: (state, action) => {
      state.detailList = { ...action.payload };
    },

    setNewInvoices: (state, action) => {
      const { payload } = action;

      const {
        id,
        invoiceNo,
        statusIndex,
        statusName,
        totalAmount,
        dueDate,
        createdDate,
        clientName,
      } = payload;

      const newInvoice = {
        id,
        invoiceNo,
        statusIndex,
        statusName,
        totalAmount,
        dueDate,
        createdDate,
        clientName,
      };

      const updateState = [...state.data, newInvoice];
      state.data = updateState;
      localforage.setItem(INVOICES_KEY, updateState);

      state.detailList[newInvoice.id] = { ...payload };
      localforage.setItem(INVOICE_DETAILS, { ...state.detailList });
    },

    setDefaultColor: (state, action) => {
      const newColor = action.payload;
      state.defaultColor = newColor;
      localforage.setItem(DEFAULT_INVOICE_COLOR, newColor);
    },

    setDefaultBackground: (state, action) => {
      const newBackground = action.payload;
      state.defaultBgImage = newBackground;
      localforage.setItem(DEFAULT_INVOICE_BG, newBackground);
    },

    setDeleteId: (state, action) => {
      state.deletedID = action.payload;
    },

    setEditedId: (state, action) => {
      state.currentEditedID = action.payload;
    },

    onConfirmDeletedInvoice: (state, action) => {
      const newDatas = state.data.filter(
        (invoice) => invoice.id !== state.deletedID
      );
      state.data = newDatas;
      delete state.detailList[state.deletedID];
      state.deletedID = null;
      localforage.setItem(INVOICES_KEY, newDatas);
      localforage.setItem(INVOICE_DETAILS, { ...state.detailList });
    },

    onConfirmEditInvoice: (state, action) => {
      const isFindIndex = state.data.findIndex(
        (product) => product.id === state.currentEditedID
      );
      if (isFindIndex !== -1) {
        state.data[isFindIndex] = { ...action.payload };
      }
      state.currentEditedID = null;
      localforage.setItem(INVOICES_KEY, [...state.data]);
    },

    updateNewInvoiceForm: (state, action) => {
      state.newForm = { ...action.payload };
      localforage.setItem(INVOICE_FORM_KEY, { ...state.newForm });
    },
  },
});

export const {
  setAllInvoice,
  setNewInvoices,
  setDefaultColor,
  setDefaultBackground,
  setDeleteId,
  setEditedId,
  onConfirmDeletedInvoice,
  onConfirmEditInvoice,
  updateNewInvoiceForm,
} = invoiceSlice.actions;

export const getAllInvoiceSelector = (state) => state.invoices.data;

export const getAllColorSelector = (state) => state.invoices.colors;

export const getAllImageSelector = (state) => state.invoices.images;

export const getCurrentBGImage = (state) => state.invoices.defaultBgImage;

export const getCurrentColor = (state) => state.invoices.defaultColor;

export const getInvoiceDetailByID = (id) => (state) =>
  state.invoices.detailList.find((detail) => detail.id === id);

export const getDeletedInvoiceForm = (state) => state.invoices.deletedID;

export const getInvoiceNewForm = (state) => state.invoices.newForm;

export default invoiceSlice.reducer;
