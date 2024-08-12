// List of names, addresses, and some example data
const names = ["Anton", "Karin", "Louis", "Annelie", "Marinus", /* Add all names here */];
const addresses = [
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    "1BvBMSEYstWetqTFn5Au4m4GJt7w6W2ZbS",
    /* Add all addresses here */
];

// Function to generate random amount
function getRandomAmount() {
    return (Math.random() * (100000 - 50) + 50).toFixed(2);
}

// Function to populate the table with random data
function populateTable() {
    const tableBody = document.querySelector('#crypto-table tbody');
    tableBody.innerHTML = ''; // Clear previous rows

    for (let i = 0; i < 15; i++) { // Show 15 records at a time
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = names[Math.floor(Math.random() * names.length)];
        row.appendChild(nameCell);
        
        const amountCell = document.createElement('td');
        amountCell.textContent = `$${getRandomAmount()}`;
        row.appendChild(amountCell);
        
        const addressCell = document.createElement('td');
        addressCell.textContent = addresses[Math.floor(Math.random() * addresses.length)];
        row.appendChild(addressCell);
        
        tableBody.appendChild(row);
    }
}

// Populate table on page load
document.addEventListener('DOMContentLoaded', () => {
    populateTable();
    
    // Update table every 20 seconds
    setInterval(populateTable, 20000);
});
