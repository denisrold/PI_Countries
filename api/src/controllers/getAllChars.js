const nameConvert = require("../utils/nameConvert");
const { Country, Activity } = require("../db");

const getCountries = async (query) => {
  let countries;
  if (!Object.keys(query).length) {
    countries = await Country.findAll();
    return countries;
  }
  let nameFind = nameConvert(query);
  countries = await Country.findAll({
    where: nameFind,
    // include: {
    //   model: Activity,
    //   attributes: ["name"],
    //   through: {
    //     attributes: [],
    //   },
    // },
  });
  if (!countries.length) {
    return "The country you are looking for is not registered in our database.";
  }
  return countries;
};
module.exports = getCountries;
