export const dateConverter = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};


export const applyDiscount = (price) => {
  if (price < 1000) {
    return price * 0.8; 
  }
  return price * 0.5;  
}