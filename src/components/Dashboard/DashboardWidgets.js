import React from "react";
import LottieMoney from "../LotiIcon/LottieMoney";
import LottieProduct from "../LotiIcon/LottieProduct";
import LottieInvoice from "../LotiIcon/LottieInvoice";
import LottiePersons from "../LotiIcon/LottiePersons";
import { useSelector } from "react-redux";
import { getAllClientsSelector } from "../../store/clientSlice";
import { getAllProductSelector } from "../../store/productSlice";
import {
  getAllInvoiceSelector,
  getTotalBalance,
} from "../../store/invoiceSlice";
import NumberFormat from "react-number-format";

function DashboardWidgets() {
  const clients = useSelector(getAllClientsSelector);
  const products = useSelector(getAllProductSelector);
  const totalBalance = useSelector(getTotalBalance);
  const allInvoices = useSelector(getAllInvoiceSelector);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-3 md:w-1/2">
          <div className="p-4 bg-white rounded-xl md:mr-4 hover:shadow-sm">
            <div className="font-title">Total Balance</div>
            <div className="flex justify-between items-center">
              {/* Icon */}
              <div className="h-30">
                <LottieMoney loop className="h-20" />
              </div>
              {/* Icon Finished */}
              <div className="text-2xl mr-2">
                <NumberFormat
                  value={totalBalance}
                  className=""
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value, props) => <span {...props}>{value}</span>}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-3 md:w-1/2">
          <div className="p-4 bg-white rounded-xl hover:shadow-sm">
            <div className="font-title">Total Products</div>
            <div className="flex justify-between items-center">
              {/* Icon */}
              <div className="h-30">
                <LottieProduct loop className="h-20" />
              </div>
              {/* Icon Finished */}
              <div className="text-2xl mr-2">
                <NumberFormat
                  value={products?.length}
                  className=""
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value, props) => <span {...props}>{value}</span>}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-3 md:w-1/2">
          <div className="p-4 bg-white rounded-xl md:mr-4 hover:shadow-sm">
            <div className="font-title">Total Invoices</div>
            <div className="flex justify-between items-center">
              {/* Icon */}
              <div className="h-30">
                <LottieInvoice loop className="h-20" />
              </div>
              {/* Icon Finished */}
              <div className="text-2xl mr-2">
                <NumberFormat
                  value={allInvoices?.length}
                  className=""
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value, props) => <span {...props}>{value}</span>}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-3 md:w-1/2">
          <div className="p-4 bg-white rounded-xl hover:shadow-sm">
            <div className="font-title">Total Clients</div>
            <div className="flex justify-between items-center">
              {/* Icon */}
              <div className="h-30">
                <LottiePersons loop className="h-20" />
              </div>
              {/* Icon Finished */}
              <div className="text-2xl mr-2">
                <NumberFormat
                  value={clients?.length}
                  className=""
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value, props) => <span {...props}>{value}</span>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardWidgets;
