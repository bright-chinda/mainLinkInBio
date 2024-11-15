const appModal = document.querySelectorAll('.app-modal');
const modalBtns = document.querySelectorAll('.modal-btn');

const cancelModalBtn = document.querySelectorAll('.cancel-modal-btn');
modalBtns.forEach((btn) => {
  btn.onclick = function () {
    var modalID = btn.getAttribute('data-modal');
    let modal = document.getElementById(modalID);
    modal.classList.add('visible');
    console.log(modalID);
  };
});

// * WINDOW FUNCTION *
// This function closes❌❌ each modal on window click
window.onclick = (e) => {
  if (e.target.classList.contains('copyEmbed')) {
    return;
  }
  if (e.target.classList.contains('app-modal') || e.target.classList.contains('app-modal-close')) {
    // e.target.classList.remove("visible");
    appModal.forEach((element) => {
      element.classList.remove('visible');
    });
  }
};

cancelModalBtn.forEach((cancel) => {
  cancel.addEventListener('click', (e) => {
    e.currentTarget.closest('.app-modal').classList.remove('visible');
  });
});

// 📑tab functionality
function openTab(evt, tabName) {
  let i, tabContent, tablink;

  tabContent = document.getElementsByClassName('tab-content');

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.add('inactive-tab');
  }

  tablink = document.getElementsByClassName('tab-btn');
  for (i = 0; i < tabContent.length; i++) {
    tablink[i].classList.remove('active-tab-indicator');
  }

  let content = document.getElementById(tabName);
  content.classList.remove('inactive-tab');
  evt.currentTarget.classList.add('active-tab-indicator');
}

// dropdown functionality
function toggleContent(contentId) {
  const content = document.getElementById(contentId);

  const caretUp = document.querySelector(`.${contentId} .caretUp`);
  const caretDown = document.querySelector(`.${contentId} .caretDown`);

  content.classList.toggle('visible');

  if (content.classList.contains('visible')) {
    caretDown.classList.remove('d-none');
    caretUp.classList.add('d-none');
  } else if (!content.classList.contains('visible')) {
    caretDown.classList.add('d-none');
    caretUp.classList.remove('d-none');
  }
}
// update input name
function updateInputName(context) {
  let fileInput = document.querySelector(`.${context} .file_input`).files[0].name;
  let inputDisplayName = document.querySelector(`.${context} .input_name`);
  inputDisplayName.innerHTML = fileInput;
}

// remove uploaded image
function removeUploadedImage(context) {
  let fileInputToRemove = document.querySelector(`.${context} .form`);
  let inputDisplayName = document.querySelector(`.${context} .input_name`);
  inputDisplayName.innerHTML = '--Select Image--';
  fileInputToRemove.reset();
}

// change color output
function changeInputColor(context) {
  let colorInputValue = document.querySelector(`.${context} .input_color`).value;
  let displayValue = document.querySelector(`.${context} .color-value-display`);
  displayValue.innerHTML = colorInputValue;
}
