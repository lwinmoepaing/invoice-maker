import React from "react";
import Lottie from "lottie-react";
import json from "../../lotties/invoice-paper.json";

function LottieInvoice(prop) {
  return <Lottie animationData={json} {...prop} />;
}

export default LottieInvoice;
