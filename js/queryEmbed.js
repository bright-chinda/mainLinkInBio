(function () {
  let token = document.currentScript.getAttribute('data-token');
  console.log(token);

  // Create an embed element
  let embed = document.createElement('embed');

  // Set attributes for the embed element
  embed.src = '/chatbot-embed.html';
  embed.type = '';
  embed.style.cssText = 'position: absolute; right: 0; bottom: 0; z-index: 1000; height: 100%; width: 100%;';
  // Append the embed element to the body of the HTML document
  document.body.appendChild(embed);
})();
