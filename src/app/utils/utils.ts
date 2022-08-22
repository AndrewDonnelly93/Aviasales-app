// For converting time
export const formatTime = (unixTimestamp: number, format?: string) => {
  const date = new Date(unixTimestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedMinutes = minutes.toString().slice(-2);
  if (format === "numeric") {
    return `${hours}:${formattedMinutes}`;
  }
  return `${hours}h ${formattedMinutes}`;
};

// For formatting prices
export const currencyFormatter = (
  price: number,
  locale: string,
  currency: string
) => {
  const formattedPrice = new Intl.NumberFormat(`${locale}`, {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
    signDisplay: "never",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formattedPrice.format(price);
};
