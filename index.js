const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./src/controllers/authController")(app);

app.listen(3003, () => console.log("Servidor rodando na porta 3000"));
