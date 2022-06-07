export const sumProductTotal = (updateProducts) => {
  const total =
    updateProducts.reduce((prev, product) => {
      const strValue = (product.quantity * product.amount)
        .toFixed(4)
        .toString()
        .slice(0, -2);

      return parseFloat(strValue) + prev;
    }, 0) || 0;
  return total;
};

export const sumTotalTaxWithoutPercent = (taxes) => {
  return (
    taxes
      ?.filter((tax) => tax.type !== "percentage")
      ?.reduce((prev, tx) => {
        return prev + parseFloat(tx.amount);
      }, 0) || 0
  );
};

export const getTotalTaxesWithPercent = (taxes, subTotalAmount) => {
  const isFindIndex = taxes.findIndex((tax) => tax.type === "percentage");
  if (isFindIndex !== -1) {
    let updatedTaxes = [...taxes];
    const amount = (taxes[isFindIndex].value / 100) * subTotalAmount;
    updatedTaxes[isFindIndex] = {
      ...updatedTaxes[isFindIndex],
      amount,
    };
    return [...updatedTaxes];
  }
  return taxes;
};

export const sumTotalTaxes = (taxes) => {
  return (
    taxes?.reduce((prev, tx) => {
      return prev + parseFloat(tx.amount);
    }, 0) || 0
  );
};

export const sumTotalAmount = (subTotal, taxAmount) => {
  const total = parseFloat(subTotal) + parseFloat(taxAmount);

  return Number.isInteger(total)
    ? total
    : total?.toFixed(4)?.toString()?.slice(0, -2);
};
