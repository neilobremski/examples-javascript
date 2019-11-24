const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded for `req.body` in POST handler
// NOTE: this only works in 4.16+
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  

// ROUTE: index.html (root page)
app.get('/', function (req, res) {
    var fn = path.join(__dirname, 'index.html');
    console.log("SEND: " + fn);
    res.sendFile(fn);
});

// ROUTE: /post (handle data posted by client)
app.post('/post', function (req, res) {
    console.log("[POST] request recv " + (new Date()));
    console.log("POST RECEIVED!");
    console.log(req.body);
    console.log("- - - - - - - - - - - -")
    var response = {
        request: req.body,
        message: "You are weird (" + req.body.answers.join(',') + ")",
    }
    res.send(response);
    console.log("[POST] response sent " + (new Date()));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
