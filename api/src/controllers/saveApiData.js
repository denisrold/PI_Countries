const axios = require("axios");
const { Country, Activity } = require("../db");

const URL = "https://restcountries.com/v3.1/all";

const getApiData = async (req, res) => {
  let data = [];
  try {
    await axios.get(`${URL}`).then((response) => {
      data = [...response.data];
    });
    res.status(200).json({ msg: "Todo ok" });
    return data;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const saveApiData = async (req, res) => {
  const countries = await getApiData(req, res);
  countries.forEach(async (c) => {
    let { cca3, name, flags, region, subregion, capital, area, population } = c;
    await Country.findOrCreate({
      where: { id: cca3 },
      defaults: {
        name: name.common,
        flags: flags.png,
        region: region,
        subregion: subregion,
        capital: capital ? capital[0] : "Not found",
        area: area,
        population: population,
      },
    });
  });
};

module.exports = saveApiData;
