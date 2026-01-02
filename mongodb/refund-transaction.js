const { MongoClient, ObjectId } = require("mongodb");

async function refundTransaction() {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  const db = client.db("fintrustDB");

  const session = client.startSession();

  try {
    await session.withTransaction(async () => {
      // Look up the specific transaction you seeded
      const tx = await db.collection("transactions").findOne(
        {
          _id: new ObjectId("6957ae3220a858905a759488"),
          status: "completed"
        },
        { session }
      );

      if (!tx) {
        throw new Error("Transaction not found or already refunded.");
      }

      console.log("Found transaction:", tx);

      // Print balances before refund
      const senderBefore = await db.collection("users").findOne({ _id: tx.from }, { session });
      const recipientBefore = await db.collection("users").findOne({ _id: tx.to }, { session });
      console.log("Balances before refund:");
      console.log(`${senderBefore.name}: ${senderBefore.balance}`);
      console.log(`${recipientBefore.name}: ${recipientBefore.balance}`);

      // Refund logic
      await db.collection("users").updateOne(
        { _id: tx.from },
        { $inc: { balance: tx.amount } },
        { session }
      );

      await db.collection("users").updateOne(
        { _id: tx.to },
        { $inc: { balance: -tx.amount } },
        { session }
      );

      // Mark original transaction as refunded
      await db.collection("transactions").updateOne(
        { _id: tx._id },
        { $set: { status: "refunded" } },
        { session }
      );

      // Log new refund transaction
      await db.collection("transactions").insertOne(
        {
          from: tx.to,
          to: tx.from,
          amount: tx.amount,
          date: new Date(),
          status: "refund"
        },
        { session }
      );

      // Print balances after refund
      const senderAfter = await db.collection("users").findOne({ _id: tx.from }, { session });
      const recipientAfter = await db.collection("users").findOne({ _id: tx.to }, { session });
      console.log("Balances after refund:");
      console.log(`${senderAfter.name}: ${senderAfter.balance}`);
      console.log(`${recipientAfter.name}: ${recipientAfter.balance}`);

      console.log("Refund successful!");
    });
  } catch (err) {
    console.error("Refund failed:", err.message);
  } finally {
    await session.endSession();
    await client.close();
  }
}

refundTransaction().catch(console.error);
