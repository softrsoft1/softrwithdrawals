// script.js

const names = ["John Doe", "Jane Smith", "Robert Johnson", "Emily Davis", "Michael Brown"];
const amounts = ["0.02 BTC", "0.5 USDT", "1.5 BTC", "0.8 BTC", "3 USDT"];
const withdrawalAddresses = [
    "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
    "1BoatSLRHtKNngkdXEeobR76b53LETtpyT",
    "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwfczg2",
    "bc1q504p6msuxlnk2jdfk20cmcvz8jdx36k7hz0fwq"
];

const totalTransactions = 400;
let transactions = [];

// Generate 400 random transactions
for (let i = 0; i < totalTransactions; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAmount = amounts[Math.floor(Math.random() * amounts.length)];
    const randomAddress = withdrawalAddresses[Math.floor(Math.random() * withdrawalAddresses.length)];

    transactions.push({
        name: randomName,
        amount: randomAmount,
        address: randomAddress
    });
}

// Function to update the transaction list
function updateTransactionList() {
    const tbody = document.getElementById('transaction-tbody');
    tbody.innerHTML = ''; // Clear current transactions

    // Select 10 random transactions to display
    const selectedTransactions = [];
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * transactions.length);
        selectedTransactions.push(transactions[randomIndex]);
    }

    // Populate the table
    selectedTransactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.name}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.address}</td>
        `;
        tbody.appendChild(row);
    });
}

// Change transaction list every 5, 10, or 15 seconds
function startTransactionUpdates() {
    updateTransactionList();
    const randomInterval = Math.floor(Math.random() * 3 + 1) * 5000; // 5, 10, or 15 seconds
    setTimeout(() => {
        startTransactionUpdates();
    }, randomInterval);
}

// Start updating on page load
document.addEventListener('DOMContentLoaded', startTransactionUpdates);
