/*let num;
let item = [];
let origin = [
  document.getElementsByClassName("item1")[0],
  document.getElementsByClassName("item2")[0],
  document.getElementsByClassName("item3")[0],
  document.getElementsByClassName("item4")[0],
  document.getElementsByClassName("item5")[0],
  document.getElementsByClassName("item6")[0]
  ]

  for (let i = 0; i<origin.length; i++){
     item[i] = origin[i].className;
    }


function change(num){
  if(num === 1){
    let elements = [
      document.getElementsByClassName("item1")[0],
      document.getElementsByClassName("item2")[0],
      document.getElementsByClassName("item3")[0],
      document.getElementsByClassName("item4")[0],
      document.getElementsByClassName("item5")[0],
      document.getElementsByClassName("item6")[0]
      ]
      elements[0].className = item[0];
      elements[1].className = item[1];
      elements[2].className = item[2]; 
      elements[3].className = item[3]; 
      elements[4].className = item[4]; 
      elements[5].className = item[5]; 
    
  }
  if(num === 2){
    
    let elements = [
      document.getElementsByClassName("item1")[0],
      document.getElementsByClassName("item2")[0],
      document.getElementsByClassName("item3")[0],
      document.getElementsByClassName("item4")[0],
      document.getElementsByClassName("item5")[0],
      document.getElementsByClassName("item6")[0]
      ]
         
        elements[0].className = item[5];
        elements[1].className = item[0];
        elements[2].className = item[1]; 
        elements[3].className = item[2]; 
        elements[4].className = item[3]; 
        elements[5].className = item[4]; 

      
    
  }
}*/

let item = [
  document.getElementsByClassName("item1")[0],
  document.getElementsByClassName("item2")[0],
  document.getElementsByClassName("item3")[0],
  document.getElementsByClassName("item4")[0],
  document.getElementsByClassName("item5")[0],
  document.getElementsByClassName("item6")[0]
]
let transform = [];
let opacity = [];
let index = [];
for (let i = 0; i<item.length; i++){
  let computedStyle = window.getComputedStyle(item[i]);
  transform[i] = computedStyle.getPropertyValue("transform");
  opacity[i] = computedStyle.getPropertyValue("opacity");
  index[i] = computedStyle.getPropertyValue("z-index");
}

 

    function change(num){
      window.addEventListener("resize", () => {
        if (window.innerWidth < 600) {
          for (let i = 0; i < item.length; i++) {
            item[i].style.transform = "";
            item[i].style.opacity = "";
            item[i].style.zIndex = "";
          }
        }
      });
      if (window.innerWidth >= 600) {
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

  } 
