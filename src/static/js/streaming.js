let socket = io();

socket.emit('newViewer');

socket.on('newViewer', async data => {
  video.currentTime = data.currentTime;
  if (!data.isPlaying) video.pause();
});

socket.on('videoPlayed', async data => {
  video.currentTime = data;
  video.play();
});

socket.on('videoPaused', async data => {
  video.currentTime = data;
  video.pause();
});
