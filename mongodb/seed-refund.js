const { MongoClient, ObjectId } = require("mongodb");

async function seed() {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  const db = client.db("fintrustDB");

  // Create sample users
  const aliceId = new ObjectId();
  const bobId = new ObjectId();

  await db.collection("users").insertMany([
    { _id: aliceId, name: "Alice", balance: 500 },
    { _id: bobId, name: "Bob", balance: 300 }
  ]);

  // Create a sample transaction
  await db.collection("transactions").insertOne({
    from: aliceId,
    to: bobId,
    amount: 100,
    date: new Date(),
    status: "completed"
  });

  console.log("Seed data inserted.");
  await client.close();
}

seed().catch(console.error);
