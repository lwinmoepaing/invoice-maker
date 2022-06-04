import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InvoiceTopBar from "../../components/Invoice/InvoiceTopBar";
import imageData from "../../shared/imageData.json";
import colorData from "../../shared/colorData.json";
import { getInvoiceNewForm } from "../../store/invoiceSlice";
import { useSelector } from "react-redux";
import { getCompanyData } from "../../store/companySlice";

const emptyNewForm = {
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
  companyDetail: {
    id: nanoid(),
    image: "",
    billingAddress: "",
    companyName: "",
    companyEmail: "",
    companyMobile: "",
  },
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
};

function InvoiceDetailScreen(props) {
  const params = useParams();
  const navigate = useNavigate();

  const [invoiceForm, setInvoiceForm] = useState(emptyNewForm);
  const invoiceNewForm = useSelector(getInvoiceNewForm);
  const company = useSelector(getCompanyData);

  useEffect(() => {
    if (params.id === "new") {
      // If New I ignore Company Data,
      // Everytime we set current company Data
      setInvoiceForm({ ...invoiceNewForm, companyDetail: { ...company } });
    } else {
      // Else Exisiting Invoice,
      // We'll Set Company Data
      // But if it's Draft, we'll currenty set the data for Current Company Data
      // Because it's still Draft State

      // If not Found Redirect Back
      navigate("/");
    }
  }, [params, invoiceNewForm, company, navigate]);

  return (
    <div>
      <div className="p-4">
        <InvoiceTopBar />
      </div>

      <div className="bg-white mx-4 rounded-xl" id="InvoiceWrapper">
        <div
          className="py-6 px-8 bg-cover bg-center bg-slate-50 rounded-xl flex flex-col sm:flex-row justify-between items-center"
          style={{
            backgroundImage: `url(${invoiceForm.backgroundImage.base64})`,
          }}
        >
          <div className="flex flex-col sm:flex-row items-center ">
            {invoiceForm.companyDetail.image ? (
              <img
                className="object-contain h-20 w-20 mr-3 rounded"
                alt={invoiceForm.companyDetail.companyName}
                src={invoiceForm.companyDetail.image}
              />
            ) : (
              <span></span>
            )}

            <div className="text-white font-title text-center sm:text-left">
              <p className="font-bold mb-2">
                {invoiceForm.companyDetail.companyName || "Company Name"}
              </p>
              <p className="text-sm font-medium">
                {invoiceForm.companyDetail.billingAddress ||
                  "Plz add First Company Data"}
              </p>
              <p className="text-sm font-medium">
                {invoiceForm.companyDetail.companyMobile || "Company Ph"}
              </p>
              <p className="text-sm font-medium">
                {invoiceForm.companyDetail.companyEmail || "Company@email.com"}
              </p>
            </div>
          </div>
          <div className="text-white font-title font-bold text-5xl mt-5 sm:mt-0">
            Invoice
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetailScreen;
