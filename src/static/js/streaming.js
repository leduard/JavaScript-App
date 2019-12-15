let socket = io();

socket.emit('newViewer');

socket.on('newViewer', async data => {
  video.currentTime = data;
});

socket.on('videoPlayed', async data => {
  video.currentTime = data;
  video.play();
});

socket.on('videoPaused', async data => {
  video.currentTime = data;
  video.pause();
});
