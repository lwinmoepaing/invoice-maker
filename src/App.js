import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DashboardScreen from "./pages/DashboardScreen";
import ClientListScreen from "./pages/clients/ClientListScreen";
import ClientDetailScreen from "./pages/clients/ClientDetailScreen";
import ProductListScreen from "./pages/products/ProductListScreen";
import ProductDetailScreen from "./pages/products/ProductDetailScreen";
import InvoiceListScreen from "./pages/invoices/InvoiceListScreen";
import InvoiceDetailScreen from "./pages/invoices/InvoiceDetailScreen";
import TermAndConditionScreen from "./pages/terms-and-conditions/TermAndConditionScreen";
import Container from "./components/Container/Container";
function App() {
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
    </BrowserRouter>
  );
}

export default App;
