const errorOrder = (currentCountries, setOrders) => {
  if (currentCountries.length === 1) {
    setOrders("");
    alert("You cannot sort to a single country");
  } else {
    return;
  }
};

export default errorOrder;
