import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import DashboardScreen from "./pages/DashboardScreen";
import ClientListScreen from "./pages/clients/ClientListScreen";
import ProductListScreen from "./pages/products/ProductListScreen";
import InvoiceListScreen from "./pages/invoices/InvoiceListScreen";
import InvoiceDetailScreen from "./pages/invoices/InvoiceDetailScreen";
import AboutScreen from "./pages/about/AboutScreen";
import Container from "./components/Container/Container";
import useInitApp from "./hook/useInitApp";
import ClientDeleteConfirm from "./components/Clients/ClientDeleteConfirm";
import ClientEditModal from "./components/Clients/ClientEditModal";
import ProductDeleteConfirm from "./components/Product/ProductDeleteConfirm";
import ProductEditModal from "./components/Product/ProductEditModal";
import ClientChooseModal from "./components/Clients/ClientChooseModal";
import ProductChoosenModal from "./components/Product/ProductChoosenModal";
import InvoiceSettingModal from "./components/Invoice/InvoiceSettingModal";
import InvoiceConfirmModal from "./components/Invoice/InvoiceConfirmModal";
import InvoiceDeleteConfirm from "./components/Invoice/InvoiceDeleteConfirm";
import PageLoading from "./components/Common/PageLoading";

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

          <Route path="clients" element={<ClientListScreen />}></Route>

          <Route path="products" element={<ProductListScreen />}></Route>

          <Route path="invoices">
            <Route path="" element={<InvoiceListScreen />} exact />
            <Route path=":id" element={<InvoiceDetailScreen />} />
          </Route>

          <Route path="about" element={<AboutScreen />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
      <ToastContainer />
      <ClientDeleteConfirm />
      <ClientEditModal />
      <ClientChooseModal />
      <ProductDeleteConfirm />
      <ProductEditModal />
      <ProductChoosenModal />
      <InvoiceSettingModal />
      <InvoiceConfirmModal />
      <InvoiceDeleteConfirm />
      <PageLoading />
    </BrowserRouter>
  );
};

export default App;
