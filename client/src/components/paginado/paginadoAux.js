const paginadoAux = (currentPage, countriesPerPage, allCountries) => {
  const indexLastCountry = currentPage * countriesPerPage; // 10
  const indexFirstCountry = indexLastCountry - countriesPerPage; //0
  const currentCountries = allCountries.slice(
    indexFirstCountry,
    indexLastCountry
  );
  return currentCountries;
};
export default paginadoAux;
