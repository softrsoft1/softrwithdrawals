const names = [
    'Chris Jackson', 'Jessica White', 'Matthew Harris', 'Olivia Martin', 'Andrew Thompson',
    'Sophia Robinson', 'Daniel Garcia', 'Isabella Martinez', 'Ethan Clark', 'Charlotte Lee',
    'Thandiwe', 'Sipho', 'Zanele', 'Thulani', 'Nokuthula', 'Nkosinathi', 'Bhekisisa', 'Gugu',
    'Lindiwe', 'Sibusiso', 'Mandisa', 'Lulama'
];

const btcAddresses = [
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", "12c6DSiU4Rq3P4ZxziKxzrL5Lt9J7Jzdw", 
    "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy", "1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp", 
    "3Ai1JZ8pdJb2ksieUV8FsxSNVJCpoPi8W6", "1BoatSLRHtKNngkdXEeobR76b53LETtpyT"
];

const usdtAddresses = [
    "TLP9Vas5Zv8y9e1YbgEQ6qX55X6APU4M7f", "TYyBoc2dLVEz8d8mjW2DPsYmr43Hg2btxJ", 
    "TXgATywtdYP1U3EYrYW2Et7PfxKSkf4F1b", "TRwfqLCF2ZCZJr5VfZ7bMcTW9BSaUbbkvX", 
    "TBkBPTP5oExLqDHKQ4y2X96wVNi6bW1ZBp", "TGjCV8AQrAFh9w7HR5w5nXvG5JwvTxJyxg"
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
        const address = Math.random() > 0.5 ? btcAddresses[Math.floor(Math.random() * btcAddresses.length)] : usdtAddresses[Math.floor(Math.random() * usdtAddresses.length)];
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
