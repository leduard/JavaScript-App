let video = document.getElementById('video');
let progess = document.getElementById('progress');
let volume = document.getElementById('volume');

setTimeout(() => {
  progess.max = video.duration;
  volume.value = 0.01;
  video.volume = 0.01;
}, 100);

video.addEventListener('timeupdate', function() {
  progess.value = this.currentTime;
});

function playHandler() {
  let icon = document.getElementById('player-pause');

  if (video.paused) {
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');

    commander.emit('videoPlayed', video.currentTime);
    video.play();
  } else {
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');

    commander.emit('videoPaused', video.currentTime);
    video.pause();
  }
}

function changeVolumeHandler(value) {
  let icon = document.getElementById('volume-icon');
  video.muted = false;

  if (value == 0) {
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');
  } else {
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
  }

  video.volume = value;
}

function volumeClickHandler() {
  let icon = document.getElementById('volume-icon');

  if (video.volume === 0) {
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');

    video.volume = volume.value;
  } else {
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');

    video.volume = 0;
  }
}
