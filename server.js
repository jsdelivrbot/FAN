const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/app/public'));

const apiRoutes = require('./app/routing/apiRoutes.js')(app);
const htmlRoutes = require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
