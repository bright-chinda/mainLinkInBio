const editorPopup = document.querySelector('.highlightable-text-popup');
// const highlightbleText = document.querySelector('.highlightableTextarea');
const questionBoxHighlight = document.querySelector('.quetion-box-editor');


questionBoxHighlight.addEventListener('mouseup', selectText);


// select popup
function selectText(e) {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText !== '') {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
  
      editorPopup.style.top = rect.bottom + 'px';
      editorPopup.style.left = rect.left + 'px';
  
      editorPopup.classList.add('visible');
  
      return selectedText;
    } else {
      editorPopup.classList.remove('visible');
    }
  }
  
  function formatBoldText(ev) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
  
    function translate(selectedText) {
      let diff;
      if (/[A-Z]/.test(selectedText)) {
        diff = '𝗔'.codePointAt(0) - 'A'.codePointAt(0);
      } else {
        diff = '𝗮'.codePointAt(0) - 'a'.codePointAt(0);
      }
      return String.fromCodePoint(selectedText.codePointAt(0) + diff);
    }
    let newText = selectedText.replace(/[A-Za-z]/g, translate);
    console.log(selectedText);
    translate();
  }
  
  function formatBoldText(ev) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
  
    function translate(char) {
      if (/[A-Z]/.test(char)) {
        return String.fromCodePoint(char.codePointAt(0) + '𝗔'.codePointAt(0) - 'A'.codePointAt(0));
      } else {
        return String.fromCodePoint(char.codePointAt(0) + '𝗮'.codePointAt(0) - 'a'.codePointAt(0));
      }
    }
  
    const isBold = range.fontWeight === 'bold';
  
    const newText = Array.from(selectedText).map(translate).join('');
  
    range.deleteContents();
    range.insertNode(document.createTextNode(newText));
  
    if (!isBold) {
      range.bold();
    } else {
      range.bold = false;
    }
  }