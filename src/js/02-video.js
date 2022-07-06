import Player from '@vimeo/player';

const player = new Player('handstick', {
  id: 19231868,
  width: 640,
});

const onPlay = function (data) {
  let currentTime = player.getCurrentTime().then(function (seconds) {
    // seconds = the current playback position
  });
  return currentTime;
};

player.on('timeupdate', onPlay);
player.off('timeupdate', offPlay);

let currentTime = player
  .getCurrentTime()
  .then(function (seconds) {
    // seconds = the current playback position
  })
  .catch(function (error) {
    // an error occurred
  });
console.log(currentTime);
console.log(localStorage);
localStorage.setItem('videoplayer-current-time', currentTime);
