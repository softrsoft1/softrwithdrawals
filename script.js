const firstNames = ["John", "Sarah", "Paul", "Emma", "Michael", "Liam", "Olivia", "Noah", "Sophia", "James"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Martinez", "Lopez"];
const cryptoCurrencies = ["BTC", "USDT"];
const transactions = generateTransactions(200);

function generateRandomAddress(crypto) {
    if (crypto === "BTC") {
        return "1" + Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    } else if (crypto === "USDT") {
        return "T" + Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    }
}

function generateTransactions(count) {
    let transactions = [];
    for (let i = 0; i < count; i++) {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const crypto = cryptoCurrencies[Math.floor(Math.random() * cryptoCurrencies.length)];
        const amount = (Math.random() * (0.84 - 0.00084) + 0.00084).toFixed(8) + " " + crypto;
        const address = generateRandomAddress(crypto);

        transactions.push({
            name: `${firstName} ${lastName}`,
            amount: amount,
            address: address
        });
    }
    return transactions;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateTransactionList() {
    shuffleArray(transactions);
    const displayedTransactions = transactions.slice(0, 10);
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';

    displayedTransactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.name}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.address}</td>
        `;
        transactionList.appendChild(row);
    });

    setTimeout(updateTransactionList, getRandomInt(5000, 15000));
}

window.onload = updateTransactionList;

// Manually add more transactions (you can add more data here)
transactions.push(
    { name: "Custom Name1", amount: "0.005 BTC", address: "1A2b3C4d5E6f7G8h9I0j" },
    { name: "Custom Name2", amount: "0.020 BTC", address: "1X2y3Z4w5V6u7T8s9Q0p" }
);
