let helpEmojiBtn = document.querySelectorAll('.help-desk-emoji-btn');
let helpEmojiBody = document.querySelectorAll('.help-desk-emoji-body');
let emojilist = document.querySelector('.emoji-list');
let staticDiv = document.querySelector('.static-div');
let emojiSearch = document.querySelector('#help-search-emoji');

for(let i = 0; i < helpEmojiBtn.length; i++){
  helpEmojiBtn[i].addEventListener('click', function () {
    helpEmojiBody[i].classList.toggle('active-emoji-body');
  });
}


window.addEventListener('click', (e) => {
  // alert("gg")
  if (e.target.classList.contains('help-desk-emoji-body')) {
    // console.log(e.target);
    helpEmojiBody.classList.remove('active-emoji-body');
  }
});

// fetch emoji api
fetch('https://emoji-api.com/emojis?access_key=f72ba4e39a6ce91c84dfb5d209539fb1b247ee80')
  .then((res) => res.json())
  .then((data) => loademoji(data));

function loademoji(data){
  data.forEach((emoji) => {
    let emojiButtonBody = document.createElement('button');
    emojiButtonBody.setAttribute('emoji-name', emoji.slug);
    emojiButtonBody.textContent = emoji.character;
    emojiButtonBody.onclick = buttonemojis;
    emojilist.appendChild(emojiButtonBody);
  });
}

function buttonemojis() {
  helpEmojiBody.classList.remove('active-emoji-body');
}

emojiSearch.addEventListener('keyup', (e) => {
  let value = e.target.value;
  let emojis = document.querySelectorAll('.emoji-list button');
  emojis.forEach((emoji) => {
    if (emoji.getAttribute('emoji-name').toLowerCase().includes(value)) {
      emoji.style.display = 'flex';
    } else {
      emoji.style.display = 'none';
    }
  });
});
// fetch emoji api ends here

// help chat message area
function selectedbox() {
  let selectTextBody = document.querySelector('#select-textbody').value;
  let selectedTextBackground = document.querySelectorAll('.selected-text-background');

  selectedTextBackground.forEach((element) => {
    element.classList.add('hidden');
  });
  // selectedTextBackground.classList.add("hidden")

  let specifictextarea = document.getElementById(selectTextBody);
  specifictextarea.classList.remove('hidden');
  console.log(selectedTextBackground);
}
// help chat message area ends here
