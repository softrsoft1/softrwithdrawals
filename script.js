// Define records and state
const totalRecords = 1440;
const btcRecords = Array.from({ length: 890 }, (_, i) => ({ type: 'BTC', amount: randomAmount(), address: generateBtcAddress(), name: generateRandomName() }));
const ltcRecords = Array.from({ length: 300 }, (_, i) => ({ type: 'LTC', amount: randomAmount(), address: generateLtcAddress(), name: generateRandomName() }));
const usdtRecords = Array.from({ length: 230 }, (_, i) => ({ type: 'USDT', amount: randomAmount(), address: generateUsdtAddress(), name: generateRandomName() }));

// Combine records
const allRecords = [...btcRecords, ...ltcRecords, ...usdtRecords];
shuffleArray(allRecords);

function randomAmount() {
    return (Math.random() * (100000 - 50) + 50).toFixed(2);
}

function generateBtcAddress() {
    return '1' + Math.random().toString(36).substr(2, 34);
}

function generateLtcAddress() {
    return 'L' + Math.random().toString(36).substr(2, 33);
}

function generateUsdtAddress() {
    return '0x' + Math.random().toString(36).substr(2, 40);
}

function generateRandomName() {
    return 'Name' + Math.floor(Math.random() * 1000);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateTable() {
    const now = new Date();
    const hour = now.getHours();
    const startIndex = Math.floor(hour * totalRecords / 24);
    const endIndex = startIndex + 15;
    const recordsToShow = allRecords.slice(startIndex, endIndex);

    const tableBody = document.querySelector('#withdrawalTable tbody');
    tableBody.innerHTML = '';

    recordsToShow.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="amount">$${record.amount}</td>
            <td class="address">${record.address}</td>
            <td class="name">${record.name}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateTable();
    setInterval(updateTable, 30000); // Update every 30 seconds
});
