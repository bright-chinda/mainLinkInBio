
const myInput = document.getElementById('myInput');
let hideAtiveToggle = document.querySelectorAll('.hide-active-toggle');
let sectionDropdownBtn = document.querySelectorAll('.section-toggle-dropdown');
let queryCardsDropdownBtn = document.querySelectorAll('.hide-query-card-active-toggle');
let queryCardsDropdown = document.querySelectorAll('.query-cards-dropdown');
let activeButonToggle = document.querySelectorAll('.active-button-toggle');

function selectedicon() {
  let selectValue = document.getElementById('select-value').value;
  let icons = document.querySelectorAll('.icon-values');
  icons.forEach((element) => {
    element.classList.add('hidden');
  });
  let specificIcon = document.getElementById(selectValue);
  specificIcon.classList.remove('hidden');
  console.log(selectValue);
}

// modal survay button
function survaybtn(contexts) {
  let survayBtn = document.querySelector(`#${contexts}.survay-form-builder`);
  let contextbtn = document.getElementById(contexts);
  let continueBtn = document.querySelector('.modal-continue-btn');
  let surveyLink;

  if (contexts == 'survaybtnone') {
    survayBtn.style.border = '1px solid rgba(0, 62, 128, 0.4)';
    surveyLink = '/build-query.html';
    continueBtn.style.opacity = '1';
  } else if (contexts == 'quizform') {
    survayBtn.style.border = '1px solid rgba(0, 62, 128, 0.4)';
    surveyLink = '/analytics.html';
    continueBtn.style.opacity = '1';
  }

  continueBtn.setAttribute('href', surveyLink);
}
// modal survay button

// changing modal button text
let querySectorBox = document.querySelectorAll('.query-sectors');
let changeButtonText = document.querySelector('.change-button-text');
let textChanged = document.querySelectorAll('.query-sectors-text');

for (let i = 0; i < querySectorBox.length; i++) {
  querySectorBox[i].addEventListener('click', function () {
    changeButtonText.textContent = textChanged[i].textContent;
  });
}
// changing modal button text ends here


for (let i = 0; i < sectionDropdownBtn.length; i++) {
  sectionDropdownBtn[i].addEventListener('click', function () {
    hideAtiveToggle[i].classList.toggle('hide-active-');
    activeButonToggle[i].classList.toggle('remove-active-light-toggle');
  });
}

for (let i = 0; i < queryCardsDropdownBtn.length; i++) {
  queryCardsDropdownBtn[i].addEventListener('click', function () {
    queryCardsDropdown[i].classList.toggle('hide-active-');
  });
}

// // boostrap modal
// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus();
// });
// // boostrap modal ends here

// boostrap modal
// if (myModal) {
//   myModal.addEventListener('shown.bs.modal', () => {
//     myInput.focus()
//  })
// }
// boostrap modal ends here


