export const getCurrentDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

export const generateOrderNumber = () => {
  return `JP-${Math.floor(10000 + Math.random() * 90000)}`;
};
