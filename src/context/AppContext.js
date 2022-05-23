import AppDataJson from "../shared/AppData.json";
import * as React from "react";

const initData = {
  ...AppDataJson,
  toggleNavbar: () => {},
};

export const AppCtx = React.createContext(initData);

export const AppContextProvider = ({ children }) => {
  const [state, setState] = React.useState(initData);

  const toggleNavbar = React.useCallback(() => {
    setState((prev) => ({
      ...prev,
      showNavbar: !prev?.showNavbar,
    }));
  }, []);

  return (
    <AppCtx.Provider
      value={{
        ...state,
        toggleNavbar,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};

export const useAppContext = () => React.useContext(AppCtx);
