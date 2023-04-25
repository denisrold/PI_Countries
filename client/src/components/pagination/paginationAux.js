const paginationAux = (currentPage, countriesPerPage, allCountries) => {
  const indexLastCountry = currentPage * countriesPerPage; // last index country  for current page
  const indexFirstCountry = indexLastCountry - countriesPerPage; // first index country for current page
  const currentCountries = allCountries.slice(
    indexFirstCountry,
    indexLastCountry
  );
  return currentCountries;
};
export default paginationAux;
