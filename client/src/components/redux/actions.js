import axios from "axios";
import {
  GET_COUNTRIES,
  GET_ACTIVITY,
  FILTER_BY_REGION,
  ORDEN_ALPHA,
  ORDEN_POPULATION,
  GET_COUNTRY_BY_NAME,
  FILTER_BY_ACTIVITY,
} from "./action-types";

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

export const getCountryByName = (name) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );
      return dispatch({ type: GET_COUNTRY_BY_NAME, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterByRegion = (payload) => {
  return {
    type: FILTER_BY_REGION,
    payload,
  };
};

export const orderAlpha = (payload) => {
  return {
    type: ORDEN_ALPHA,
    payload,
  };
};

export const orderPopulation = (payload) => {
  return {
    type: ORDEN_POPULATION,
    payload,
  };
};

export const filterByActivity = (payload) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload,
  };
};
