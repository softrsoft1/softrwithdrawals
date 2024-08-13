const names = ["John Doe", "Jane Smith", "Michael Johnson", "Sarah Brown", "Emily Davis"];
const amounts = ["0.5 BTC", "1.2 USDT", "0.8 BTC", "2.5 USDT", "1.0 BTC"];
const addresses = ["1A1zP1...", "3FZbgi...", "bc1qw...", "2N3Hx...", "1Mz715..."];

function generateTransactions() {
    const tbody = document.getElementById('transaction-list');
    tbody.innerHTML = ''; // Clear current list
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const amountCell = document.createElement('td');
        const addressCell = document.createElement('td');

        nameCell.textContent = names[Math.floor(Math.random() * names.length)];
        amountCell.textContent = amounts[Math.floor(Math.random() * amounts.length)];
        addressCell.textContent = addresses[Math.floor(Math.random() * addresses.length)];

        row.appendChild(nameCell);
        row.appendChild(amountCell);
        row.appendChild(addressCell);

        tbody.appendChild(row);
    }
}

function scheduleUpdates() {
    const intervals = [5000, 10000, 15000];
    setInterval(generateTransactions, intervals[Math.floor(Math.random() * intervals.length)]);
}

generateTransactions();
scheduleUpdates();
