const { Activity, Country } = require("../db");

const createActivity = async (req, res) => {
  const { name, difficulty, duration, season, country } = req.body;
  try {
    if (!name || !difficulty || !duration || !season || !country.length) {
      res.status(400).json("Missing data");
    } else {
      const [newAct, created] = await Activity.findOrCreate({
        where: { name: name },
        defaults: {
          difficulty: Number(difficulty),
          duration: Number(duration),
          season: season,
        },
      });
      if (created) {
        const countries = await Country.findAll({ where: { name: country } });
        if (!countries) {
          return res.status(404).json("Country not found");
        }
        await newAct.addCountry(countries);
        await newAct.reload();
        res.status(200).json(newAct);
      } else {
        return res.status(400).json("That activity already exists");
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createActivity;
