/* styles.css */
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #ff7e5f, #feb47b);
    color: white;
    margin: 0;
    padding: 0;
    text-align: center;
}

header {
    background: #292e49;
    padding: 20px;
}

header h1 {
    margin: 0;
    font-size: 2.5em;
}

header p {
    margin: 10px 0 0;
    font-size: 1.2em;
}

#transaction-list {
    margin: 30px auto;
    width: 80%;
    max-width: 1200px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 30px;
}

th, td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    background: rgba(0, 0, 0, 0.2);
}

th {
    background: rgba(0, 0, 0, 0.4);
}

footer {
    background: #292e49;
    padding: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
}

footer button {
    background: #ff7e5f;
    border: none;
    padding: 10px 20px;
    color: white;
    font-size: 1em;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

footer button:hover {
    background: #feb47b;
}

@media (max-width: 768px) {
    header h1 {
        font-size: 2em;
    }

    footer {
        flex-direction: column;
        gap: 10px;
    }
}
