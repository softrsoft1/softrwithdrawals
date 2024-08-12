const names = [
    "John Smith", "Michael Johnson", "Sarah Williams", "Emily Brown", "David Jones", 
    "Sibongile Mbeki", "Thabo Nkosi", "Ahmed Osman", "Chloe Du Plessis", "Nathan Brits"
];
const currencies = ["BTC", "USDT"];
const withdrawalAddresses = [
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
    "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf43hz", "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
];

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomAmount = () => (Math.random() * (5 - 0.01) + 0.01).toFixed(4); // Random amount between 0.01 and 5 BTC/USDT
const getRandomTime = () => new Date(Date.now() - Math.floor(Math.random() * 86400000)).toLocaleTimeString(); // Random time in last 24 hours

const generateWithdrawalData = () => {
    return {
        time: getRandomTime(),
        name: getRandomItem(names),
        amount: getRandomAmount(),
        currency: getRandomItem(currencies),
        address: getRandomItem(withdrawalAddresses)
    };
};

const updateWithdrawalTable = () => {
    const tbody = document.querySelector("#withdrawalTable tbody");
    tbody.innerHTML = ""; // Clear current table rows

    for (let i = 0; i < 10; i++) {
        const rowData = generateWithdrawalData();
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${rowData.time}</td>
            <td>${rowData.name}</td>
            <td>${rowData.amount}</td>
            <td>${rowData.currency}</td>
            <td>${rowData.address}</td>
        `;

        tbody.appendChild(row);
    }
};

setInterval(updateWithdrawalTable, Math.floor(Math.random() * (30000 - 10000 + 1) + 10000)); // Update every 10-30 seconds
updateWithdrawalTable(); // Initial call to populate the table
