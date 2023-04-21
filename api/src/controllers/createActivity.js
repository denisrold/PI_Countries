const { Activity, Country } = require("../db");

const createActivity = async (req, res) => {
  const { name, difficulty, duration, season, country } = req.body;
  try {
    if (!name || !difficulty || !duration || !season || !country.length) {
      res.status(400).json("Missing data");
    } else {
      const newAct = await Activity.create({
        name,
        difficulty,
        duration,
        season,
      });
      const countries = await Country.findAll({ where: { name: country } });
      if (!countries) {
        return res.status(404).json("Country not found");
      }
      await newAct.addCountry(countries);
      await newAct.reload(); //actualizar la página actual de la variable "newAct"
      res.status(200).json(newAct);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createActivity;
