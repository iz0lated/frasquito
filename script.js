function toggleMessage(element) {
  const msg = element.querySelector('.message');
  msg.style.display = msg.style.display === 'block' ? 'none' : 'block';
}

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('papelitos');
  const notes = Array.from(container.querySelectorAll('.note'));

  for (let i = notes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [notes[i], notes[j]] = [notes[j], notes[i]];
  }

  container.innerHTML = '';
  notes.forEach(note => container.appendChild(note));
});
