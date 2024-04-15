import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const currentTimeFromStorage = () => {
  const timeFromStorage = localStorage.getItem('videoplayer-current-time');
  if (timeFromStorage) {
    player.setCurrentTime(parseFloat(timeFromStorage));
  }
};

window.addEventListener('DOMContentLoaded', currentTimeFromStorage);

const currentTime = throttle(data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

player.on('timeupdate', event => {
  currentTime(event);
});
