const { Activity, Country } = require("../db");

const getActivity = async () => {
  const activities = await Activity.findAll();
  return activities;
};

const getActivityById = async (id) => {
  const activities = await Activity.findByPk(id, {
    include: {
      model: Country,
      attributes: ["id", "name"],
      through: {
        attributes: [],
      },
    },
  });
  return activities;
};

module.exports = { getActivity, getActivityById };
