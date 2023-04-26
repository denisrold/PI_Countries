const server = require("./src/app.js");
const { conn } = require("./src/db.js");
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
      .then(console.log("saveApiDataOK"))
      .catch((error) => {
        console.error("Error in the HTTP request: ", error);
      });
  });
