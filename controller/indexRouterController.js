const {
  getAllFishes,
  getCategories,
  createFish,
  deleteFish,
  getFish,
  updateFish,
} = require("../db/query");

async function getFishes(req, res) {
  const { categoryId } = req.query;
  const fishes = await getAllFishes(categoryId);
  const categories = await getCategories();
  res.render("index", {
    title: "Fishes",
    fishes: fishes,
    categories: categories,
  });
}

async function getCreateFishForm(req, res) {
  const categories = await getCategories();
  res.render("createFish", { categories: categories });
}

async function postFish(req, res) {
  const fish = req.body;
  await createFish(fish);
  res.redirect("/");
}

async function deleteFishPost(req, res) {
  const { categoryId } = req.body;
  await deleteFish(categoryId);
  res.redirect("/");
}

async function editFishGet(req, res) {
  const { id } = req.query;
  const fish = await getFish(id);
  const categories = await getCategories();
  res.render("updateFish", { id, categories, fish });
}

async function editFishPost(req, res) {
  const fish = req.body;
  await updateFish(fish.id, fish);
  res.redirect("/");
}

module.exports = {
  getFishes,
  getCreateFishForm,
  postFish,
  deleteFishPost,
  editFishGet,
  editFishPost,
};
