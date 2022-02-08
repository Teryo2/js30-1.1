const obj = {  
    forest : {    file : 'forest.jpg',   sound: 'forest.mp3'},
    solovey : {    file : 'solovey.jpg',  sound: 'solovey.mp3'},
    drozd : {      file : 'drozd.jpg',    sound: 'drozd.mp3' },
    zarynka : {  file : 'zarynka.jpg',  sound: 'zarynka.mp3'},
    javoronok : { file : 'javoronok.jpg',sound: 'javoronok.mp3'},
    slavka : {     file : 'slavka.jpg',   sound: 'slavka.mp3'}
};

const links = document.querySelectorAll('[data-item]');
const button = document.querySelector('.play');
const image = document.querySelector('.main');

let isPlaying = false;

const audio = new Audio();
let currentSound = `./assest/audio/${obj.forest.sound}`;

window.addEventListener('load', preloadImages);

links.forEach((link, index) => {
    link.addEventListener('click', () => {
        image.style.background = `url(./assest/img/${obj[link.dataset.item].file})`;
        currentSound = `./assest/audio/${obj[link.dataset.item].sound}`;
        links.forEach((b) => b.classList.remove('active'));
        link.classList.add('active');
        
        isPlaying = false;
        playAudio();
    });
});

button.addEventListener('click', playAudio);

function playAudio() {
    if(!isPlaying) {
        audio.src = currentSound;
        audio.currentTime = 0;
        audio.play();
        isPlaying = true;
        button.classList.add('pause');
    } else {
        audio.pause();
        isPlaying = false;
        button.classList.remove('pause');
    }
};

function preloadImages() {
    links.forEach((button, index)=> {
        const img = new Image();
        img.src = `./assets/img/${obj[button.dataset.item].file}`;
    })
};