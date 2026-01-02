// FastBite Menu Database – Idempotent CRUD Challenge
// Run with: node menu-crud.js

const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("fastbiteDB");
    const menu = db.collection("menu");

    // 1. Ensure "Tofu Buddha Bowl" exists (insert if missing, update if present)
    await menu.updateOne(
      { name: "Tofu Buddha Bowl" },
      {
        $set: {
          cuisine: "Asian",
          price: 9.50,
          tags: ["vegan", "gluten-free"],
          available: true
        }
      },
      { upsert: true }
    );

    // 2. Find all available vegan dishes under $12 (show only name + price)
    const veganDishes = await menu.find(
      { available: true, tags: "vegan", price: { $lt: 12 } },
      { projection: { name: 1, price: 1, _id: 0 } }
    ).toArray();
    console.log("Available vegan dishes under $12:", veganDishes);

    // 3. Update the price of “Tofu Buddha Bowl” to $10.00 and add a “popular” tag
    await menu.updateOne(
      { name: "Tofu Buddha Bowl" },
      {
        $set: { price: 10.00 },
        $addToSet: { tags: "popular" } // avoids duplicate "popular" tags
      }
    );

    // 4. Delete “Old Special Soup” if it exists
    await menu.deleteOne({ name: "Old Special Soup" });

    console.log("CRUD operations completed successfully.");
  } finally {
    await client.close();
  }
}

run().catch(console.error);
