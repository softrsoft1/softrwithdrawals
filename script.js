// Function to generate random names
function getRandomName() {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Hannah', 'Ivy', 'Jack', 'Karen', 'Leo', 'Mia', 'Nina', 'Owen', 'Paula', 'Quinn', 'Ryan', 'Sophia', 'Tom', 'Uma', 'Vera', 'Will', 'Xena', 'Yara', 'Zane'];
    return names[Math.floor(Math.random() * names.length)];
}

// Function to generate a random BTC address
function getRandomBTCAddress() {
    const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    let address = '1';
    for (let i = 0; i < 33; i++) {
        address += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return address;
}

// Function to generate random withdrawal amount
function getRandomAmount() {
    return (Math.random() * (100000 - 50) + 50).toFixed(2);
}

// Generate the full list of withdrawals
const withdrawals = [];
for (let i = 0; i < 1440; i++) {
    withdrawals.push({
        name: getRandomName(),
        amount: getRandomAmount(),
        address: getRandomBTCAddress()
    });
}

// Function to display a set of 15 withdrawals
function displayWithdrawals(startIndex) {
    const tableBody = document.querySelector('#withdrawalTable tbody');
    tableBody.innerHTML = ''; // Clear current table

    for (let i = startIndex; i < startIndex + 15; i++) {
        if (i >= withdrawals.length) break;
        const withdrawal = withdrawals[i];
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = withdrawal.name;
        row.appendChild(nameCell);

        const amountCell = document.createElement('td');
        amountCell.textContent = `$${withdrawal.amount}`;
        row.appendChild(amountCell);

        const addressCell = document.createElement('td');
        addressCell.textContent = withdrawal.address;
        row.appendChild(addressCell);

        tableBody.appendChild(row);
    }
}

// Function to calculate the start index based on time
function calculateStartIndex() {
    const now = new Date();
    const totalMinutes = (now.getHours() * 60) + now.getMinutes();
    const totalSets = Math.floor(1440 / 15);
    const setIndex = Math.floor((totalMinutes / 1440) * totalSets);
    return setIndex * 15;
}

// Initial display
let currentIndex = calculateStartIndex();
displayWithdrawals(currentIndex);

// Update the display every 30 seconds
setInterval(() => {
    currentIndex += 15;
    if (currentIndex >= withdrawals.length) {
        currentIndex = 0;
    }
    displayWithdrawals(currentIndex);
}, 30000);
