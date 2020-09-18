const track = document.querySelector('.tracks'),
        prevBtn = document.querySelector('prev'),
        playBtn = document.querySelector('#play'),
        nextBtn = document.querySelector('#next')
        volumeSlider = document.querySelector('#volume');


// console.log(volume);

// Pick random track
const pickTrack = () => {
    const rNum = Math.floor(Math.random()*3+1);
    console.log(rNum);
    return track.src = `/audio/final/fg${rNum}.mp3`;
}

// Check if Playing
let isPlaying = false;

// Play
var playTrack = () => {
    pickTrack();
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    track.play();
}

// Pause
var pauseTrack = () => {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    track.pause();
}

// Next Track
var nextTrack = () => {
    pickTrack();
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    track.play();
}
// Event Listeners

playBtn.addEventListener('click', () => (isPlaying ? pauseTrack() : playTrack()));

nextBtn.addEventListener('click', () => (isPlaying ? pauseTrack() : nextTrack()));



// Volume Slider
// volume.addEventListener('change', function(e){
//     track.volume = e.currentTarget.value / 100;
// });
