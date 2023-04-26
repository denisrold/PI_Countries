const { DataTypes } = require("sequelize");
// define model function
//conect to sequelize
module.exports = (sequelize) => {
  // define model
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        unique: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      flags: { type: DataTypes.STRING, allowNull: false },

      region: { type: DataTypes.STRING, allowNull: false },

      capital: { type: DataTypes.STRING },

      subregion: { type: DataTypes.STRING },

      area: { type: DataTypes.INTEGER },

      population: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      timestamps: false,
    }
  );
};
