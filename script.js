body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
}

.container {
    margin: 20px auto;
    width: 90%;
    max-width: 1200px;
}

table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

thead {
    background-color: #333;
    color: #fff;
}

th, td {
    padding: 15px;
    text-align: center;
}

tbody tr:nth-child(even) {
    background-color: #f9f9f9;
}

.amount {
    color: #4CAF50;
}

.currency {
    color: #FFC107;
}

.address {
    color: #FF5722;
}

.name {
    color: #2196F3;
}

footer {
    background-color: #333;
    padding: 20px;
    text-align: center;
}

.footer-button {
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    text-decoration: none;
}

.footer-button:hover {
    background-color: #333;
    color: #fff;
}

@media (max-width: 768px) {
    table {
        font-size: 14px;
    }

    .footer-button {
        font-size: 14px;
        padding: 8px 16px;
    }
}
