const names = [
    'John Smith', 'Jane Doe', 'Michael Johnson', 'Emily Davis', 'Daniel Wilson',
    'Sarah Brown', 'James Taylor', 'Linda Moore', 'David Anderson', 'Laura Thomas',
    'Chris Jackson', 'Jessica White', 'Matthew Harris', 'Olivia Martin', 'Andrew Thompson',
    'Sophia Robinson', 'Daniel Garcia', 'Isabella Martinez', 'Ethan Clark', 'Charlotte Lee',
    'Jacob Lewis', 'Ava Walker', 'William Hall', 'Mia Allen', 'James Young',
    'Lucas Scott', 'Madison Lewis', 'Jackson Clark', 'Avery Hall', 'Liam Young',
    'Mason Harris', 'Ella Lee', 'Ethan Walker', 'Zoe Brown', 'Noah Allen',
    // More names...
];

const generateRandomAddress = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let address = '0x';
    for (let i = 0; i < 40; i++) {
        address += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return address;
};

const generateRandomAmount = () => {
    return (Math.floor(Math.random() * (50000 - 50 + 1)) + 50).toFixed(2);
};

const generateRandomData = (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const name = names[Math.floor(Math.random() * names.length)];
        const amount = `$${generateRandomAmount()}`;
        const address = generateRandomAddress();
        data.push({ name, amount, address });
    }
    return data;
};

const updateTable = () => {
    const data = generateRandomData(400);
    let currentIndex = 0;

    const displayData = () => {
        const tableBody = document.querySelector('#crypto-table tbody');
        tableBody.innerHTML = '';

        for (let i = 0; i < 10; i++) {
            const row = document.createElement('tr');
            const { name, amount, address } = data[(currentIndex + i) % data.length];
            row.innerHTML = `
                <td>${name}</td>
                <td>${amount}</td>
                <td>${address}</td>
            `;
            tableBody.appendChild(row);
        }

        currentIndex = (currentIndex + 10) % data.length;
    };

    displayData();
    setInterval(displayData, Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000);
};

window.onload = updateTable;
