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
  isConfirmModal: false,
  isConfirm: false,
  settingOpen: false,
  defaultColor: colorData[0],
  defaultBgImage: imageData[0],
  colors: colorData,
  images: imageData,
  data: [],
  detailList: [],
  deletedID: null,
  currentEditedID: null,
  newForm: {
    id: nanoid(),
    invoiceNo: "",
    statusIndex: "1",
    statusName: "Draft",
    totalAmount: 1200,
    color: colorData[0],
    backgroundImage: imageData[0],
    dueDate: new Date(),
    createdDate: new Date(),
    currencyUnit: "$",
    clientDetail: {
      id: "",
      name: "",
      mobileNo: "",
      email: "",
      image: "",
      billingAddress: "",
    },
    products: [
      {
        amount: 1200,
        id: "D9vPlvwg11cxYJToEf3x4",
        name: "productName",
        productID: "",
        quantity: 1,
      },
    ],
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
      state.detailList = [...action.payload];
    },

    setNewInvoices: (state, action) => {
      const { payload } = action;

      const id = nanoid();

      const {
        invoiceNo,
        statusIndex,
        statusName,
        totalAmount,
        dueDate,
        createdDate,
        clientDetail,
      } = payload;

      const newInvoice = {
        id,
        invoiceNo,
        statusIndex,
        statusName,
        totalAmount,
        dueDate,
        createdDate,
        clientName: clientDetail?.name,
      };

      const updateState = [...state.data, newInvoice];
      state.data = updateState;
      localforage.setItem(INVOICES_KEY, updateState);

      const newDetailList = [...state.detailList, { ...payload, id }];
      state.detailList = newDetailList;
      localforage.setItem(INVOICE_DETAILS, newDetailList);
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

      const newDetails = state.detailList.filter(
        (invoice) => invoice.id !== state.deletedID
      );

      state.deletedID = null;
      localforage.setItem(INVOICES_KEY, newDatas);
      localforage.setItem(INVOICE_DETAILS, newDetails);
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

    updateNewInvoiceFormField: (state, action) => {
      state.newForm[action.payload.key] = action.payload.value;
      const newForm = { ...state.newForm };
      localforage.setItem(
        INVOICE_FORM_KEY,
        JSON.parse(JSON.stringify(newForm))
      );
    },

    updateNewInvoiceForm: (state, action) => {
      state.newForm = { ...action.payload };
      localforage.setItem(INVOICE_FORM_KEY, { ...state.newForm });
    },

    updateExisitingInvoiceForm: (state, action) => {
      const {
        id,
        invoiceNo,
        statusIndex,
        statusName,
        totalAmount,
        dueDate,
        createdDate,
        clientDetail,
      } = action.payload;

      const findIndexOfList = state.data.findIndex(
        (product) => product.id === id
      );

      const newInvoice = {
        id,
        invoiceNo,
        statusIndex,
        statusName,
        totalAmount,
        dueDate,
        createdDate,
        clientName: clientDetail?.name,
      };

      if (findIndexOfList !== -1) {
        state.data[findIndexOfList] = { ...newInvoice };
      }
      const findIndexOfDetail = state.detailList.findIndex(
        (product) => product.id === id
      );

      if (findIndexOfDetail !== -1) {
        state.detailList[findIndexOfDetail] = { ...action.payload };
      }

      localforage.setItem(INVOICES_KEY, [...state.data]);
      localforage.setItem(INVOICE_DETAILS, [...state.detailList]);
    },

    setSettingModalOpen: (state, action) => {
      state.settingOpen = action.payload;
    },

    setConfirmModalOpen: (state, action) => {
      state.isConfirmModal = action.payload;
    },

    setIsConfirm: (state, action) => {
      state.isConfirm = action.payload;
    },
  },
});

export const {
  setAllInvoice,
  setAllInvoiceDetailList,
  setNewInvoices,
  setDefaultColor,
  setDefaultBackground,
  setDeleteId,
  setEditedId,
  setSettingModalOpen,
  setConfirmModalOpen,
  setIsConfirm,
  onConfirmDeletedInvoice,
  onConfirmEditInvoice,
  updateNewInvoiceForm,
  updateNewInvoiceFormField,
  updateExisitingInvoiceForm,
} = invoiceSlice.actions;

export const getAllInvoiceSelector = (state) => state.invoices.data;

export const getAllColorSelector = (state) => state.invoices.colors;

export const getAllImageSelector = (state) => state.invoices.images;

export const getCurrentBGImage = (state) => state.invoices.defaultBgImage;

export const getCurrentColor = (state) => state.invoices.defaultColor;

export const getAllInvoiceDetailSelector = (state) => state.invoices.detailList;

export const getInvoiceDetailByID = (id) => (state) =>
  state.invoices.detailList.find((detail) => detail.id === id);

export const getDeletedInvoiceForm = (state) => state.invoices.deletedID;

export const getInvoiceNewForm = (state) => state.invoices.newForm;

export const getInvoiceSettingModal = (state) => state.invoices.settingOpen;

export const getIsInvoiceConfirmModal = (state) =>
  state.invoices.isConfirmModal;

export const getIsConfirm = (state) => state.invoices.isConfirm;

export const getTotalBalance = (state) =>
  state.invoices.data.reduce((prev, next) => {
    return prev + (next.totalAmount || 0);
  }, 0);

export default invoiceSlice.reducer;
