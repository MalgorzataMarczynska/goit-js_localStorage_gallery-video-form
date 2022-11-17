import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const player = new Player('vimeo-player');

player.on('play', () => {
  console.log('played the video!');
});

player.getVideoTitle().then(title => {
  console.log('title:', title);
});
const savedTime = ({ duration, percent, seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
};
player.on('timeupdate', throttle(savedTime, 1000));

const getLocalLastPlayedTime = () => {
  const baseTime = 0;
  try {
    const localLastPlayTime = localStorage.getItem('videoplayer-current-time');
    if (!localLastPlayTime) return baseTime;
    const parsedTime = JSON.parse(localLastPlayTime);
    return Number(parsedTime);
  } catch (error) {
    console.log({ error });
    return baseTime;
  }
};
const restorePlayerToLastPlay = () => {
  const lastPlayTime = getLocalLastPlayedTime();
  player.setCurrentTime(lastPlayTime);
};
restorePlayerToLastPlay();

// const resetTime = ({ duration, percent, seconds }) => {
//   const lastPlayTime = getLocalLastPlayedTime();
//   if (lastPlayTime === duration - 1) {
//     localStorage.removeItem('videoplayer-current-time');
//   }
// };

const resetTime = () => {
  const lastPlayTime = getLocalLastPlayedTime();
  const localLastPlayTime = localStorage.getItem('videoplayer-current-time');
  const basedTime = 0;
  if (localLastPlayTime > 570) {
    localStorage.removeItem('videoplayer-current-time');
  }
  if (
    localStorage.getItem('videoplayer-current-time') === null ||
    localStorage.getItem('videoplayer-current-time') === undefined
  ) {
    console.log('I want to back to beginning!');
    restorePlayerToLastPlay();
    player.on('play', () => {
      console.log('playing the video once again!');
      player.setCurrentTime(basedTime);
    });
  }
};
player.on('ended', resetTime);
