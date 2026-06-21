const keys = document.querySelectorAll('.key');

const noteFiles = {
  c: 'audio/c.mp3',
  'c-sharp': 'audio/c-sharp.mp3',
  d: 'audio/d.mp3',
  'd-sharp': 'audio/d-sharp.mp3',
  e: 'audio/e.mp3',
  f: 'audio/f.mp3',
  'f-sharp': 'audio/f-sharp.mp3',
  g: 'audio/g.mp3',
  'g-sharp': 'audio/g-sharp.mp3',
  a: 'audio/a.mp3',
  'a-sharp': 'audio/a-sharp.mp3',
  b: 'audio/b.mp3',
  c2: 'audio/c2.mp3'
};

const keyMap = {
  a: 'c-key',
  w: 'c-sharp-key',
  s: 'd-key',
  e: 'd-sharp-key',
  d: 'e-key',
  f: 'f-key',
  t: 'f-sharp-key',
  g: 'g-key',
  y: 'g-sharp-key',
  h: 'a-key',
  u: 'a-sharp-key',
  j: 'b-key',
  k: 'high-c-key'
};

function playNoteForKey(keyElement) {
  const note = keyElement.dataset.note;
  const audio = new Audio(noteFiles[note]);
  audio.currentTime = 0;
  audio.play();
}

function keyPlay(event) {
  event.target.style.backgroundColor = 'yellow';
  event.target.classList.add('playing');
  playNoteForKey(event.target);
}

function keyReturn(event) {
  event.target.style.backgroundColor = '';
  event.target.classList.remove('playing');
}

function eventAssignment(note) {
  note.onmousedown = keyPlay;
  note.onmouseup = keyReturn;
  note.onmouseleave = keyReturn;
}

keys.forEach(eventAssignment);

document.addEventListener('keydown', function(event) {
  const keyId = keyMap[event.key.toLowerCase()];
  if (!keyId) return;

  const keyElement = document.getElementById(keyId);
  if (!keyElement || keyElement.classList.contains('playing')) return;

  keyPlay({ target: keyElement });
});

document.addEventListener('keyup', function(event) {
  const keyId = keyMap[event.key.toLowerCase()];
  if (!keyId) return;

  const keyElement = document.getElementById(keyId);
  if (!keyElement) return;

  keyReturn({ target: keyElement });
});
