//open embedded
let embeddedFrame = document.querySelector('#openEmbeddedFrame');
if (embeddedFrame) {
  embeddedFrame.addEventListener('click', function () {
    let modal = document.querySelector('.embededDisplayModal');
    let chatOpenImage = document.querySelector('.chat-open');
    let chatCloseImage = document.querySelector('.chat-close');
    modal.classList.toggle('visible');

    console.log('Modal visibility:', modal.classList.contains('visible'));

    if (modal.classList.contains('visible')) {
      chatOpenImage.classList.remove('visible');
      chatCloseImage.classList.add('visible');
    } else {
      chatOpenImage.classList.add('visible');
      chatCloseImage.classList.remove('visible');
    }
  });
}

// 📑tab functionality
function iqueOpenTab(evt, tabName) {
  let i, tabContent, tablink;

  tabContent = document.getElementsByClassName('tab-content-ique');

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.add('inactive-tab');
  }

  tablink = document.getElementsByClassName('tab-btn-ique');
  for (i = 0; i < tabContent.length; i++) {
    tablink[i].classList.remove('active-tab-indicator');
  }

  let content = document.getElementById(tabName);
  content.classList.remove('inactive-tab');
  evt.currentTarget.classList.add('active-tab-indicator');
}

// toggle functionaliy
function toggleIqueContent(contentId) {
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
function updateWelcomeMessage() {
  let customMessage = document.querySelector('.user_custom_message');

  let welcomeMessagedisplay = document.querySelector('.welcome_message_display');
  welcomeMessagedisplay.textContent = customMessage.value;
}

function updateMessagePop() {
  let welcomeMessage = document.querySelector('.ique_welcome_message_container_dsp');
  let transitionValue = document.querySelector('.set_welcome_message_transition').value;

  // Calculate transition time
  const transitionTime = transitionValue * 1000;

  // Remove animate-in class
  welcomeMessage.classList.remove('animate-in');

  // Remove any existing popXsec classes
  welcomeMessage.classList.remove('pop3sec', 'pop6sec', 'pop8sec', 'pop10sec');

  // Construct the transition class
  const transitionClass = `pop${transitionValue}sec`;

  // Set a timeout to re-add animate-in class after transitionTime
  setTimeout(() => {
    // Set the new transition class
    welcomeMessage.classList.add(transitionClass);
  }, transitionTime);
}
function updateSuggestedWords() {
  let suggestedInput = document.querySelector('.suggested_prompt_box').value;
  let suggestionArray = suggestedInput.split(',');
  let filteredSuggestions = suggestionArray.filter(function (element) {
    return element.trim() !== ''; // Trim to remove leading/trailing spaces
  });

  let suggestionButtonContainer = document.querySelector('.ique_suggestion_text_container .scrollable-div');
  suggestionButtonContainer.innerHTML = ''; // Clear existing buttons

  // Map array to update the suggestionContainer content
  filteredSuggestions.forEach((suggestion) => {
    let button = document.createElement('button');
    button.classList.add('ique_suggestion_btn', 'secondaryColor');
    button.textContent = suggestion.trim();
    suggestionButtonContainer.appendChild(button);
  });
}

// update the chatbot placeholder
function updateIquePlaceholder() {
  let placeholderValue = document.querySelector('.ique_ai_chatbot_message_placeholder').value;
  let messageBox = document.querySelector('.ique_input_message');
  messageBox.setAttribute('placeholder', placeholderValue);
}

// update title
function updateChatbotTitle() {
  let chatbotTitle = document.querySelector('.ique_chatbot_title').value;
  let chatbotTitleDisp = document.querySelector('.ique_chatbot_name_title');
  chatbotTitleDisp.textContent = chatbotTitle;
}

// update description
function updateChatbotDescription() {
  let chatbotDescriptionValue = document.querySelector('.ique_descrition_input').value;
  let chatbotDescriptionDisplay = document.querySelector('.ique_chatbot_description_disp');
  chatbotDescriptionDisplay.textContent = chatbotDescriptionValue;
}

//change logo
// update input name
function updateInputName(context) {
  let fileInput = document.querySelector(`.${context} .file_input`);
  let inputDisplayName = document.querySelector(`.${context} .input_name`);
  inputDisplayName.innerHTML = fileInput.files[0].name;

  // update image blob
  let iqueLogos = document.querySelectorAll('.ique_chatbot_logo');
  let imageFile = fileInput.files[0];
  const imageName = imageFile.name;
  let imageURL = window.URL.createObjectURL(imageFile);

  iqueLogos.forEach((logo) => {
    logo.setAttribute('src', imageURL);
  });
}

function updateArticleImageName(context) {
  let fileInput = document.querySelector(`.${context} .file_input`);
  let inputDisplayName = document.querySelector(`.${context} .input_name`);
  inputDisplayName.innerHTML = fileInput.files[0].name;
}

// change icon
function updateIcon(context) {
  let fileInput = document.querySelector(`.${context} .file_input`);
  let inputDisplayName = document.querySelector(`.${context} .input_name`);
  inputDisplayName.innerHTML = fileInput.files[0].name;

  // update image blob
  let iqueLogos = document.querySelector('.ique_chatbot_icon');
  let imageFile = fileInput.files[0];
  let imageURL = window.URL.createObjectURL(imageFile);

  iqueLogos.setAttribute('src', imageURL);
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

  let fadedColor = colorInputValue + '70';

  let displayValue = document.querySelector(`.${context} .color-value-display`);
  displayValue.innerHTML = colorInputValue;

  let header = document.querySelector('.ique_display_head_area_header');
  header.style.backgroundColor = colorInputValue;

  let botChatContainer = document.querySelector('.ique_chat_bot_reply_container .ique_chatbot_message');
  botChatContainer.style.backgroundColor = fadedColor;

  let suggestButton = document.querySelectorAll('.ique_suggestion_text_container .ique_suggestion_btn');
  suggestButton.forEach((btn) => {
    btn.style.backgroundColor = fadedColor;
  });

  let suggestionContainer = document.querySelector('.ique_user_input_container');
  suggestionContainer.style.backgroundColor = fadedColor;

  let embeddContainer = document.querySelector('.chat-container-embedded');
  embeddContainer.style.backgroundColor = colorInputValue;

  let userChatContainer = document.querySelector('.ique_chat_bot_user_reply_container .ique_user_message');
  userChatContainer.style.backgroundColor = colorInputValue;
}

// add FAQ
function addIqueFAQ() {
  let questionInput = document.querySelector('.ique_faq-question-input').value;
  let questionAnswer = document.querySelector('.ique_faq-question-response').innerHTML;
  let errorModal = document.querySelector('#iqueFaqErrorModal');
  let faqContainer = document.querySelector('.faq_container');

  let faqDefaultContainer = document.querySelector('.faq_default');

  if (questionAnswer === '' || questionInput === '') {
    errorModal.classList.add('visible');
  }

  if (questionAnswer !== '' && questionInput !== '') {
    // remove default icon
    if (faqContainer.children.length > 0) {
      if (faqDefaultContainer) {
        faqDefaultContainer.remove();
      }
    }

    let faqCard = document.createElement('div');
    faqCard.classList.add('ique_faq-item');

    let questionUniqueID = 'question' + faqContainer.children.length;

    let faqCardContent = `
    <!-- question header -->
    <section>
        <header class="ique_faq-question ${questionUniqueID}" onclick="toggleIqueContent('${questionUniqueID}')">
            <span>${questionInput}</span>
            <span class="caretUp">
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
                <path d="M0.897171 13L0 12.0444L5.20566 6.5L0 0.955559L0.897171 0L7 6.5L0.897171 13Z" fill="#003E80"></path>
                </svg>
            </span>
            <span class="caretDown d-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" viewBox="0 0 13 7" fill="none">
                    <path d="M-3.92166e-08 0.897171L0.955559 -5.26479e-07L6.5 5.20566L12.0444 -4.17688e-08L13 0.897171L6.5 7L-3.92166e-08 0.897171Z" fill="#003E80"></path>
                    </svg>
            </span>
      </header>
  
      <!-- question content -->
      <section class="ique_faq-question_content" id="${questionUniqueID}">
            <div class="content_parent">
              <div class="ique_faq-question-answer">
                  <div class="ique_faq-question-answer-content">
                    ${questionAnswer}
                    </div>
               </div>
  
            </div>
  
      </section>
    </section>
  
    `;

    faqCard.innerHTML = faqCardContent;
    faqContainer.appendChild(faqCard);

    document.querySelector('.ique_faq-question-input').value = '';
    document.querySelector('.ique_faq-question-response').innerHTML = '';

    // Saving FAQ
    let savedContainer = document.querySelector('.selfHelpFAQ_content_list');
    let savedFaqID = 'savedFaq' + savedContainer.children.length;

    let savedFaqCard = document.createElement('li');
    savedFaqCard.classList.add('list');

    let savedFaqCardContent = `
    
    <div class="saved_items">
        <span class="question">${questionInput}</span>
      
        <div class="dropdown">
            <button class="dropdown-toggle dropdown-btn" type="button" id="${savedFaqID}" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="grey"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"></path></svg>
            
            </button>
            <ul class="dropdown-menu" aria-labelledby="${savedFaqID}" data-popper-placement="bottom-start">
              <li><button>Edit</button></li>
              <li><button>Activate </button></li>
              <li><button>Delete </button></li>
            
            </ul>
        </div>
      </div>
    `;

    savedFaqCard.innerHTML = savedFaqCardContent;
    savedContainer.appendChild(savedFaqCard);
  }

  // smooth scroll effect
  savedContainer.scrollIntoView({ behavior: 'smooth' });

  // set the default image back when there is no FAQ
  if (faqContainer.children.length < 0) {
    let defaultDiv = document.createElement('div');
    defaultDiv.classList.add('faq_default');
    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', '/images/default img.png');

    defaultDiv.appendChild(imgElement);
    faqContainer.appendChild(defaultDiv);
  }
}

// generate embed script
const launchChatbot = () => {
  // let url = window.location.pathname;
  // const [origin, space, slug] = url.split("/");

  const slug = document.head.querySelector('[name~=user_chatbot_slug][content]').content;

  const baseURL = document.querySelector('meta[name="baseURL"]').getAttribute('content');

  let embedPath = `${baseURL}/assets/js/querryEmbed.js`;
  let copyModal = document.querySelector('#copyEmbed');

  let scriptDisplay = document.querySelector('#scriptDisplay');
  copyModal.classList.add('visible');

  scriptDisplay.innerHTML = '';

  // Create the script tag string
  let scriptTagString = `<script src="${embedPath}" data-token="${slug}"  baseURL="${baseURL}" async></script>`;

  // Create a text node containing the script tag string
  let scriptTextNode = document.createTextNode(scriptTagString);

  scriptDisplay.appendChild(scriptTextNode);
};

const copyEmbed = () => {
  const script = document.querySelector('.embed-content').textContent;
  let contentCopy = document.querySelector('.embed-content');
  let buttonText = document.querySelector('.copy-link');
  let button = document.querySelector('.copyEmbed-btn');

  if (window.navigator.clipboard.writeText(script)) {
    contentCopy.classList.add('copied');
    button.classList.add('copied');
    buttonText.textContent = 'Copied!';
  }
};

// star rating
const stars = document.querySelectorAll('.star');

if (stars) {
  stars.forEach((star) => {
    star.addEventListener('click', () => {
      const value = star.getAttribute('data-value');

      // Reset all stars
      stars.forEach((s) => s.classList.remove('filled'));

      // Fill stars up to the clicked one
      for (let i = 0; i < value; i++) {
        stars[i].classList.add('filled');
      }
    });
  });
}

// preview chat ratings
function previewRating(ratingType) {
  let allPreview = document.querySelectorAll('.rating-preview');
  allPreview.forEach((preview) => {
    preview.classList.remove('active');
  });
  let prevElement = document.querySelector(`#${ratingType}`);
  prevElement.classList.add('active');

  // remove previous chat response
  let feedbackContainer = document.querySelector('#feedBackDisp');
  let feedbackDispTextContent = document.querySelector('#feedbackText');
  feedbackContainer.classList.add('d-none');
  feedbackDispTextContent.textContent = '';
}

// chat rating preview
let ratingQuestions = document.querySelectorAll('.ratingQuestion');
if (ratingQuestions) {
  ratingQuestions.forEach((question) => {
    console.log(question);
    question.addEventListener('input', function () {
      let previewQuestionTarget = question.getAttribute('data-target');
      let previewQuestionEl = document.querySelector(`#${previewQuestionTarget}`);
      previewQuestionEl.textContent = '';
      previewQuestionEl.textContent = question.value;
    });
  });
}

// set comment
let setComments = document.querySelectorAll('.collect-comment');

if (setComments) {
  setComments.forEach((setComment) => {
    let targetPrev = setComment.getAttribute('data-target');
    let setCommentValue = setComment.value;
    setComment.addEventListener('change', function () {
      console.log(targetPrev, setCommentValue);
    });
  });
}

const rateChat = (type, e) => {
  let element = e.target;
  let dataTargetPrev = element.getAttribute('data-target');
  let targetComment = document.querySelector(`.collect-comment[data-target ="${dataTargetPrev}"]`);
  let targetCommentContainer = document.querySelector(`#${dataTargetPrev} .feedback-collector`);
  let feedbackContainer = document.querySelector('#feedBackDisp');
  let feedbackDispTextContent = document.querySelector('#feedbackText');
  let ratingFeedback = document.querySelector(`.ratingFeedback[data-target="${dataTargetPrev}"]`);

  // first remove all default feedback
  feedbackContainer.classList.add('d-none');
  feedbackDispTextContent.textContent = '';

  if (targetComment.checked) {
    targetCommentContainer.classList.add('active');
  } else if (ratingFeedback.value !== '') {
    feedbackContainer.classList.remove('d-none');
    feedbackContainer.classList.add('animate-in');
    feedbackDispTextContent.textContent = '';
    feedbackDispTextContent.textContent = ratingFeedback.value;
  } else {
    targetCommentContainer.classList.remove('active');
  }
};
// send feed back text
const sendFeedback = (type, e) => {
  let el = e.target;
  let elTarget = el.getAttribute('data-target');
  let feedbackContainer = document.querySelector('#feedBackDisp');
  let feedbackDispTextContent = document.querySelector('#feedbackText');
  let ratingFeedback = document.querySelector(`.ratingFeedback[data-target="${elTarget}"]`);

  if (ratingFeedback.value !== '') {
    feedbackContainer.classList.remove('d-none');
    feedbackContainer.classList.add('animate-in');
    feedbackDispTextContent.textContent = '';
    feedbackDispTextContent.textContent = ratingFeedback.value;

    // disable button
    el.classList.add('pe-none, disabled');
  }
};
