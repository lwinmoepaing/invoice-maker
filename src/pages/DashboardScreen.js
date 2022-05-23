import React from "react";
import PageTitle from "../components/Common/PageTitle";
import DashboardWidgets from "../components/Dashboard/DashboardWidgets";

function DashboardScreen() {
  return (
    <div>
      <PageTitle title="Dashboard" />
      <div class="flex flex-wrap">
        <div class="w-full lg:w-3/5 p-4">
          <DashboardWidgets />
        </div>
        <div class="w-full lg:w-2/5 p-4 text-red bg-white rounded-xl mt-4">
          <PageTitle title="Some Quick Actions" />
        </div>
      </div>
    </div>
  );
}

export default DashboardScreen;
