const { Client } = require("pg");

const query = `
    CREATE TABLE IF NOT EXISTS category (
        id INTEGER PRIMARY KEY,
        name VARCHAR (255) NOT NULL
    );

    INSERT INTO category (id, name) 
    VALUES 
        (1, 'Freshwater'), 
        (2, 'Saltwater'), 
        (3, 'Brackish Water')
        ON CONFLICT (id) DO NOTHING;

    CREATE TABLE IF NOT EXISTS fish (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        qty INTEGER NOT NULL,
        price INTEGER NOT NULL,
        categoryId INTEGER,
        FOREIGN KEY (categoryId) REFERENCES category (id)
    );
    
    INSERT INTO fish (name, qty, price, categoryId) 
    VALUES 
        ('Guppies', 100, 20, 1), 
        ('Neon Tetras', 50, 60, 1), 
        ('Betta Fish', 30, 80, 1),
        ('Clownfish', 90, 30, 2),
        ('Gobies', 90, 10, 2),
        ('Firefish', 200, 10, 2),
        ('Mollies', 2, 1000, 3)
    ON CONFLICT (id) DO NOTHING;
`;

async function main() {
  console.log("seeding....");
  const client = new Client({
    connectionString: "postgresql://postgres:password@localhost:5432",
  });
  await client.connect();
  await client.query(query);
  await client.end();
  console.log("done");
}

main();
