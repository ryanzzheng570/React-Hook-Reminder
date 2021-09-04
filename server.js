const express = require('express');
const cors = require('cors');

const app = express();

app.get('/api/sushi', cors(), (req, res) => {
    const sushi = [
        {
            "id": 1,
            "name": "Spicy Salmon Roll",
            "description": "Spicy salmon roll is a type of maki (sushi roll) made from raw salmon, spicy sauce (Japanese-style mayonnaise mixed with chili sauce), green onion and masago(fish egg)",
            "labels": null,
            "isAvail": true,
            "price": "7.99",
            "imageUrl": null
        },
        {
            "id": 2,
            "name": "Spicy Tuna Roll",
            "description": "Spicy salmon roll is a type of maki (sushi roll) made from raw red tuna, spicy sauce (Japanese-style mayonnaise mixed with chili sauce), green onion and masago(fish egg)",
            "labels": null,
            "isAvail": true,
            "price": "8.99",
            "imageUrl": null
        },
        {
            "id": 3,
            "name": "Spicy Albacore Roll",
            "description": "Spicy salmon roll is a type of maki (sushi roll) made from raw albacore tuna, spicy sauce (Japanese-style mayonnaise mixed with chili sauce), green onion",
            "labels": null,
            "isAvail": true,
            "price": "7.99",
            "imageUrl": null
        },
        {
            "id": 4,
            "name": "Spicy Butterfish Roll",
            "description": "Spicy salmon roll is a type of maki (sushi roll) made from raw butterfish, spicy sauce (Japanese-style mayonnaise mixed with chili sauce), green onion and masago(fish egg)",
            "labels": null,
            "isAvail": true,
            "price": "7.99",
            "imageUrl": null
        }
    ];

    res.json(sushi);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);