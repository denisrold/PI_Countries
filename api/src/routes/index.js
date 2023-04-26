const { Router } = require("express");

const saveApiData = require("../controllers/saveApiData");
const getCountries = require("../controllers/getAllCountries");
const getCountryByID = require("../controllers/getById");
const createActivity = require("../controllers/createActivity");
const {
  getActivity,
  getActivityById,
} = require("../controllers/getActivities");
const deleteActivity = require("../controllers/deleteActivity");

//router
const router = Router();

//Routers Configuration:
router.get("/saveall", saveApiData);

router.get("/countries/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const country = await getCountryByID(id);
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/countries", async (req, res) => {
  const name = req.query;
  try {
    const countries = name ? await getCountries(name) : await getCountries();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/activities", async (req, res) => {
  try {
    const activities = await getActivity();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/activities/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const country = await getActivityById(id);
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/activities", createActivity);

router.delete("/activities/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteActivity(id);
    res.status(200).json({ deleted });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
