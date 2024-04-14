const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const videoplayerCurrentTime = {
  duration: 61.857,
  percent: 0.049,
  seconds: 3.034,
};

const onPlay = function () {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(videoplayerCurrentTime)
  );
  const currentTime = localStorage.getItem('videoplayer-current-time');
  const parsedCurrentTime = JSON.parse(currentTime);
  console.log(parsedCurrentTime);
};

player.on('play', onPlay);

player
  .setCurrentTime(30.456)
  .then(onPlay)
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
