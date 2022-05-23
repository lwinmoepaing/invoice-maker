import React from "react";
import Lottie from "lottie-react";
import json from "../../lotties/invoice-loading.json";

function InvoiceLoading(prop) {
  return <Lottie animationData={json} {...prop} />;
}

export default InvoiceLoading;
