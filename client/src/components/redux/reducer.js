import { GET_COUNTRIES, FILTER_BY_REGION, GET_ACTIVITY } from "./action-types";

const initialState = {
  allCountries: [],
  allCountriesAux: [],
  allActivities: [],
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: actions.payload,
        allCountriesAux: actions.payload,
      };

    case GET_ACTIVITY:
      return { ...state, allActivities: actions.payload };

    case FILTER_BY_REGION:
      const allCountries = state.allCountriesAux;
      const filtered =
        actions.payload === "All"
          ? allCountries
          : allCountries.filter((c) => c.region === actions.payload);
      console.log(filtered);
      return {
        ...state,
        allCountries: filtered,
      };

    default:
      return { ...state };
  }
};
export default reducer;
