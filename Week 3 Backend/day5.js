
// 5 important status codes
// Status Code	Meaning	Kab use hota hai?
// 200	OK	Request successful
// 201	Created	Naya record create hua
// 400	Bad Request	Client ne invalid data bheja
// 404	Not Found	Requested resource nahi mila
// 500	Internal Server Error	Server ke andar error aaya

const express = require("express");

const app = express();

// Custom Middleware
function checkRequest(req, res, next) {

    console.log("New request received!");

    next();

}

// Middleware register
app.use(checkRequest);

// Route
app.get("/", (req, res) => {

    res.send("Welcome to Office Management API!");

});

app.listen(10000, () => {
    console.log("Server running!");
});