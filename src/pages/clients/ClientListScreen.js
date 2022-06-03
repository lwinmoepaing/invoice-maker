import React from "react";
import ClientTable from "../../components/Clients/ClientTable";
import PageTitle from "../../components/Common/PageTitle";
import QuickAddClient from "../../components/Dashboard/QuickAddClient";

function ClientListScreen() {
  return (
    <div>
      <div className="p-4">
        <PageTitle title="Clients" />
      </div>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-4/6 pl-4 pr-4 sm:pl-4 sm:pr-0 mb-4 sm:mb-1">
          <ClientTable showAdvanceSearch />
        </div>
        <div className="w-full lg:w-2/6 pl-4 pr-4 sm:pl-4 sm:pr-2">
          <QuickAddClient />
        </div>
      </div>
    </div>
  );
}

export default ClientListScreen;
