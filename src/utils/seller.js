export const calculateNetClosingCost = (sellerData, setNetClosing) => {
  const {
    salesPrice,
    brokerFee,
    survey,
    stateText,
    attorneyFee,
    propertyTaxes,
    mortgagePayoff,
    cityTransferTax,
    buyerToSellerAssociationProration,
    buyerToSellerFuelProration,
  } = sellerData;
  const mortgageAmount = (Number(mortgagePayoff) / 100) * Number(salesPrice);
  const sellerDebit =
    Number(salesPrice) +
    Number(brokerFee) +
    Number(survey) +
    Number(stateText) +
    Number(attorneyFee) +
    Number(propertyTaxes) +
    mortgageAmount +
    Number(cityTransferTax);
  const sellerCredit =
    Number(buyerToSellerAssociationProration) +
    Number(buyerToSellerFuelProration);

  setNetClosing((sellerCredit - sellerDebit).toFixed(2));
};

export const documentaryStampTax = (sellerData, setStampText) => {
  const { salesPrice } = sellerData;
  const multiplier = Math.floor(salesPrice / 100);
  const adjustedMultiplier =
    salesPrice % 100 === 0 ? multiplier - 1 : multiplier;
  const tax = 0.7 * (adjustedMultiplier + 1);
  setStampText(tax.toFixed(2));
};

export const calculateProratedText = (sellerData, setproratedTex) => {
  const closingDate = new Date(
    sellerData.closingDate.split("/").reverse().join("-")
  );

  const currentDate = new Date();
  const days = Math.floor(
    (closingDate.getTime() -
      new Date(currentDate.getFullYear(), 0, 1).getTime()) /
      (1000 * 3600 * 24)
  );

  // calculate daily text rate
  const dailyTextRate = sellerData.stateText / 365;

  // Prorated Taxes=Daily Tax Rate×Number of Days to Closing
  const proratedTaxesPercentage = dailyTextRate * days;
  const proratedTaxesInDecimal = proratedTaxesPercentage / 100;
  const proratedTaxes = proratedTaxesInDecimal * sellerData.salesPrice;
  setproratedTex(proratedTaxes.toFixed(2));
};
