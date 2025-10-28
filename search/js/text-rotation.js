  const textSelect= [
  'The best search engine around!',
  'Proudly serving relevant results since sometime last Tuesday.',
  'Trusted by dozens, feared by none.',
  'Our algorithms care about you. Deeply. Too deeply, some say.',
  'Proudly faster than most snails and some competitors.',
  'Serving information fresh, occasionally raw.',
  `We know what you're thinking — because you searched it.`,
  'Do not taunt the search bar.',
  'NotGoogl is not affiliated with Googl, Goo, or any other gelatinous entities.',
];
 
function getRandomText() {
    const randomIndex = Math.floor(Math.random() * textSelect.length);
    return textSelect[randomIndex];
  }
 
function loadText() {
  const myDiv = document.getElementById('div_text');
  myDiv.innerHTML= getRandomText();
}
 
window.onload = loadText;