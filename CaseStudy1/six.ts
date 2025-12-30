function processTransaction(amount: number, description: string | undefined, isCredit: boolean): void {
  if (amount < 0) {
    throw new Error("Amount cannot be negative"); // never
  }

  if (description === undefined) {
    description = "No description provided"; // handle undefined
  }

  console.log(`Transaction: ${amount} | ${description} | Credit? ${isCredit}`);
}

// Test calls
processTransaction(1000, "Salary", true);
processTransaction(500, undefined, false);

