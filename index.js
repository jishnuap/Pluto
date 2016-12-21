"use strict";
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello Worlds!');
});
app.listen(process.env.PORT, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=index.js.map