let num = 1;

let chat_display = [
  document.getElementsByClassName("bot-alert1")[0],
  document.getElementsByClassName("bot-alert2")[0],
];

let showstories = [
  document.getElementsByClassName("stories-3")[0],
  document.getElementsByClassName("stories-4")[0],
  document.getElementsByClassName("stories-5")[0]
]

let show_hide = [
  document.getElementsByClassName("journey-read")[0],
  document.getElementsByClassName("journey-hide")[0]
]

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
    showstories[0].style.display = "inherit";
    showstories[1].style.display = "inherit";
    showstories[2].style.display = "inherit";
    show_hide[0].style.visibility = "hidden";
    show_hide[1].style.visibility = "inherit";
  }

  function toggleHide() {
    showstories[0].style.display = "none";
    showstories[1].style.display = "none";
    showstories[2].style.display = "none";
    show_hide[0].style.visibility = "inherit";
    show_hide[1].style.visibility = "hidden";
  }

  function toggleChat() {
    const panel = document.getElementById('chatPanel');
    const overlay = document.getElementById('chatOverlay');
    
    panel.classList.toggle('open');
    overlay.classList.toggle('visible');
  }

function toggleNav(){
  let overlay1 = document.getElementsByClassName("nav-overlay")[0];
  let computedStyle = window.getComputedStyle(overlay1);
  overlay1.style.visibility = "inherit"
}

function toggleNavClose(){
  let overlay1 = document.getElementsByClassName("nav-overlay")[0];
  let computedStyle = window.getComputedStyle(overlay1);
  overlay1.style.visibility = "hidden"
}

  function toggleLit() {
  let overlay = document.getElementsByClassName("overlay2")[0];
  let computedStyle = window.getComputedStyle(overlay);
  overlay.style.display = "none"
}

function toggleDim() {
  let overlay = document.getElementsByClassName("overlay2")[0];
  let computedStyle = window.getComputedStyle(overlay);
  overlay.style.display = "inherit"
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
    