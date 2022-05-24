import React from "react";
import PageTitle from "../components/Common/PageTitle";
import DashboardWidgets from "../components/Dashboard/DashboardWidgets";
import InvoiceIcon from "../components/Icons/InvoiceIcon";
import Button from "../components/Button/Button";
import QuickEditCompany from "../components/Dashboard/QuickEditCompany";

function DashboardScreen() {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-3/5 p-4">
          <PageTitle title="Dashboard" />

          <div className="mt-2">
            <DashboardWidgets />
          </div>
        </div>
        <div className="w-full lg:w-2/5 p-4">
          <div>
            <Button>
              <InvoiceIcon />
              <span className="inline-block ml-2"> Add New Invoice </span>
            </Button>
          </div>

          <QuickEditCompany />
        </div>
      </div>
    </div>
  );
}

export default DashboardScreen;
