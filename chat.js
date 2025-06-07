function toggleChat() {
  const chatBox = document.getElementById('chat-box');
  chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
}

function sendChat() {
  const input = document.getElementById('chat-input-box');
  const content = document.getElementById('chat-content');
  const question = input.value.trim();
  if (!question) return;

  const userMsg = `<p><strong>You:</strong> ${question}</p>`;
  content.innerHTML += userMsg;

  let response = "🤖 I'm still learning. Try: 'What is SEO?' or 'Tip for quiz'.";
  if (question.toLowerCase().includes("seo")) {
    response = "SEO means Search Engine Optimization. It helps websites rank higher.";
  } else if (question.toLowerCase().includes("content")) {
    response = "Content marketing focuses on creating helpful content to attract visitors.";
  } else if (question.toLowerCase().includes("quiz")) {
    response = "Read the topic fully before attempting the quiz. Take notes!";
  }

  content.innerHTML += `<p><strong>AI:</strong> ${response}</p>`;
  content.scrollTop = content.scrollHeight;
  input.value = "";
}