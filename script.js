// Function to generate random names
const names = [
    "John Doe", "Jane Smith", "Michael Brown", "Emily Davis",
    "Liam Johnson", "Olivia Wilson", "Noah Lee", "Sophia Martin",
    // Add more names as needed...
];

const generateRandomName = () => names[Math.floor(Math.random() * names.length)];

// Function to generate random crypto address
const generateRandomAddress = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let address = '0x';
    for (let i = 0; i < 40; i++) {
        address += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return address;
};

// Function to generate random amount
const generateRandomAmount = () => (Math.random() * (100000 - 50) + 50).toFixed(2);

// Create an array of 1115 random transactions
const transactions = [];
for (let i = 0; i < 1115; i++) {
    transactions.push({
        name: generateRandomName(),
        amount: generateRandomAmount(),
        address: generateRandomAddress(),
    });
}

// Function to update table rows
const updateTable = (startIndex) => {
    const tableBody = document.querySelector('#crypto-table tbody');
    tableBody.innerHTML = '';
    for (let i = startIndex; i < startIndex + 10 && i < transactions.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transactions[i].name}</td>
            <td>$${transactions[i].amount}</td>
            <td>${transactions[i].address}</td>
        `;
        tableBody.appendChild(row);
    }
};

// Function to get a random delay between 16 and 39 seconds
const getRandomDelay = () => Math.floor(Math.random() * (39000 - 16000) + 16000);

// Initial display
let currentIndex = 0;
updateTable(currentIndex);

// Update table every random interval
setInterval(() => {
    currentIndex = (currentIndex + 10) % transactions.length;
    updateTable(currentIndex);
}, getRandomDelay());
