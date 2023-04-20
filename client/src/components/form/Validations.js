//Validaciones
const validate = (state, errorState) => {
  const errors = { ...errorState };

  if (!state.name) {
    errors.name = "*Missing name";
  } else {
    errors.name = "";
  }

  if (!state.duration) {
    errors.duration = "*Add numbers.";
  } else if (isNaN(state.duration)) {
    errors.duration = "*Only numbers";
  } else {
    errors.duration = "";
  }

  if (!state.difficulty) {
    errors.difficulty = "*Select";
  } else {
    errors.difficulty = "";
  }

  if (!state.season) {
    errors.season = "*Select";
  } else {
    errors.season = "";
  }

  if (!state.country.length) {
    errors.country = "*Select at least one";
  } else {
    errors.country = "";
  }

  return errors;
};
export default validate;
