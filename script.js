const names = [
    'Chris Jackson', 'Jessica White', 'Matthew Harris', 'Olivia Martin', 'Andrew Thompson',
    'Sophia Robinson', 'Daniel Garcia', 'Isabella Martinez', 'Ethan Clark', 'Charlotte Lee',
    'Thandiwe', 'Sipho', 'Zanele', 'Thulani', 'Nokuthula', 'Nkosinathi', 'Bhekisisa', 'Gugu',
    'Lindiwe', 'Sibusiso', 'Mandisa', 'Lulama' Sarah Brown', 'James Taylor', 'Linda Moore', 
    'David Anderson', 'Laura Thomas',
    'Chris Jackson', 'Jessica White', 'Matthew Harris', 'Olivia Martin', 'Andrew Thompson',
    'Sophia Robinson', 'Daniel Garcia', 'Isabella Martinez', 'Ethan Clark', 'Charlotte Lee',
    Thandiwe', 'Sipho', 'Zanele', 'Thulani', 'Nokuthula', 'Nkosinathi', 'Bhekisisa', 'Gugu',
    'Lindiwe', 'Sibusiso', 'Mandisa', 'Lulama', 'Noluthando', 'Khanyisa', 'Thandeka', 'Mzamo',
    'Akhona', 'Siphesihle', 'Nontle', 'Xolani', 'Sotho Names (Local)', 'Lerato', 'Palesa',
    'Thato', 'Kgotso', 'Tshepo', 'Nthabiseng', 'Mohau', 'Rethabile', 'Tumelo', 'Teboho', 
    'Tswana Names (Local)', 'Boitumelo', 'Kabelo', 'Dineo', 'Thapelo', 'Naledi', 'Kagiso', 
    'Lesedi', 'Matshidiso', 'Tlotliso', 'Kopano', 'Chris Jackson', 'Jessica White', 'Matthew Harris',
    'Olivia Martin', 'Andrew Thompson',
    'Sophia Robinson', 'Daniel Garcia', 'Isabella Martinez', 'Ethan Clark', 'Charlotte Lee',
    'Jacob Lewis', 'Ava Walker', 'William Hall', 'Mia Allen', 'James Young' 'Alet', 'Arno',
    'Carla', 'Elmar', 'Anri', 'Gavin', 'Jody', 'Hennie', 'Melani', 'Simon', 'Nadia', 'Antonie',
    'Jeanette', 'Charles', 'Leila', 'Gideon', 'Suzette', 'Armand', 'Danie', 'Minette', 'Stefanus',
    'Venda Names (Local)', 'Azwindini', 'Fhulufhelo', 'Mulalo', 'Rudzani', 'Livhuwani', 'Tshilidzi',
    'Rofhiwa', 'Lufuno', 'Netshituka'
];

const btcAddresses = [
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", "12c6DSiU4Rq3P4ZxziKxzrL5Lt9J7Jzdw", 
    "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy", "1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp", 
    "3Ai1JZ8pdJb2ksieUV8FsxSNVJCpoPi8W6", "1BoatSLRHtKNngkdXEeobR76b53LETtpyT"
    1L8x2m9g9JzFyxAkR6d5QBysMwUV2hBJP4d", 
    "1P5X8PmGsK8GjA2M9e5L3nTu1W8b1eX8DHM", "1M7E8Xp4fgQH2eLpT3hHgH7Y2Q96RJs7K8D",
    "1H2e9GrT1F7Y3Q8mJdRPXpM6Gr9Y2H6vL7C", "1J3ZpXk8dH4Zf9Wm9Mz5yKX7E6t8P2gF9Ye", 
    "1K7T5B2pXg9o8J5qM9XQ8RrZT6HZmF7Cw8", "1N5G6R8XyH4T3f9PQ8x6V9T5hK7MCzJ8zdK", 
    "1F2T8P5Jx9R1e7cX5Yd6H4H4B3M5T6Wh5Fx", "1P6R9oT5JxF8X2n8Y4M8H7d5bK7E5Y3Z9hr", 
    "1L5b8G7R4F2T9e4pX6y9H8Kz7Q2R5MnA6wF", "1J8E9pX7F2R5T9c4y6H8M3d7K9T5P8z9nH8",
    "1M3J8T6R9F2p5Y7dQ8X4xH5b7K6e5n8G9hr", "1F5T6X9Y7P2b8J4R8H9Q3M6e5K8R7Z9dF3X",
    "1H7J8X5R9P2T6Q4M8Yd9F3bK7T5e5nX9hR6", "1L6T5pX7J9Q2e4R8H8Y9b3M5K7d5T9F8xH8",
    "1M9X2F5T6R4J7p8H8Yd9Q3K5b7e5nT9X6rH", "1F8J2R5X9pT6Q4M7H9d3YbK5e5T8nX9h7R", 
    "1L5T6Y9pJ8X2F4R8d9H3M7bK5eT5nX6R9h", "1J8R5X9T2p6Q4H7Yd9bM3K8e5T5nX9h6F",
    "1M5T6pX9J2Q8R4H7Yd9b3K5e5T9nX6h8R", "1H9X2F5T6R4pJ7Q8d8Yb3M5K5eT9nX6rH",
    "1L6J8T5p9Q2X4R7H8d9Yb3M5K5eT9nX6R", "1M9R5T6p8X2Q4H7Yd3b9K5e5T9nX6h8F", 
    "1F8T6R5X9pJ2Q4H7d9Yb3M5e5T9nX6XhR", "1L5p9X2T6Q4H7J8Yd3b9M5e5T9nX6R8hF",
    "1J8R5X9pT2Q4H7d8Yb3M5e5T9nX6Xh9R", "1M9T6F5pX2Q4H8J7d3Yb9M5e5T9nX6R8h", 
    "1H5X9T2p6Q4J7R8d3Yb9M5e5T9nX6XhR", "1L8p9X2T6Q4H7J5d3Yb9M5e5T9nX6R8F",
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
