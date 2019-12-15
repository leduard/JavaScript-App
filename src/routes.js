const express = require('express');
const path = require('path');
const fs = require('fs');

const routes = express.Router();

routes.get('/', async (req, res) => {
  res.send('asd');
});

routes.get('/chat', async (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'pages', 'chat.html'));
});

routes.get('/streaming', async (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'pages', 'video.html'));
});

routes.get('/commander', async (req, res) => {
  if (req.query.key == '5213') {
    res.sendFile(
      path.join(__dirname, 'static', 'pages', 'videoCommander.html')
    );
  } else {
    res.redirect('/');
  }
});

module.exports = routes;
