import '../src/SCSS/styles.scss';

const checkButton = document.querySelector('.check-button');
checkButton.addEventListener('click', function() {
  this.classList.toggle('checked');
});