import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

const saveCurrentTime = player.getCurrentTime();
localStorage.setItem('videoplayer-current-time', saveCurrentTime);

const currentTimeFromStorage = () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.saveCurrentTime(parseFloat(currentTime));
  }
};

player.on('timeupdate', throttle(saveCurrentTime, 1000));
window.addEventListener('DOMContentLoaded', currentTimeFromStorage);
