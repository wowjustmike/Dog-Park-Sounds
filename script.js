const track = document.querySelector('.tracks'),
        prevBtn = document.querySelector('prev'),
        playBtn = document.querySelector('#play'),
        nextBtn = document.querySelector('next')
        volume = document.querySelector('#volume');


// console.log(volume);

// Tracks
const pickTrack = () => {
    const rNum = Math.floor(Math.random()*3+1);
    console.log(rNum);
    return track.src = `/audio/final/fg${rNum}.mp3`;
}

console.log('test');

// Check if Playing
let isPlaying = false;

//Update DOM
// function loadTrack(track) {
//     track.src = `audio/final/${tracklist.name}.mp3`;
// }

// Play
var playSong = () => {
    pickTrack();
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    track.play();
}

// Pause
var pauseSong = () => {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    track.pause();
}

// Play or Pause Event Listener

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

volume.addEventListener('change', function(e){
    track.volume = e.currentTarget.value / 100;
});





// On load - Select Random Track


// console.log('Playing track: ' + rNum);