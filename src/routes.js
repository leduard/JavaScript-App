const express = require('express');
const path = require('path');

const routes = express.Router();

routes.get('/', async (req, res) => {
  res.send('asd');
});

routes.get('/chat', async (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'chat.html'));
});

module.exports = routes;
