import BTN_ACTIVE from './assets/js/constants.js'

const btns = document.querySelectorAll('.btn');
const flexContainer = document.querySelector('.flex-container');

for (const btn of btns) {
  btn.addEventListener('click', ({ target: { dataset: { flex } }, target }) => {
    flexContainer.style.flexDirection = flex;
    activeButton(target);
  })
}

function activeButton(target) {
  for (const btn of btns) {
    btn.classList.remove(BTN_ACTIVE);
    if (btn === target) {
      btn.classList.add(BTN_ACTIVE);
    }
  }
}