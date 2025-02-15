// Create web server
// 1. create a web server
// 2. create a route for /comments
// 3. return an array of comments

const express = require('express');
const app = express();

const comments = [
  { username: 'Tammy', comment: 'lololol' },
  { username: 'Bo', comment: 'lmao' },
  { username: 'Sally', comment: 'rofl' }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Visit http://localhost:3000/comments in your browser to see the comments