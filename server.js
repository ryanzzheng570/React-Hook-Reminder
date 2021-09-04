const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ** MIDDLEWARE ** //
const whitelist = ['http://localhost:3000', 'http://localhost:5000', 'https://react-sushi-restaurant-online.herokuapp.com/']
const corsOptions = {
    origin: function (origin, callback) {
        console.log("** Origin of request " + origin)
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log("Origin acceptable")
            callback(null, true)
        } else {
            console.log("Origin rejected")
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions))

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

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000
app.listen(PORT, (req, res) => {
    console.log(`server listening on port: ${PORT}`)
});

