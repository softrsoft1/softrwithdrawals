const transactions = [
    // Example pre-arranged data
    { name: "Alice", amount: "$500", btcAddress: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" },
    { name: "Bob", amount: "$1,000", btcAddress: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy" },
    { name: "Charlie", amount: "$15,000", btcAddress: "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kyt4g6u" },
    // Add more entries here...
];

const transactionRoll = document.querySelector('#transaction-roll tbody');
let currentIndex = 0;

function displayTransaction() {
    const transaction = transactions[currentIndex];
    
    transactionRoll.innerHTML = `
        <tr>
            <td>${transaction.name}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.btcAddress}</td>
        </tr>
    `;

    currentIndex = (currentIndex + 1) % transactions.length;

    // Change display time (5, 10, or 15 seconds)
    const displayTime = [5000, 10000, 15000][Math.floor(Math.random() * 3)];
    setTimeout(displayTransaction, displayTime);
}

// Initial display
displayTransaction();
