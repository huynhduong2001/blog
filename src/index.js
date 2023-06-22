const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const hbs = handlebars.create({
  extname: ".hbs",
});
const app = express();
const port = 3001;

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Routes init
route(app);

app.listen(port);
