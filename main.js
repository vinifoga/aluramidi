function playSound(elementId) {
  const element = document.querySelector(elementId);
  if(element && element.localName === 'audio'){
    element.play();
  } else {
    alert('Element not found')
  }
}

const switchList = document.querySelectorAll('.tecla');

switchList.forEach(switchKey => {
  const sound = switchKey.classList[1];
  switchKey.onclick = () => {
    playSound(`#som_${sound}`);
  };
  switchKey.onkeydown = (event) => {
    if(event.code === 'Space' || event.code === 'Enter'){
      switchKey.classList.add('ativa');
    }
  }
  switchKey.onkeyup = () => {
      switchKey.classList.remove('ativa');
  }
});