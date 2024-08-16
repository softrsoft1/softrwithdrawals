const names = [
    "Themba Zulu", "Bongani Sithole",
    "Sibusiso Ntuli", "Gerhardus van Wyk", "Cornelia Smith", "Riaan van Zyl", "Marietjie Fourie", "Coenraad Louw"
    "Liezel Smit", "Francois Viljoen", "Annetjie Maree", "Diederik Visser", "Nadine le Roux", "Gert van Niekerk",
    "Antoinette Bosman", "Danie van Rensburg", "Estelle de Villiers", "Cobus van Heerden", "Adriana Jacobs",
    "Nicolette Cloete", "Stephanus Malan", "Izelle Theron", "Charl Marais", "Martie Grobler", "Jaco van Tonder",
    "Adelé van der Walt", "Bennie Olivier", "Yolandi van Staden", "Gerda Nel", "Pierre Joubert", "Ilze van Rooyen",
    "Kobus van der Linde", "Marelize Burger", "Rudi de Beer", "Sonja van der Westhuizen", "Eben van der Linde",
    "Annette Coetzee", "Deon Botha", "Chantel Prinsloo", "André van Rensburg", "Nico van Dyk", "Liesl van Heerden",
    "Jacques Fourie", "Theresa van der Merwe", "Vusi Masuku", "Tshepo Mthembu", "Thulani Ngcobo ", "John Smith", 
    "Jane Doe", "Michael Johnson", "Emily Davis", "Chris Brown", "Sarah Wilson",
    "David Clark", "Jessica Moore", "James Thompson", "Laura Garcia", "Liam Lewis", "Emma Walker",
    "Mason Allen", "Olivia Robinson", "Noah White", "Isabella Young", "Lucas King", "Sophia Hill",
    "Benjamin Scott", "Mia Green", "Elijah Adams", "Amelia Baker", "Oliver Nelson", "Ava Carter",
    "Ethan Mitchell", "Charlotte Perez", "Jacob Roberts", "Abigail Turner", "William Phillips",
    "Sofia Parker", "Alexander Evans", "Mila Collins", "Henry Edwards", "Ella Stewart",
    "Daniel Morris", "Zoe Sanchez", "Jackson Rivera", "Chloe Bennett", "Sebastian Price", "Layla Reed"
    Thabo Mokoena", "Sipho Ndlovu", "Mpho Dlamini", "Kagiso Khumalo", "Thandiwe Mlambo",
    "Zanele Gumede", "Nomvula Sibanda", "Nthabiseng Mkhize", "Lerato Mokoena", "Nomsa Ncube", "Palesa Ngwenya",
    "Khanyisile Hadebe", "Nokuthula Mpofu", "Nosipho Mkhwanazi ", "Lesedi Maseko", "Mbali Mofokeng", "Gugu Nkosi",
    "Kamohelo Dube", "Ntokozo Mdletshe", "Siyabonga Mtshali", "Andile Manana", "Nhlanhla Madonsela", "Sifiso Shabangu",
    "Hlengiwe Nyathi ", "Jabulani Khoza", "Xolani Makhanya", "Nkosinathi Ndlovu", "Mandla Zulu", "Bheki Ngwenya",
    "Lwazi Mkhize", "Phumzile Gcabashe", "Lindiwe Shongwe", "Sindi Zuma", "Zodwa Nkomo ", "Mabaso", "Mguni", "Mathenjwa",
    "Tshabalala", "Mthimkhulu", "Ncube", "Ntshangase", "Xulu", "Ngubane", "Qwabe", "Jan van der Merwe", "Pieter Botha",
    "Charlene de Klerk", "Hendrik Kruger", "Annelize Swart", "Willem Pretorius", "Elize Vermeulen", "Johan Steyn",
    "Marinda du Plessis", "Themba Zulu", "Bongani Sithole",
    "Sibusiso Ntuli", "Gerhardus van Wyk", "Cornelia Smith", "Riaan van Zyl", "Marietjie Fourie", "Coenraad Louw"
    "Liezel Smit", "Francois Viljoen", "Annetjie Maree", "Diederik Visser", "Nadine le Roux", "Gert van Niekerk",
    "Antoinette Bosman", "Danie van Rensburg", "Estelle de Villiers", "Cobus van Heerden", "Adriana Jacobs",
    "Nicolette Cloete", "Stephanus Malan", "Izelle Theron", "Charl Marais", "Martie Grobler", "Jaco van Tonder",
    "Adelé van der Walt", "Bennie Olivier", "Yolandi van Staden", "Gerda Nel", "Pierre Joubert", "Ilze van Rooyen",
    "Kobus van der Linde", "Marelize Burger", "Rudi de Beer", "Sonja van der Westhuizen", "Eben van der Linde",
    "Annette Coetzee", "Deon Botha", "Chantel Prinsloo", "André van Rensburg", "Nico van Dyk", "Liesl van Heerden",
    "Jacques Fourie", "Theresa van der Merwe", "Vusi Masuku", "Tshepo Mthembu", "Thulani Ngcobo ",
];

const cryptoAddresses = Array.from({ length: 600 }, () =>
    Math.random().toString(36).substring(10, 15) + Math.random().toString(36).substring(10, 15)
);

const generateRandomAmount = () => (Math.random() * ($10000 - $50) + 50).toFixed(2);

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
