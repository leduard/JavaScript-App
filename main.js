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

io.on('connection', async client => {
  console.log('connected');
  client.on('newMessage', function(data) {
    console.log(data);
    io.emit('newMessage', data);
  });
});
