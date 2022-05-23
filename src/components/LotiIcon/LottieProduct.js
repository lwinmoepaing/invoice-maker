import React from "react";
import Lottie from "lottie-react";
import json from "../../lotties/lottie-product.json";

function LottieProduct(prop) {
  return <Lottie animationData={json} {...prop} />;
}

export default LottieProduct;
