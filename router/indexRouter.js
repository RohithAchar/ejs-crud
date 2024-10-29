const express = require("express");
const indexRouter = express.Router();
const {
  getFishes,
  getCreateFishForm,
  postFish,
  deleteFishPost,
  editFishGet,
  editFishPost,
} = require("../controller/indexRouterController");

indexRouter.get("/", getFishes);
indexRouter.get("/create", getCreateFishForm);
indexRouter.post("/create", postFish);
indexRouter.post("/delete", deleteFishPost);
indexRouter.get("/edit", editFishGet);
indexRouter.post("/edit", editFishPost);

module.exports = {
  indexRouter,
};
