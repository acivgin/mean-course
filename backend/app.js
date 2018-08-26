const express = require('express');
const app = express();

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
