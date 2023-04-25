const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const saveApiData = require("./src/controllers/saveApiData.js");
const axios = require("axios");

// Syncing all the models at once.
conn
  .sync({ alter: true })
  .then(() => {
    server.listen(3001, () => {
      console.log("listening at 3001"); // eslint-disable-line no-console
    });
  })
  .then(async () => {
    await axios
      .get("http://localhost:3001/saveall")
      .then(console.log("saveApiDataOK"));
  });
