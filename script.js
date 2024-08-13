const transactions = [
    { name: "John Doe", amount: "0.5 BTC", address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" },
    { name: "Jane Smith", amount: "1.2 USDT", address: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy" },
    { name: "Mike Johnson", amount: "0.7 BTC", address: "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8p92" },
    // Add more transactions here...
];

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
