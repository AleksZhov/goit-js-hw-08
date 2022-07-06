import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframeRef = document.querySelector('iframe');

const player = new Player(iframeRef);
const currentTime = localStorage.getItem('videoplayer-current-time');

const onPlay = throttle(function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

player.on('timeupdate', onPlay);
// player.off('timeupdate', offPlay);

if (currentTime) {
  player
    .setCurrentTime(currentTime)
    .then(localStorage.getItem('videoplayer-current-time'))
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}
