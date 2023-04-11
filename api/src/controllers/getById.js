const { Country } = require("../db");
const { Activity } = require("../db");

const getCountryByID = async (req, res) => {
  let { id } = req.params;
  try {
    const country = await Country.findByPk(
      id /* {
      include: {
        model: Activity,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    }*/
    );
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCountryByID;
