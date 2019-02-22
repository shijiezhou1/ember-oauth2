'use strict';

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };
const bodyParser = require('body-parser');

module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get('/students', function (req, res) {
    if (req.headers.authorization !== "Bearer secretcode") {
      return res.status(401).send(`Unauthorized   ${JSON.stringify(req.headers.authorization)}`);
    }
    return res.status(200).send({
      students: [
        { id: 1, name: 'Erik', age: 24 },
        { id: 2, name: 'Suze', age: 32 },
        { id: 3, name: 'Jill', age: 18 },
      ]
    });
  });
  // const globSync   = require('glob').sync;
  // const mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  // const proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  // // Log proxy requests
  // const morgan = require('morgan');
  // app.use(morgan('dev'));

  // mocks.forEach(route => route(app));
  // proxies.forEach(route => route(app));
  app.post('/token', function (req, res) {
    if (req.body.username === 'root' && req.body.password === 'r') {
      res.status(200).send({ 
        access_token: "secretcode",
        successMessage: "Login successful"
      });
    } else {
      res.status(400).send({ error: "invalid_grant" });
    }
  });


};
