const { Activity, Country } = require("../db");

const deleteActivity = async (id) => {
  const deleteAct = await Activity.findByPk(id, {
    include: {
      model: Country,
      attributes: ["id", "name"],
      through: {
        attributes: [],
      },
    },
  });
  const aux = { ...deleteAct.dataValues };
  await deleteAct.destroy();
  return aux;
};

module.exports = deleteActivity;
