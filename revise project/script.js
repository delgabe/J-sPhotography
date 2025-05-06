let num = 1;
let pack_num;
let pack_num_close;
let item = [
  document.getElementsByClassName("item1")[0],
  document.getElementsByClassName("item2")[0],
  document.getElementsByClassName("item3")[0],
  document.getElementsByClassName("item4")[0],
  document.getElementsByClassName("item5")[0],
  document.getElementsByClassName("item6")[0]
];

let chat_display = [
  document.getElementsByClassName("bot-alert1")[0],
  document.getElementsByClassName("bot-alert2")[0],
];

let package_display = [
  document.getElementsByClassName("bronze-pop")[0],
  document.getElementsByClassName("silver-pop")[0],
  document.getElementsByClassName("gold-pop")[0],
  document.getElementsByClassName("diamond-pop")[0]
]

let transform = [];
let opacity = [];
let index = [];
let display = [];



for (let i = 0; i<chat_display.length; i++){
  let computedStyle = window.getComputedStyle(chat_display[i]);
  display[i] = computedStyle.getPropertyValue("opacity");
}


for (let i = 0; i<item.length; i++){
  let computedStyle = window.getComputedStyle(item[i]);
  transform[i] = computedStyle.getPropertyValue("transform");
  opacity[i] = computedStyle.getPropertyValue("opacity");
  index[i] = computedStyle.getPropertyValue("z-index");
}

function toggleDim() {
  let overlay = document.getElementsByClassName("overlay2")[0]
  let computedStyle = window.getComputedStyle(overlay);
  overlay.style.display = "inherit"
}

function toggleLit() {
  let overlay = document.getElementsByClassName("overlay2")[0]
  let computedStyle = window.getComputedStyle(overlay);
  overlay.style.display = "none"
}

    function showmore(pack_num){
      if (pack_num === 1) {
        package_display[0].style.display = "inherit"
        toggleDim();
      }
      if (pack_num === 2) {
        package_display[1].style.display = "inherit"
        toggleDim();
      }
      if (pack_num === 3) {
        package_display[2].style.display = "inherit"
        toggleDim();
      }
      if (pack_num === 4) {
        package_display[3].style.display = "inherit"
        toggleDim();
      }
    }

    function showless(pack_num){
      if (pack_num === 1) {
        package_display[0].style.display = "none"
        toggleLit();
      }
      if (pack_num === 2) {
        package_display[1].style.display = "none"
        toggleLit();
      }
      if (pack_num === 3) {
        package_display[2].style.display = "none"
        toggleLit();
      }
      if (pack_num === 4) {
        package_display[3].style.display = "none"
        toggleLit();
      }
    }

    function change(num){
      
      if(num===1){
        for (let i = 0; i<item.length; i++){
          item[i].style.transform = transform[i];
          item[i].style.opacity = opacity[i];
          item[i].style.zIndex = index[i];
        }
      }
      if(num===2){
        item[0].style.transform = transform[5];
        item[0].style.opacity = opacity[5];
        item[0].style.zIndex = index[5];
    
        for(let i = 0 ; i<item.length-1; i++){
          item[i+1].style.transform = transform[i];
          item[i+1].style.opacity = opacity[i];
          item[i+1].style.zIndex = index[i];
          
        }
    
      }
    
      if(num===3){
        for(let i = 0, x = item.length-2; i<item.length-4; i++, x++){  
          item[i].style.transform = transform[x];
          item[i].style.opacity = opacity[x];
          item[i].style.zIndex = index[x];
          }
      
        for(let i = 0 ; i<item.length-2; i++){
          item[i+2].style.transform = transform[i];
          item[i+2].style.opacity = opacity[i];
          item[i+2].style.zIndex = index[i];
          
        }
      }
      if(num===4){
        for(let i = 0, x = item.length-3; i<item.length-3; i++, x++){  
          item[i].style.transform = transform[x];
          item[i].style.opacity = opacity[x];
          item[i].style.zIndex = index[x];
          }
      
        for(let i = 0 ; i<item.length-3; i++){
          item[i+3].style.transform = transform[i];
          item[i+3].style.opacity = opacity[i];
          item[i+3].style.zIndex = index[i];
          
        }
      }
      if(num===5){
        for(let i = 0, x = item.length-4; i<item.length-2; i++, x++){  
          item[i].style.transform = transform[x];
          item[i].style.opacity = opacity[x];
          item[i].style.zIndex = index[x];
          }
      
        for(let i = 0 ; i<item.length-4; i++){
          item[i+4].style.transform = transform[i];
          item[i+4].style.opacity = opacity[i];
          item[i+4].style.zIndex = index[i];
          
        }
      }
      if(num===6){
        for(let i = 0, x = item.length-5; i<item.length-1; i++, x++){  
          item[i].style.transform = transform[x];
          item[i].style.opacity = opacity[x];
          item[i].style.zIndex = index[x];
          }
      
        for(let i = 0 ; i<item.length-5; i++){
          item[i+5].style.transform = transform[i];
          item[i+5].style.opacity = opacity[i];
          item[i+5].style.zIndex = index[i];
          
        }
      }
    }

 


  let i = num;

  function loop() {
    setTimeout(() => {
      change(i);
        
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
    