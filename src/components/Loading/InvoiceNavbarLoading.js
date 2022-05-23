import React from "react";
import Lottie from "lottie-react";
import json from "../../lotties/invoice-navbar.json";

function InvoiceNavbarLoading(prop) {
  return <Lottie animationData={json} {...prop} />;
}

export default InvoiceNavbarLoading;
