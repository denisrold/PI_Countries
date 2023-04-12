const { Country } = require("../db");
const { Activity } = require("../db");

const getCountryByID = async (id) => {
  const country = await Country.findByPk(id, {
    include: {
      model: Activity,
      attributes: ["name", "season", "duration", "difficulty"],
      through: {
        attributes: [],
      },
    },
  });
  return country;
};

module.exports = getCountryByID;
