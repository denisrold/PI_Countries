//Validaciones
const validate = (state, errorState) => {
  const errors = { ...errorState };

  //Country Arrays Errors
  const errorCountry = [];
  state.country.some((c) => {
    if (c.charAt(0) === " ") {
      errorCountry.push(
        "Please remove spaces after the comma in the country input."
      );
      return true;
    } else if (c.charAt(0) === c.charAt(0).toLowerCase()) {
      errorCountry.push("Remember to respect the capital letters.");
      return true;
    }
    return false;
  });

  //Season Errors
  const errorSeason = [];
  if (
    state.season === "Summer" ||
    state.season === "Fall" ||
    state.season === "Winter" ||
    state.season === "Spring"
  ) {
    errorSeason.unshift("");
  }

  if (!state.name) {
    //errors set
    errors.name = "missing name";
  } else {
    errors.name = "";
  }

  if (!state.difficulty) {
    errors.difficulty = "  Choose one";
  } else {
    errors.difficulty = "";
  }

  if (!state.duration) {
    errors.duration = "Add the duration of the activity expressed in hours.";
  } else if (isNaN(state.duration)) {
    errors.duration =
      "The input value must be a number and be expressed in hours.";
  } else {
    errors.duration = "";
  }

  if (!state.season) {
    errors.season = "  Choose one";
  } else if (errorSeason.length) {
    errors.season = errorSeason[0];
  } else {
    errors.season = "";
  }

  if (!state.country.length) {
    errors.country = "Add one or several countries separated by commas";
  } else if (errorCountry.length) {
    errors.country = errorCountry[0];
  } else {
    errors.country = "";
  }

  return errors;
};
export default validate;
