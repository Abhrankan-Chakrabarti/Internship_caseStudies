// solution.js
const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("movieDB");
    const collection = db.collection("watchHistory");

    const pipeline = [
      { $match: { year: 2024 } },
      { $group: {
          _id: "$genre",
          totalViews: { $sum: "$views" },
          avgRating: { $avg: "$rating" }
      }},
      { $match: { totalViews: { $gt: 10000 } } },
      { $project: {
          _id: 0,
          genre: "$_id",
          totalViews: 1,
          avgRating: { $round: ["$avgRating", 1] }
      }}
    ];

    const results = await collection.aggregate(pipeline).toArray();
    console.log(results);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
