import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const saveCurrentTime = player.getCurrentTime();
localStorage.setItem('videoplayer-current-time', saveCurrentTime);

const currentTime = throttle(data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);
if (currentTime) {
  player.setCurrentTime(parseFloat(currentTime));
}

player.on('timeupdate', event => {
  currentTime(event);
});
window.addEventListener('DOMContentLoaded', currentTime);
