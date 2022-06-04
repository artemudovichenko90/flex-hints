const btns = document.querySelectorAll('.btn');
const flexContainer = document.querySelector('.flex-container');

for (const btn of btns) {
  btn.addEventListener('click', ({ target: { dataset: { flex } }, target }) => {
    flexContainer.style.flexDirection = flex;
    activeButton(target);
  })
}

function activeButton(target) {
  const BTN_ACTIVE = 'btn-active';
  const BTN_NON_ACTIVE = 'btn-non-active';
  for (const btn of btns) {
    if (btn === target) {
      btn.classList.add(BTN_ACTIVE);
      btn.classList.remove(BTN_NON_ACTIVE);
    } else {
      btn.classList.add(BTN_NON_ACTIVE);
      btn.classList.remove(BTN_ACTIVE);
    }
  }
}