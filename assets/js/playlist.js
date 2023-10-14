const soundBlocks = document.querySelectorAll('.block-sound');

class PlaylistButton {
  constructor(blocks) {
    this.sounds = [];
    this.index = 0;
    this.blocks = blocks;

    this.button = document.createElement('button');
    this.button.innerText = 'Lire tout';
    this.button.classList.add('btn', 'playlist-btn');
    this.button.addEventListener('click', this.start.bind(this));

    this.blocks[0].querySelector('.block-content').prepend(this.button);
  }
  start() {
    this.blocks.forEach(block => this.sounds.push(block.querySelector('audio')));
    this.sounds.forEach(sound => sound.addEventListener('ended', this.next.bind(this)));
    this.play();
  }
  play() {
    this.sounds[this.index].play();
  }
  next() {
    if (this.index >= this.sounds.length -1) {
      return;
    }

    this.index += 1;
    this.play();
  }
}

if (soundBlocks.length > 0) {
  new PlaylistButton(soundBlocks)
}