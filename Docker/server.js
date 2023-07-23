const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send("Welcome to Mohamed Tech Inc");
});

app.listen(3000, function () {
    console.log("listening on port 3000");
});
