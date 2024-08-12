// script.js

const names = ["Liam", "Noah", "Olivia", "Emma", "Ava", "Elijah", "Lucas", "Mason", "Logan", "Sophia"];
const amounts = ["0.05 BTC", "0.1 BTC", "0.25 USDT", "1.5 BTC", "0.75 BTC", "2 USDT", "0.02 BTC", "0.8 USDT", "0.03 BTC", "1 USDT"];
const withdrawalAddresses = [
    "bc1q9wdfdfg2hk93g72mgnr78y7fjx9yydwx6hwnm",
    "bc1qhvdfdfgy7kr62g2gn72m9r78yfjx8lywdmx2m",
    "1BoatSLRHtKNngkdXEeobR76b53LETtpyT",
    "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
    "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwfczg2"
];

const totalTransactions = 400;
let transactions = [];

// Generate random transactions
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

// Display different lists based on the time of day
function spreadTransactionsByTime() {
    const hours = new Date().getHours();
    const indexOffset = (hours * 40) % totalTransactions; // Spread over 24 hours
    transactions = transactions.slice(indexOffset).concat(transactions.slice(0, indexOffset));
}

document.addEventListener('DOMContentLoaded', () => {
    spreadTransactionsByTime();
    startTransactionUpdates();
});
