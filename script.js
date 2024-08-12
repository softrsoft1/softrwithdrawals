const names = [
    'John Smith', 'Jane Doe', 'Michael Johnson', 'Emily Davis', 'Daniel Wilson',
    'Sarah Brown', 'James Taylor', 'Linda Moore', 'David Anderson', 'Laura Thomas',
    'Chris Jackson', 'Jessica White', 'Matthew Harris', 'Olivia Martin', 'Andrew Thompson',
    'Sophia Robinson', 'Daniel Garcia', 'Isabella Martinez', 'Ethan Clark', 'Charlotte Lee',
    'Jacob Lewis', 'Ava Walker', 'William Hall', 'Mia Allen', 'James Young' "Alet", "Arno", "Carla", "Elmar", "Anri", "Gavin", "Jody", "Hennie", "Melani", "Simon", "Nadia", "Antonie", "Jeanette", "Charles", "Leila", "Gideon", "Suzette", "Armand", "Danie", "Minette", "Stefanus", "Natascha", "Andre", "Reinet", "Rene", "Marlene", "Trevyn", "Natalie", "Hennette", "Lennie", "Corne", "Ronel", "Albertus", "Belinda", "Wilhelm", "Melisa", "Marcellus", "Jean", "Helena", "Nathan", "Nita", "Lucas", "Estelle", "Kobie", "Chantal", "Willemina", "Marcus", "Rosemarie", "Monty", "Annemarie", "Janine", "Niel", "Patricia", "Marelize", "Wessel", "Heloise", "Johannes", "Odette", "Arnold", "Lanie", "Danette", "Jochem", "Annamarie", "Albie", "Marianne", "Rika", "Quentin", "Elna", "Schalk", "Anneliese", "Dave", "Carin", "Reinette", "Ivan", "Elzaan", "Danie", "Yvette", "Marius", "Jannicke", "Erica", "Jurgens", "Karmen", "Jani", "Thea", "Jurie", "Bella", "Petrus", "Lizette", "Koert", "Johanna", "Boet", "Iris", "Karel", "Debbie", "Lutz", "Belinda", "Albert", "Juanita", "Pieter", "Leandri", "Jan", "Pieter", "Andries", "Elize", "Anna", "Johannes", "Elsie", "Hendrik", "Maria", "Albert", "Magriet", "Willem", "Johanna", "Christiaan", "Susanna", "Jaco", "Marietjie", "Gert", "Nicolaas", "Karin", "Daniel", "Elsabe", "Rina", "Koos", "Hester", "Lukas", "Lize", "Jannine", "Barend", "Christa", "Francois", "Veronica", "Jacobus", "Natasha", "Marius", "Annelie", "Stephan", "Ina", "Willemina", "Andria", "Eileen", "Johan", "Sanet", "Piet", "Elmarie", "Dirk", "Cornelia", "Liezel", "Fanie", "Adri", "Riaan", "Amanda", "Johannes", "Natasha", "Jacques", "Emilie", "Hugo", "Rika", "Kobus", "Mariska", "Anton", "Dina", "Gerrit", "Susan", "Willa", "Marnie", "Fritz", "Ingrid", "Stefan", "Anita", "Frikkie", "Ethel", "Rudi", "Anette", "Hendrika", "Aletta", "Lourens", "Mia", "Eugene", "Carla", "Freddy", "Monique", "Hendrina", "Eliana", "Gawie", "Irene", "Tiaan", "Teresa", "Louis", "Edna", "Murray", "Lianne", "Louisette", "Gideon", "Wilna", "Herman", "Nicolene", "Rufus", "Esmé", "Johanetta
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
    setInterval(displayData, Math.floor(Math.random() * (39000 - 16000 + 1)) + 16000);
};

window.onload = updateTable;
