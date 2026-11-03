// Employee routes using express.Router()

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("All Employees");
});

router.post("/", (req, res) => {
    res.status(201).send("New Employee data received!");
});

router.get("/:id", (req, res) => {
    res.status(200).send(`Employee ID: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
    res.status(200).send(`Employee ${req.params.id} delete request received!`);
});

module.exports = router;
