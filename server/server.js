const express = require("express");
const mongoose = require('mongoose');

const app = express();
require("./startup/cors")(app);
require("./startup/routes")(app);

const port = 3900 || config.get("port");
const db = "mongodb://localhost:27017/form";
mongoose.connect(db)
    .then(() => winston.info(`Connected to ${db}...`));

app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);