const withdrawalData = [
    { roll: 1, name: 'James Taylor', amount: '$500', address: '1M8T2J4M6Y5D9b1e3X7R1H1W1P1K6X1' },
    { roll: 2, name: 'Linda Moore', amount: '$1,000', address: '1N2J5T8M4Y6D9b1e3X7R1H1W1P1K6X1' },
    // Add all the other names and data here
    { roll: 3, name: 'David Anderson', amount: '$10,000', address: '1P5T8J2M4Y6D9b1e3X7R1H1W1P1K6X1' },
    // ...
];

let currentIndex = 0;
const displayTime = 15000; // Change every 15 seconds

function updateTable() {
    const tableBody = document.getElementById('withdrawal-list');
    tableBody.innerHTML = '';

    const data = withdrawalData.slice(currentIndex, currentIndex + 5);

    data.forEach(item => {
        const row = document.createElement('tr');

        const rollCell = document.createElement('td');
        rollCell.textContent = item.roll;

        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;

        const amountCell = document.createElement('td');
        amountCell.textContent = item.amount;

        const addressCell = document.createElement('td');
        addressCell.textContent = item.address;

        row.appendChild(rollCell);
        row.appendChild(nameCell);
        row.appendChild(amountCell);
        row.appendChild(addressCell);

        tableBody.appendChild(row);
    });

    currentIndex = (currentIndex + 5) % withdrawalData.length;
}

setInterval(updateTable, displayTime);
updateTable(); // Initial load
