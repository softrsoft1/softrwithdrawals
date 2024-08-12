// Example data
const names = [
    "John Doe", "Jane Smith", "Mike Johnson", "Emily Davis", "Daniel Brown",
    "Olivia Wilson", "James Moore", "Sophia Taylor", "Liam Anderson", "Emma Thomas",
    // Add 1115 unique names here...
];

const addresses = [
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy", "bc1qar0srrr7nck6zrfb4y1h4uh4px27f4qk9e4dd2", 
    "3Fa5Aj7oQp4S8ZyqH4z9A2Kc6qM1YzVbEq", "bc1qqe4l4q9zqw2yl5q6a3f7svsl8n6y7t5x2p9vvu",
    // Add 1115 unique addresses here...
];

const generateRandomTransaction = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    const amount = (Math.random() * (50000 - 50) + 50).toFixed(2);
    const address = addresses[Math.floor(Math.random() * addresses.length)];
    return { name, amount, address };
};

const updateTable = () => {
    const tableBody = document.querySelector('#cryptoTable tbody');
    tableBody.innerHTML = '';

    const transactions = [];
    while (transactions.length < 10) {
        const transaction = generateRandomTransaction();
        if (!transactions.some(t => t.name === transaction.name && t.amount === transaction.amount && t.address === transaction.address)) {
            transactions.push(transaction);
        }
    }

    transactions.forEach(({ name, amount, address }) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${name}</td><td>$${amount}</td><td>${address}</td>`;
        tableBody.appendChild(row);
    });
};

const updateInterval = () => {
    const interval = Math.floor(Math.random() * (39000 - 16000) + 16000);
    setTimeout(() => {
        updateTable();
        updateInterval();
    }, interval);
};

document.addEventListener('DOMContentLoaded', () => {
    updateTable();
    updateInterval();
});
