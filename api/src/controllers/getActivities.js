const { Activity } = require("../db");

const getActivity = async () => {
  const activities = await Activity.findAll();
  return activities;
};

module.exports = getActivity;
