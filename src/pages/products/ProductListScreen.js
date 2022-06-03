import React from "react";
import PageTitle from "../../components/Common/PageTitle";
import ProductTable from "../../components/Product/ProductTable";
import QuickAddProduct from "../../components/Product/QuickAddProduct";

function ProductListScreen() {
  return (
    <div>
      <div className="p-4">
        <PageTitle title="Products" />
      </div>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-4/6 pl-4 pr-4 sm:pl-4 sm:pr-0 mb-4 sm:mb-1">
          <ProductTable showAdvanceSearch />
        </div>
        <div className="w-full lg:w-2/6 pl-4 pr-4 sm:pl-4 sm:pr-2">
          <QuickAddProduct />
        </div>
      </div>
    </div>
  );
}

export default ProductListScreen;
