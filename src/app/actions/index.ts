export const getCurrentDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

export const generateOrderNumber = () => {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000);
  return `${timestamp}-${randomNum}`;
};
