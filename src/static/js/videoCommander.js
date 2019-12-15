const commander = io('/commander');

video.addEventListener('timeupdate', function() {
  commander.emit('videoTimeUpdate', { currentTime: video.currentTime });
});
