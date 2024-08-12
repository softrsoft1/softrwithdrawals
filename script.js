const names = [
    'Chris Jackson', 'Jessica White', 'Matthew Harris', 'Olivia Martin', 'Andrew Thompson',
    'Sophia Robinson', 'Daniel Garcia', 'Isabella Martinez', 'Ethan Clark', 'Charlotte Lee',
    'Thandiwe', 'Sipho', 'Zanele', 'Thulani', 'Nokuthula', 'Nkosinathi', 'Bhekisisa', 'Gugu',
    'Lindiwe', 'Sibusiso', 'Mandisa', 'Lulama'
];

const addresses = [
    "L4J2T8N5X6d1M7Y3Uo9bP4Q5R8z2W1F6", "L7N5J2X8T4d6Y1M3Uo9bP2Q5R8z7W1F6", 
    "L2T9J5X8d1M4Y6Uo7b3P9Q8R2z5W1F6X", "L5J8T2X4d1M7Y9Uo3b6P2Q8R5z1W7F6", 
    "L8T2X5J4d9M6Y1Uo3b7P2Q8R4z5W1F6", "L3J1T8X2d5M6Y7Uo9b4P2Q8R5z1W7F6", 
    "L6X5T9J4d2M8Y3Uo1b7P2Q9R4z5W1F6", "L9J2T4X5d6M7Y1Uo3b8P2Q9R5z1W7F6", 
    "L2T5J8X4d1M6Y7Uo9b3P2Q8R4z5W1F6"
        "L2T9J5X8d1M4Y6Uo7b3P9Q8R2z5W1F6X", "L5J8T2X4d1M7Y9Uo3b6P2Q8R5z1W7F6", 
    "L8T2X5J4d9M6YDFGRT4F2Q8R4z5W1F6", "L3J1T8DGT565Uo9b4P2Q8R5z1W7F6", 
    "L6X5T9J4GGDFGDF55DFGDQ9R4z5W1F6", "L94WET6YTRHGTGFJRU6H2Q9R5z1W7F6", 
    "L2TRFDRET5ERYU76DF3P2Q8R4z5W1F6"

];

const tableBody = document.querySelector("#withdrawal-table tbody");

function generateRandomAmount() {
    return `$${(Math.random() * (50000 - 50) + 50).toFixed(2)}`;
}

function generateRandomTransactions(count) {
    let transactions = [];
    for (let i = 0; i < count; i++) {
        const name = names[Math.floor(Math.random() * names.length)];
        const amount = generateRandomAmount();
        const address = addresses[Math.floor(Math.random() * addresses.length)];
        transactions.push({ name, amount, address });
    }
    return transactions;
}

function displayTransactions(transactions) {
    tableBody.innerHTML = "";
    transactions.forEach(tx => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${tx.name}</td>
            <td>${tx.amount}</td>
            <td>${tx.address}</td>
        `;
        tableBody.appendChild(row);
    });
}

function startAutoUpdate() {
    const totalTransactions = 1115;
    const transactions = generateRandomTransactions(totalTransactions);
    let currentIndex = 0;

    function updateTable() {
        const transactionsToShow = transactions.slice(currentIndex, currentIndex + 10);
        displayTransactions(transactionsToShow);
        currentIndex = (currentIndex + 10) % totalTransactions;
    }

    updateTable();
    setInterval(updateTable, Math.floor(Math.random() * (30000 - 10000) + 10000));
}

startAutoUpdate();
