import localforage from "localforage";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  CLIENTS_KEY,
  CLIENT_FORM_KEY,
  COMPANY_KEY,
  PRODUCT_FORM_KEY,
} from "../constants/localKeys";
import { useAppContext } from "../context/AppContext";
import { updateNewClientForm, setAllClients } from "../store/clientSlice";
import { updateCompanyData } from "../store/companySlice";
import { updateNewProductForm } from "../store/productSlice";

const useInitApp = () => {
  const dispatch = useDispatch();
  const { setInitLoading } = useAppContext();

  const initialSetData = useCallback(async () => {
    try {
      const [companyData, clientNewForm, clients, productNewForm] =
        await Promise.all([
          localforage.getItem(COMPANY_KEY),
          localforage.getItem(CLIENT_FORM_KEY),
          localforage.getItem(CLIENTS_KEY),
          localforage.getItem(PRODUCT_FORM_KEY),
        ]);

      if (companyData) {
        dispatch(updateCompanyData(companyData));
      }

      if (clientNewForm) {
        dispatch(updateNewClientForm(clientNewForm));
      }

      if (clients) {
        dispatch(setAllClients(clients));
      }

      if (productNewForm) {
        dispatch(updateNewProductForm(productNewForm));
      }
    } catch (e) {
      console.log(e);
    } finally {
      setInitLoading(false);
    }
  }, [dispatch, setInitLoading]);

  return {
    initialSetData,
  };
};

export default useInitApp;
