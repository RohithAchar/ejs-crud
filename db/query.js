const db = require("./pool");

async function createFish(fish) {
  const sql = `INSERT INTO FISH (name, qty, price, categoryId) VALUES ($1, $2, $3, $4)`;
  await db.query(sql, [fish.name, fish.qty, fish.price, fish.categoryId]);
}

async function getAllFishes(categoryId = null) {
  if (!categoryId) {
    const { rows } = await db.query("SELECT id, name, qty, price FROM fish");
    return rows;
  }

  const { rows } = await db.query(
    "SELECT id, name, qty, price FROM fish where categoryid=($1)",
    [categoryId]
  );
  return rows;
}

async function updateFish(id, fish) {
  const sql = `
    UPDATE fish
    SET name = ($1),
        qty = ($2),
        price = ($3),
        categoryId = ($4)
    WHERE id = ($5);
    `;
  await db.query(sql, [fish.name, fish.qty, fish.price, fish.categoryId, id]);
}

async function deleteFish(id) {
  const sql = `DELETE FROM fish where id = ($1)`;
  await db.query(sql, [id]);
}

async function getFish(id) {
  const sql = `SELECT id, name, qty, price from fish where id = ($1)`;
  const { rows } = await db.query(sql, [id]);
  return rows[0];
}

async function getCategories() {
  const sql = `SELECT id, name FROM category`;
  const { rows } = await db.query(sql);
  return rows;
}

module.exports = {
  getAllFishes,
  createFish,
  updateFish,
  deleteFish,
  getFish,
  getCategories,
};
