// Sample withdrawal data (you can customize this data)
const withdrawals = [
    { name: "John Doe", amount: "0.005 BTC", address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" },
    { name: "Alice", amount: "0.012 BTC", address: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy" },
    { name: "Bob", amount: "0.027 BTC", address: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf4fq2" },
    { name: "Charlie", amount: "0.034 BTC", address: "3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd" },
    { name: "David", amount: "0.040 BTC", address: "bc1qw4k07t0w7nxhd4psx7smc5krmx6xfk0n6zq9sp" },
    { name: "Eve", amount: "0.002 BTC", address: "1BoatSLRHtKNngkdXEeobR76b53LETtpyT" },
    { name: "Frank", amount: "0.018 BTC", address: "3Ai1JZ8pdJb2ksieUV8FsxSNVJCpoPi8W6" },
    { name: "Grace", amount: "0.050 BTC", address: "bc1qw4k07t0w7nxhd4psx7smc5krmx6xfk0n6zq9sp" },
    { name: "Hank", amount: "0.011 BTC", address: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy" },
    { name: "Ivy", amount: "0.020 BTC", address: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf4fq2" },
    { name: "Jack", amount: "0.024 BTC", address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" },
    { name: "Kate", amount: "0.031 BTC", address: "3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd" },
    { name: "Leo", amount: "0.039 BTC", address: "bc1qw4k07t0w7nxhd4psx7smc5krmx6xfk0n6zq9sp" },
    { name: "Mia", amount: "0.005 BTC", address: "1BoatSLRHtKNngkdXEeobR76b53LETtpyT" },
    { name: "Nick", amount: "0.014 BTC", address: "3Ai1JZ8pdJb2ksieUV8FsxSNVJCpoPi8W6" },
    { name: "Olivia", amount: "0.022 BTC", address: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf4fq2" },
    { name: "Paul", amount: "0.033 BTC", address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" },
    { name: "Quinn", amount: "0.041 BTC", address: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy" },
    { name: "Rose", amount: "0.006 BTC", address: "bc1qw4k07t0w7nxhd4psx7smc5krmx6xfk0n6zq9sp" },
    { name: "Sam", amount: "0.017 BTC", address: "3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd" },
];

let currentIndex = 0;
const displayLimit = 5;

// Function to update the table
function updateTable() {
    const tableBody = document.querySelector("#withdrawalTable tbody");
    tableBody.innerHTML = ""; // Clear the current table

    for (let i = 0; i < displayLimit; i++) {
        const withdrawal = withdrawals[(currentIndex + i) % withdrawals.length];
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = withdrawal.name;
        row.appendChild(nameCell);

        const amountCell = document.createElement("td");
        amountCell.textContent = withdrawal.amount;
        row.appendChild(amountCell);

        const addressCell = document.createElement("td");
        addressCell.textContent = withdrawal.address;
        row.appendChild(addressCell);

        tableBody.appendChild(row);
    }

    currentIndex = (currentIndex + displayLimit) % withdrawals.length;
}

// Initial table load
updateTable();

// Update the table every 1 second
setInterval(updateTable, 1000);
