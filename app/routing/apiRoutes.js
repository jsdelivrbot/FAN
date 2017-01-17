const path = require('path');
const mysql = require('mysql');
const credentials = require('../data/protected');

const connection = mysql.createConnection({
  host     : credentials.host,
  user     : credentials.user,
  password : credentials.password,
  database : credentials.database
});

module.exports = (app) => {

    app.get('/api/friends', (req, res) => {
      connection.query('SELECT * FROM friends', (err, rows, fields) => {
        res.send(rows);
      });
    });

    app.post('/api/friends', (req, res) => {
      connection.query('SELECT * FROM friends', (err, rows, fields) => {
        let match = 1000;
        let matchName = '';
        let total = 0;
        let userScoreArr = req.body.scores.split(',');
        for (let i = 0; i < rows.length; i++){
          let scoreArr = rows[i].scores.split(',');
          total = userScoreArr.map(function (num, idx) {
            return Math.abs(num - scoreArr[idx]);
          }).reduce(function(totalNum, number){
              return Number(totalNum) + Number(number);
          }, 0);
          console.log(total);
          if (total < match){
            match = total;
            matchName = rows[i].name;
          }
        }
        console.log(matchName);
      });
      connection.query('INSERT INTO friends SET ?', req.body, (err) => {
          if (err) throw err;
          res.send("Succesfully Added.");
      });
    });
}
