const names = [
    'James Taylor', 'Linda Moore', 'David Anderson', 'Laura Thomas', 'Chris Jackson', 'Jessica White',
    'Matthew Harris', 'Olivia Martin', 'Andrew Thompson', 'Ayanda', 'Nosipho', 'Siphiwe', 'Mpendulo', 
    'Zanele', 'Nokwanda', 'Khanyisile', 'Dawid', 'Jacobus', 'Christiaan', 'Gert', 'Nico', 'Herman', 
    'Koos', 'Anton', 'Thys', 'Andries', 'Sonja', 'Leana', 'Marike', 'Petra', 'Melinda', 'Ronel', 
    'Cornelia', 'Annette', 'Esmé', 'Aletta', 'Nosihle', 'Mfundo', 'Siphesihle', 'Sibongile', 
    'Lindokuhle', 'Gugu', 'Mthokozisi', 'Nomzamo', 'Phumlani', 'Simphiwe', 'Aphiwe', 'Unathi', 
    'Sinethemba', 'Mihlali', 'Ziyanda', 'Lulama', 'Asanda', 'Ntombezinhle', 'Lwando', 'Nonhle', 
    'Boitumelo', 'Moeketsi', 'Lehlohonolo', 'Motsamai', 'Phemelo', 'Rorisang', 'Tumisang', 
    'Tsholofelo', 'Motlatsi', 'Dikeledi', 'Olebogeng', 'Omphile', 'Onalenna', 'Gomolemo',
    'Sophia Robinson', 'Daniel Garcia', 'Isabella Martinez', 'Ethan Clark', 'Charlotte Lee'
];

const amounts = [
    '$50', '$100', '$500', '$1,000', '$5,000', '$10,000', '$20,000', '$30,000', '$40,000'
];

const btcAddresses = [
    "1M8T2J4M6Y5D9b1e3X7R1H1W1P1K6X1", "1N2J5T8M4Y6D9b1e3X7R1H1W1P1K6X1", 
    "1P5T8J2M4Y6D9b1e3X7R1H1W1P1K6X1", "1Q2J5T4M6Y9D1b3e8X7R1H1W1P1K6X1", 
    "1R5T2J8M4Y6D9b1e3X7R1H1W1P1K6X1", "1S8T4J2M5Y6D9b1e3X7R1H1W1P1K6X1", 
    "1T2J5T6M4Y9D1b3e7X7R1H1W1P1K6X1", "1U5J8T2M4Y6D9b1e3X7R1H1W1P1K6X1", 
    "1V2T5J8M6Y4D9b1e3X7R1H1W1P1K6X1", "L9J2T4X5d6M7Y1Uo3b8P2Q9R5z1W7F6",
    "L2T5J8X4d1M6Y7Uo9b3P2Q8R4z5W1F6", "1H5X4T9p2Q7Jd3Yb6M5e5T9nX6X8hR", 
    "1L5p8X2T4Q7H9Jd3Yb6M5e5T9nX6R8hF", "1M5T2R9p4Q7H8Jd3Yb6M5e5T9nX6X8h", 
    "1F8X4T9p2Q7H5Jd3Yb6M5e5T9nX6R8h", "1H5X2T4p7Q9Jd3Yb6M5e5T9nX6X8hR", 
    "1L8p9X2T4Q7H5Jd3Yb6M5e5T9nX6R8hF", "1M5T9R4p2Q7H8Jd3Yb6M5e5T9nX6X8h", 
    "1F8X2T9p4Q7H5Jd3Yb6M5e5T9nX6R8h", "1H5X4T9p2Q7Jd3Yb6M5e5T9nX6X8hR", 
    "1L5p8X2T4Q7H9Jd3Yb6M5e5T9nX6R8hF", "1M5T2R9p4Q7H8Jd3Yb6M5e5T9nX6X8h", 
    "1F8X4T9p2Q7H5Jd3Yb6M5e5T9nX6R8h", "1H5X2T4p7Q9Jd3Yb6M5e5T9nX6X8hR", 
    "1L8p9X2T4Q7H5Jd3Yb6M5e5T9nX6R8hF", "1M5T9R4p2Q7H8Jd3Yb6M5e5T9nX6X8h", 
    "1F8X2T9p4Q7H5Jd3Yb6M5e5T9nX6R8h", "1H5X4T9p2Q7Jd3Yb6M5e5T9nX6X8hR", 
    "1L5p8X2T4Q7H9Jd3Yb6M5e5T9nX6R8hF", "1M5T2R9p4Q7H8Jd3Yb6M5e5T9nX6X8h", 
    "1F8X4T9p2Q7H5Jd3Yb6M5e5T9nX6R8h", "1H5X4T9p2Q7Jd3Yb6M5e5T9nX6X8hR"
];

let currentIndex = 0;

function updateTable() {
    document.getElementById('nameCell').textContent = names[currentIndex % names.length];
    document.getElementById('amountCell').textContent = amounts[currentIndex % amounts.length];
    document.getElementById('addressCell').textContent = btcAddresses[currentIndex % btcAddresses.length];
    currentIndex++;
}

setInterval(updateTable, 10000);
updateTable();
