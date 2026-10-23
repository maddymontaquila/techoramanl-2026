import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';
import 'reveal.js/dist/reveal.css';
import './fonts/fonts.css';
import './deck.css';

for (const preview of document.querySelectorAll('a[data-preview-image]')) {
  const image = preview.querySelector('img');
  if (!image) throw new Error('Image preview links must contain an image.');
  preview.href = image.src;
  preview.dataset.previewImage = image.src;
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const deck = new Reveal({
  width: 1920,
  height: 1080,
  margin: 0,
  minScale: 0.1,
  maxScale: 3,
  center: false,
  hash: true,
  controls: false,
  progress: true,
  transition: reducedMotion.matches ? 'none' : 'fade',
  backgroundTransition: reducedMotion.matches ? 'none' : 'fade',
  plugins: [RevealNotes]
});

deck.initialize();

reducedMotion.addEventListener('change', ({ matches }) => {
  deck.configure({
    transition: matches ? 'none' : 'fade',
    backgroundTransition: matches ? 'none' : 'fade'
  });
});
