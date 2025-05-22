const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtns = document.querySelectorAll('.show-modal');

console.log(openModalBtns);
// Function to open the modal

for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

// Function to close the modal
closeModalBtn.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
// Function to close the modal when clicking outside of it
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// Function to close the modal when pressing the Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
console.log('Modal opened');
