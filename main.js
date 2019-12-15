const express = require('express');
const routes = require('./src/routes');
const http = require('http');
const path = require('path');

const app = express();
const server = http.Server(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;

app.use(routes);
app.use(express.static(path.join(__dirname, 'src', 'static')));

server.listen(PORT, () => {
  console.log(`Open at *:${PORT}`);
});

let currentTime = 0;
let isPlaying = true;

io.on('connection', async socket => {
  socket.on('newMessage', function(data) {
    console.log(data);
    io.emit('newMessage', data);
  });

  socket.on('newViewer', async data => {
    socket.emit('newViewer', { currentTime, isPlaying });
  });
});

io.of('/commander').on('connection', async socket => {
  console.log('commander connected');

  socket.on('videoTimeUpdate', async data => {
    currentTime = data.currentTime;
  });

  socket.on('videoPlayed', async data => {
    isPlaying = true;
    io.emit('videoPlayed', data);
  });

  socket.on('videoPaused', async data => {
    isPlaying = false;
    io.emit('videoPaused', data);
  });
});
