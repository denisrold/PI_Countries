import axios from "axios";
import { GET_COUNTRIES, GET_ACTIVITY, FILTER_BY_REGION } from "./action-types";

export const getAllCountries = () => {
  return async function (dispatch) {
    await axios
      .get(`http://localhost:3001/countries`)
      .then((res) => dispatch({ type: GET_COUNTRIES, payload: res.data }));
  };
};

export const getAllActivity = () => {
  return async function (dispatch) {
    await axios
      .get(`http://localhost:3001/activities`)
      .then((res) => dispatch({ type: GET_ACTIVITY, payload: res.data }));
  };
};

export const filterByRegion = (payload) => {
  getAllCountries();
  return {
    type: FILTER_BY_REGION,
    payload,
  };
};
