// audio.js

// Audio Manager class
class AudioManager {
    constructor() {
        this.context = new (window.AudioContext || window.webkitAudioContext)();
        this.sounds = {};
        this.bgMusic = null;
    }

    // Load sound effects
    loadSound(name, url) {
        return fetch(url)
            .then(response => response.arrayBuffer())
            .then(data => this.context.decodeAudioData(data))
            .then(buffer => {
                this.sounds[name] = buffer;
            });
    }

    // Play sound effect
    playSound(name) {
        if (this.sounds[name]) {
            const source = this.context.createBufferSource();
            source.buffer = this.sounds[name];
            source.connect(this.context.destination);
            source.start(0);
        }
    }

    // Load background music
    loadBackgroundMusic(url) {
        return fetch(url)
            .then(response => response.arrayBuffer())
            .then(data => this.context.decodeAudioData(data))
            .then(buffer => {
                this.bgMusic = buffer;
            });
    }

    // Play background music
    playBackgroundMusic() {
        if (this.bgMusic) {
            const source = this.context.createBufferSource();
            source.buffer = this.bgMusic;
            source.connect(this.context.destination);
            source.loop = true;
            source.start(0);
        }
    }

    // Set volume
    setVolume(value) {
        this.context.destination.gain.value = value;
    }
}

// Usage example:
// const audioManager = new AudioManager();
// audioManager.loadSound('jump', 'path/to/jump.mp3');
// audioManager.playSound('jump');
// audioManager.loadBackgroundMusic('path/to/bg-music.mp3');
// audioManager.playBackgroundMusic();