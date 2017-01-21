const path = require('path');

module.exports = (app) => {

    app.get('/survey', (req, res) => {
      res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    app.get('/results', (req, res) => {
      res.sendFile(path.join(__dirname, "/../public/results.html"));
    });
    app.use((req, res) => {
      res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
}
