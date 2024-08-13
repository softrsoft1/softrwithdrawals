const names = [
    "John Smith", "Jane Doe", "Michael Johnson", "Emily Davis", "Chris Brown", "Sarah Wilson",
    "David Clark", "Jessica Moore", "James Thompson", "Laura Garcia", "Liam Lewis", "Emma Walker",
    "Mason Allen", "Olivia Robinson", "Noah White", "Isabella Young", "Lucas King", "Sophia Hill",
    "Benjamin Scott", "Mia Green", "Elijah Adams", "Amelia Baker", "Oliver Nelson", "Ava Carter",
    "Ethan Mitchell", "Charlotte Perez", "Jacob Roberts", "Abigail Turner", "William Phillips",
    "Sofia Parker", "Alexander Evans", "Mila Collins", "Henry Edwards", "Ella Stewart",
    "Daniel Morris", "Zoe Sanchez", "Jackson Rivera", "Chloe Bennett", "Sebastian Price", "Layla Reed"
    // Add more names to total 200 unique names
];

const cryptoAddresses = Array.from({ length: 200 }, () =>
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
);

const generateRandomAmount = () => (Math.random() * (10000 - 50) + 50).toFixed(2);

const generateTableRows = () => {
    const tbody = document.querySelector("#crypto-table tbody");
    tbody.innerHTML = ""; // Clear previous rows

    for (let i = 0; i < 10; i++) {
        const row = document.createElement("tr");
        const name = names[Math.floor(Math.random() * names.length)];
        const amount = generateRandomAmount();
        const address = cryptoAddresses[Math.floor(Math.random() * cryptoAddresses.length)];

        row.innerHTML = `<td>${name}</td><td>${amount}</td><td>${address}</td>`;
        tbody.appendChild(row);
    }
};

setInterval(generateTableRows, 10000); // Change table content every 10 seconds

window.onload = generateTableRows;
