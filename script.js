const names = [
    "Liam", "Noah", "Oliver", "Emma", "Ava", "Mia", "Isabella", "Sophia",
    "Ethan", "James", "Logan", "Lucas", "Olivia", "Charlotte", "Amelia", "Harper",
    "Benjamin", "Henry", "Alexander", "Elijah", "Jacob", "Mason", "Ella", "Riley",
    "Mbali", "Thabo", "Zanele", "Lindiwe", "Dineo", "Sifiso", "Nkosinathi", "Sibongile"
];

const currencies = ["BTC", "USDT"];
const addresses = [
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
    "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7k7sw7w2", "1BoatSLRHtKNngkdXEeobR76b53LETtpyT",
    "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c", "1HcLvg1S7UUYp4FudfAv6kF5uymd8eCGV8",
    "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh", "1PEHaNrAgEAZs1nksCivpRRBaME6wXYXMF"
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomData() {
    const data = [];
    for (let i = 0; i < 200; i++) {
        data.push({
            name: getRandomItem(names),
            amount: (Math.random() * (50000 - 50) + 50).toFixed(2),
            currency: getRandomItem(currencies),
            address: getRandomItem(addresses)
        });
    }
    return data;
}

function updateTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    
    for (let i = 0; i < 10; i++) {
        const row = data[i];
        const tr = document.createElement('tr');
        
        const nameTd = document.createElement('td');
        nameTd.textContent = row.name;
        tr.appendChild(nameTd);
        
        const amountTd = document.createElement('td');
        amountTd.textContent = `$${row.amount}`;
        tr.appendChild(amountTd);
        
        const currencyTd = document.cre
