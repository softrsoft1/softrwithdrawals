document.addEventListener('DOMContentLoaded', () => {
    const names = [
        'John Doe', 'Jane Smith', 'Michael Johnson', 'Emily Davis',
        'Chris Brown', 'Sarah Wilson', 'David Lee', 'Emma Lewis',
        'Oliver Jones', 'Sophia Clark', 'Liam Harris', 'Ava Robinson',
        'Noah Walker', 'Isabella Scott', 'Mason Turner', 'Mia Adams',
        'Ethan Baker', 'Charlotte Hall', 'James Allen', 'Amelia Young',
        // Add more names as needed
    ];

    const cryptoAddresses = [
        '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', '1Bz88k8C2F8Dfd7Y8Q2g9qv6QPUFDhzpq8', 
        '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy', '1EVgmE3tHSntzQ5R2wyGqFVv3WsjMjvsW8',
        // Add more addresses as needed
    ];

    const totalTransactions = 1115;
    let currentIndex = 0;
    
    function getRandomName() {
        return names[Math.floor(Math.random() * names.length)];
    }

    function getRandomAddress() {
        return cryptoAddresses[Math.floor(Math.random() * cryptoAddresses.length)];
    }

    function getRandomAmount() {
        return (Math.random() * (50000 - 50) + 50).toFixed(2);
    }

    function generateTransactions() {
        const tableBody = document.querySelector('#crypto-table tbody');
        tableBody.innerHTML = '';

        for (let i = 0; i < 10; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${getRandomName()}</td>
                <td>$${getRandomAmount()}</td>
                <td>${getRandomAddress()}</td>
            `;
            tableBody.appendChild(row);
        }
    }

    function updateTable() {
        generateTransactions();
        currentIndex = (currentIndex + 10) % totalTransactions;
    }

    updateTable();
    setInterval(updateTable, Math.floor(Math.random() * (39000 - 16000 + 1)) + 16000); // 16 to 39 seconds
});
