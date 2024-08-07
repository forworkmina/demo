function getResponse(option) {
  const chatBody = document.getElementById('chatBody');
  let userMessage = '';
  let botResponse = '';

  switch (option) {
      case 'option1':
          userMessage = 'どんな支援金があるか';
          botResponse = '補助金ページはこちら　<button onclick="window.location.href=\'category.html\'">補助金ページ</button>';
          break;
      case 'option2':
          userMessage = '補助金に関するご相談';
          botResponse = 'お問い合わせページはこちら　<button onclick="window.location.href=\'contact.html\'">お問い合わせ</button>';
          break;
      case 'option3':
          userMessage = '補助金に関するサポートを頼みたい';
          botResponse = '専門の社労士・行政書士などにお繋げします。 <button onclick="window.location.href=\'contact.html\'">お問い合わせ</button>';
          break;
      default:
          userMessage = 'Unknown option';
          botResponse = '申し訳ございません。もう一度やり直してください';
  }

  // Append user message with avatar
  const userMessageElement = document.createElement('div');
  userMessageElement.className = 'chat-message user-message';
  userMessageElement.innerHTML = `<img src="user.png" alt="User Avatar" class="avatar"><span class="message-text">${userMessage}</span>`;
  chatBody.appendChild(userMessageElement);

  // Append bot response with avatar
  const botResponseElement = document.createElement('div');
  botResponseElement.className = 'chat-message bot-message';
  botResponseElement.innerHTML = `<img src="avatar.png" alt="Support Avatar" class="avatar"><span class="message-text">${botResponse}</span>`;
  chatBody.appendChild(botResponseElement);

  // Scroll to the bottom of the chatbox
  chatBody.scrollTop = chatBody.scrollHeight;
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('chatToggle').addEventListener('click', function() {
      const chatWidget = document.getElementById('chatWidget');
      if (chatWidget.style.display === 'none' || chatWidget.style.display === '') {
          chatWidget.style.display = 'block';
      } else {
          chatWidget.style.display = 'none';
      }
  });
  document.getElementById('closeChatWidget').addEventListener('click', function() {
      document.getElementById('chatWidget').style.display = 'none';
  });
});
