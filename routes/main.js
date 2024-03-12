const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.status(200).json({ message: "Hello", status: 200 });
})


routes.get('/home', (req, res) => {
    return res.status(200).json({ message: "Home Page", status: 200 });
})


module.exports = routes;