let num = 1;

let chat_display = [
  document.getElementsByClassName("bot-alert1")[0],
  document.getElementsByClassName("bot-alert2")[0],
];

let readstories= document.getElementsByClassName("stories-body")[0];

let display = [];



for (let i = 0; i<chat_display.length; i++){
  let computedStyle = window.getComputedStyle(chat_display[i]);
  display[i] = computedStyle.getPropertyValue("opacity");
}



  let i = num;

  function loop() {
    setTimeout(() => {
              
      i++;
      if (i === 7) {
        i = 1;
      }
   
      if(i === 1){
        chat_display[0].style.opacity = display[1];
        chat_display[1].style.opacity = display[0];
      }

      if(i === 4){
        chat_display[0].style.opacity = display[0];
        chat_display[1].style.opacity = display[1];
      }
  
      loop(); 
    }, 3000); 
  }
  
  loop();

  function toggleRead() {
    readstories.style.filter = "none";
  }

  function toggleChat() {
    const panel = document.getElementById('chatPanel');
    const overlay = document.getElementById('chatOverlay');
    
    panel.classList.toggle('open');
    overlay.classList.toggle('visible');
  }
  
  function addUserMessage(text) {
      const chatContent = document.querySelector('.chat-content');
    
      const userMessage = document.createElement('div');
      userMessage.classList.add('user-message');
      userMessage.innerHTML = `<div class="user-bubble">${text}</div>`;
    
      chatContent.appendChild(userMessage);
      chatContent.scrollTop = chatContent.scrollHeight;
    }
    
    function addBotReplyWithLink(text, linkText, linkHref) {
      const chatContent = document.querySelector('.chat-content');
    
      const botMessage = document.createElement('div');
      botMessage.classList.add('bot-message');
      botMessage.innerHTML = `
        <img src="image/botpic.png" alt="Bot" class="bot-icon" />
        <div class="message-bubble">
          ${text}<br/>
          <a href="${linkHref}" class="bot-link">${linkText}</a>
        </div>
      `;
    
      chatContent.appendChild(botMessage);
      chatContent.scrollTop = chatContent.scrollHeight;
    }
    