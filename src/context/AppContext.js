import AppDataJson from "../shared/AppData.json";
import * as React from "react";
import localforage from "localforage";
import { APP_CONTEXT } from "../constants/localKeys";

const initData = {
  ...AppDataJson,
  toggleNavbar: () => {},
  setEscapeOverflow: (boolean) => {},
  setInitLoading: (boolean) => {},
  setScreenLoading: (boolean) => {},
};

export const AppCtx = React.createContext(initData);

export const AppContextProvider = ({ children }) => {
  const [state, setState] = React.useState(initData);

  const toggleNavbar = React.useCallback(() => {
    setState((prev) => {
      const updateData = {
        ...prev,
        showNavbar: !prev?.showNavbar,
      };

      const { darkTheme, initLoading, showNavbar } = updateData;
      localforage.setItem(APP_CONTEXT, { darkTheme, initLoading, showNavbar });
      return updateData;
    });
  }, []);

  const setInitLoading = React.useCallback((boolean) => {
    setState((prev) => ({
      ...prev,
      initLoading: boolean,
    }));
  }, []);

  const setScreenLoading = React.useCallback((boolean) => {
    setState((prev) => ({
      ...prev,
      screenLoading: boolean,
    }));
  }, []);

  const setEscapeOverflow = React.useCallback((boolean) => {
    setState((prev) => ({ ...prev, escapeOverflow: boolean }));
  }, []);

  React.useEffect(() => {
    (async () => {
      const appContext = await localforage.getItem(APP_CONTEXT);
      if (appContext) {
        setState((prev) => ({ ...prev, showNavbar: appContext.showNavbar }));
      }
    })();
  }, []);

  return (
    <AppCtx.Provider
      value={{
        ...state,
        toggleNavbar,
        setInitLoading,
        setScreenLoading,
        setEscapeOverflow,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};

export const useAppContext = () => React.useContext(AppCtx);
