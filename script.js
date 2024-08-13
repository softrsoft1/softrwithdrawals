const transactions = [
    // Add 400 transaction objects here
    // Example: { name: "John Doe", amount: "0.5 BTC", address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" }
    // ...
];

const transactionList = document.getElementById('transaction-list');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateTransactionList() {
    const startIndex = getRandomInt(0, transactions.length - 10);
    const displayedTransactions = transactions.slice(startIndex, startIndex + 10);
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
