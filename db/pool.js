const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://postgres:password@localhost:5432",
});

module.exports = pool;
