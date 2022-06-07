import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import App from "./App";
import { store } from "./store/configStore";
import { Provider } from "react-redux";
import { AppContextProvider } from "./context/AppContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContextProvider>
  </React.StrictMode>
);
