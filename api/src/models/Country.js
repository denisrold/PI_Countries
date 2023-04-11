const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Country", {
    //-  ID (Código de tres letras).
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    //-  Nombre. \*
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //-  Imagen de la bandera. \*
    flags: { type: DataTypes.STRING, allowNull: false },
    //-  Continente. \*
    region: { type: DataTypes.STRING, allowNull: false },
    //-  Capital. \*
    capital: { type: DataTypes.STRING },
    //-  Subregión.
    subregion: { type: DataTypes.STRING },
    //-  Área.
    area: { type: DataTypes.INTEGER },
    //-  Población. \* */
    population: { type: DataTypes.INTEGER, allowNull: false },
  });
};
