import {
  GET_COUNTRIES,
  FILTER_BY_REGION,
  GET_ACTIVITY,
  ORDEN_ALPHA,
  ORDEN_POPULATION,
  GET_COUNTRY_BY_NAME,
  FILTER_BY_ACTIVITY,
} from "./action-types";

const initialState = {
  allCountries: [],
  allCountriesAux: [],
  allActivities: [],
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    //getters

    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: actions.payload,
        allCountriesAux: actions.payload,
      };

    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        allCountries: actions.payload,
      };

    case GET_ACTIVITY:
      return { ...state, allActivities: actions.payload };

    //FILTERS

    case FILTER_BY_REGION:
      const allCountries = state.allCountriesAux;
      const filtered =
        actions.payload === "All countries"
          ? allCountries
          : allCountries.filter((c) => c.region === actions.payload);

      return {
        ...state,
        allCountries: filtered,
      };

    case FILTER_BY_ACTIVITY:
      const activities = [...state.allActivities];
      const countries = [...state.allCountriesAux];
      const matchCountries = [];

      const filterActivity = activities.find((a) => a.name === actions.payload);

      filterActivity.Countries.forEach((activityCountry) => {
        const matchingCountry = countries.find((country) => {
          return country.name === activityCountry.name;
        });
        matchCountries.push(matchingCountry);
      });
      return {
        ...state,
        allCountries: [...matchCountries],
      };

    //ORDER

    case ORDEN_ALPHA:
      const alphabetic = [...state.allCountries];
      let order = alphabetic;
      if (actions.payload === "A - Z") {
        order.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (actions.payload === "Z - A") {
        order.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        allCountries: order,
      };

    case ORDEN_POPULATION:
      const population = [...state.allCountries];
      const orderP = population;
      if (actions.payload === "Population: Ascending order") {
        orderP.sort((a, b) => a.population - b.population);
      }
      if (actions.payload === "Population: Descending order") {
        orderP.sort((a, b) => b.population - a.population);
      }
      return {
        ...state,
        allCountries: orderP,
      };

    default:
      return { ...state };
  }
};
export default reducer;
