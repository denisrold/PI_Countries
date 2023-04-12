const { Activity, Country } = require("../db");

const createActivity = async (req, res) => {
  const { name, difficulty, duration, season, country } = req.body;
  try {
    if (!name || !difficulty || !duration || !season) {
      res.status(400).json("Faltan datos");
    } else {
      const [newAct, created] = await Activity.findOrCreate({
        where: { name: name },
        defaults: {
          difficulty: difficulty,
          duration: duration,
          season: season,
        },
      });
      if (created) {
        const countries = await Country.findAll({ where: { name: country } });
        if (!countries) {
          return res.status(404).json("Pais no encontrado");
        }
        await newAct.addCountry(countries);
        await newAct.reload();
        res.status(200).json(newAct);
      } else {
        return res.status(400).json("Ya existe esa actividad");
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Funcion simplificada  guardada por las dudas, modo de prueba
/*async (name, difficulty, duration, season, country) => {
  // const Activi = await Activity.create({
  //   name,
  //   difficulty,
  //   duration,
  //   season,
  // });
  // await Activi.addCountry(id_country);
  // return Activi;
};*/

module.exports = createActivity;
