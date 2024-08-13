const names = [
    'James Taylor', 'Linda Moore', 'David Anderson', 'Laura Thomas',
    'Chris Jackson', 'Jessica White', 'Matthew Harris', 'Olivia Martin', 
    'Andrew Thompson', 'Sophia Robinson', 'Daniel Garcia', 'Isabella Martinez', 
    'Ethan Clark', 'Charlotte Lee'
];

const btcAddresses = [
    "1M8T2J4M6Y5D9b1e3X7R1H1W1P1K6X1", "1N2J5T8M4Y6D9b1e3X7R1H1W1P1K6X1", 
    "1P5T8J2M4Y6D9b1e3X7R1H1W1P1K6X1", "1Q2J5T4M6Y9D1b3e8X7R1H1W1P1K6X1", 
    "1R5T2J8M4Y6D9b1e3X7R1H1W1P1K6X1", "1S8T4J2M5Y6D9b1e3X7R1H1W1P1K6X1", 
    "1T2J5T6M4Y9D1b3e7X7R1H1W1P1K6X1", "1U5J8T2M4Y6D9b1e3X7R1H1W1P1K6X1", 
    "1V2T5J8M6Y4D9b1e3X7R1H1W1P1K6X1", "L9J2T4X5d6M7Y1Uo3b8P2Q9R5z1W7F6", 
    "L2T5J8X4d1M6Y7Uo9b3P2Q8R4z5W1F6"
];

function getRandomAmount() {
    return '$' + (Math.random() * (40000 - 50) + 50).toFixed(2);
}

const transactionRoll = document.querySelector('#transaction-roll tbody');
let currentIndex = 0;

function displayTransaction() {
    // Clear the table body
    transactionRoll.innerHTML = '';

    // Create a new table row for the current transaction
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
        <td>${names[currentIndex]}</td>
        <td>${getRandomAmount()}</td>
        <td>${btcAddresses[Math.floor(Math.random() * btcAddresses.length)]}</td>
    `;

    // Append the row to the table body
    transactionRoll.appendChild(tr);

    // Move to the next name, cycling back to the start if necessary
    currentIndex = (currentIndex + 1) % names.length;

    // Change display time (5, 10, or 15 seconds)
    const displayTime = [5000, 10000, 15000][Math.floor(Math.random() * 3)];
    setTimeout(displayTransaction, displayTime);
}

// Start the display loop
displayTransaction();
