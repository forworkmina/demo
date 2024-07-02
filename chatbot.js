function getResponse(option) {
    const chatBody = document.getElementById('chatBody');
    let userMessage = '';
    let botResponse = '';

    switch (option) {
        case 'option1':
            userMessage = 'User selected Option 1';
            botResponse = 'This is the response for Option 1.';
            break;
        case 'option2':
            userMessage = 'User selected Option 2';
            botResponse = 'This is the response for Option 2.';
            break;
        case 'option3':
            userMessage = 'User selected Option 3';
            botResponse = 'This is the response for Option 3.';
            break;
        default:
            userMessage = 'Unknown option';
            botResponse = 'Sorry, I do not understand.';
    }

    // Append user message
    const userMessageElement = document.createElement('div');
    userMessageElement.className = 'chat-message';
    userMessageElement.textContent = userMessage;
    chatBody.appendChild(userMessageElement);

    // Append bot response
    const botResponseElement = document.createElement('div');
    botResponseElement.className = 'chat-message';
    botResponseElement.textContent = botResponse;
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
});