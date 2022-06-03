import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import DashboardScreen from "./pages/DashboardScreen";
import ClientListScreen from "./pages/clients/ClientListScreen";
import ClientDetailScreen from "./pages/clients/ClientDetailScreen";
import ProductListScreen from "./pages/products/ProductListScreen";
import ProductDetailScreen from "./pages/products/ProductDetailScreen";
import InvoiceListScreen from "./pages/invoices/InvoiceListScreen";
import InvoiceDetailScreen from "./pages/invoices/InvoiceDetailScreen";
import TermAndConditionScreen from "./pages/terms-and-conditions/TermAndConditionScreen";
import Container from "./components/Container/Container";
import useInitApp from "./hook/useInitApp";
import ClientDeleteConfirm from "./components/Clients/ClientDeleteConfirm";
import ClientEditModal from "./components/Clients/ClientEditModal";

const App = () => {
  const { initialSetData } = useInitApp();

  useEffect(() => {
    initialSetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<DashboardScreen />} />

          <Route path="clients" element={<ClientListScreen />}>
            <Route path=":id" element={<ClientDetailScreen />} />
          </Route>

          <Route path="products" element={<ProductListScreen />}>
            <Route path=":id" element={<ProductDetailScreen />} />
          </Route>

          <Route path="invoices" element={<InvoiceListScreen />}>
            <Route path=":id" element={<InvoiceDetailScreen />} />
          </Route>

          <Route
            path="terms-and-condition"
            element={<TermAndConditionScreen />}
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
      <ToastContainer />
      <ClientDeleteConfirm />
      <ClientEditModal />
    </BrowserRouter>
  );
};

export default App;
