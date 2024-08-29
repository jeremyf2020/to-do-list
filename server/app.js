const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

// Serve static files
app.use(express.static("dist"));

const items = [
    { name: "Laptop", price: 500 },
    { name: "Desktop", price: 700 }
];

// API endpoint
app.get("/api/items", (req, res) => {
    res.json(items);  // Ensure the response is JSON
});

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
