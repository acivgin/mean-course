const express = require('express');
const app = express();
const cors = require('cors');

// var originsWhitelist = [
//   'http://localhost:4200' //this is my front-end url for development
// ];
// var corsOptions = {
//   origin: function (origin, callback) {
//     var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
//     callback(null, isWhitelisted);
//   },
//   credentials: true
// };
// //here is the magic
// app.use(cors(corsOptions));

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type', 'Access');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api/posts', (req, res, next) => {
  const posts = [{
      id: "29228922",
      title: "First Title",
      content: "First Content"
    },
    {
      id: "0938833d32",
      title: "Second Title",
      content: "Second Content"
    },
    {
      id: "00000393",
      title: "Third Title",
      content: "Third Content"
    },
  ];
  res.status(200).json({
    message: "Posts fetched successfuly !",
    posts: posts
  });
});


module.exports = app;
