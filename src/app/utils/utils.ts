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
