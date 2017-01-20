const path = require('path');

module.exports = (app) => {

    app.get('/survey', (req, res) => {
      res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    app.get('/results', (req, res) => {
      res.sendFile(path.join(__dirname, "/../public/results.html"));
    });
    // app.get("/css", function (req, res) {
    //    res.sendFile(path.join(__dirname, "../public/css/survey_style.css"));
    // });
    // app.get("/reset", function (req, res) {
    //    res.sendFile(path.join(__dirname, "../public/css/reset.css"));
    // });
    // app.get("/javascript", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/javascript/friends3.js"));
    // });
    app.use((req, res) => {
      res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
}
