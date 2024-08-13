const transactions = [
    // Prearranged data (only a few examples are shown here)
    { name: "Alice", amount: "0.034 BTC", address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" },
    { name: "Bob", amount: "0.5 BTC", address: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy" },
    { name: "Charlie", amount: "0.1 BTC", address: "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kyt4g6u" },
    // Add more entries up to 200
];

const transactionRoll = document.getElementById('transaction-roll');
let currentIndex = 0;

function displayTransaction() {
    const transaction = transactions[currentIndex];
    transactionRoll.innerHTML = `
        <p><strong>Name:</strong> ${transaction.name}</p>
        <p><strong>Amount Withdrawn:</strong> ${transaction.amount}</p>
        <p><strong>Withdrawal BTC Address:</strong> ${transaction.address}</p>
    `;

    currentIndex = (currentIndex + 1) % transactions.length;

    // Change display time (5, 10, or 15 seconds)
    const displayTime = [5000, 10000, 15000][Math.floor(Math.random() * 3)];
    setTimeout(displayTransaction, displayTime);
}

// Initial display
displayTransaction();
