const express = require('express');

const app = express();

const port = 6300;


const routes = require('./routes/main')

app.use('/',routes)

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("server start on port : " + port);
})