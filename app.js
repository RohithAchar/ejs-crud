const express = require("express");
const { indexRouter } = require("./router/indexRouter");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(3000, () => console.log("Running on port 3000....."));
