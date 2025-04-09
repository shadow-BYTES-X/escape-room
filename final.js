// -- present a pop up form to get user interaction to play audio 
function getAudioPermission(message, buttonMessage) { 
    let popUpContainer = document.createElement('div'); 
    popUpContainer.id = 'popup-container'; 
    let popUp = document.createElement('div'); 
    popUp.id = 'audio-permission'; 
    let askMessage = document.createElement('p'); 
    askMessage.textContent = message; 
    let confirmButton = document.createElement('div'); 
    confirmButton.classList.add('button'); 
    confirmButton.id = 'confirm-button'; 
    confirmButton.textContent = buttonMessage;
    confirmButton.addEventListener('click', () => {
      document.body.removeChild(popUpContainer); 
      
      let audio = new Audio('./audio/the-pacific-heist.mp3'); 
      audio.play(); 

    }); 
    popUp.appendChild(askMessage); 
    popUp.appendChild(confirmButton); 
    popUpContainer.append(popUp); 
    document.body.append(popUpContainer); 
} 

getAudioPermission('Du hast es geschafft', 'ok'); 

function clearList(list) {
    while(list.firstChild) {
      list.removeChild(list.lastChild);
    } 
}

setTimeout(() => {
    clearList(document.body); 
    let creditsContainer = document.createElement('div'); 
      creditsContainer.id = 'credits-container'; 
      let title = document.createElement('h1'); 
      title.textContent = 'Du bist Entkommen'; 
      title.id = 'title'; 
      let devs = ['Rätsel 1, Storytelling, Idee, Design -- Yasmin', 'Rätsel 2, Storytelling, Idee, Design -- Raphael', 'Rätsel 4, Storytelling, Idee, Design -- Rosalie', 'Rätsel 3, Storytelling, Idee, Design, -- Steffen', 'Musik -- Steffen, Tangerine Dream', 'Software Development -- Steffen']; 
      let credits = document.createElement('ul'); 
      for(const dev of devs) {
        let devItem = document.createElement('li'); 
        devItem.textContent = dev; 
        credits.appendChild(devItem); 
      } 
      creditsContainer.append(title); 
      creditsContainer.append(credits); 
      document.body.append(creditsContainer); 
      setTimeout(() => {
        let text = document.createElement('p'); 
        text.id = 'last'; 
        text.textContent = 'Wir hoffen, ihr hattet Spaß beim Spielen'; 
        document.body.append(text); 
        setTimeout(() => {
          let solutions = document.createElement('a'); 
          solutions.textContent = 'Lösungen'; 
          solutions.href = './solution.pdf'; 
          document.body.append(solutions); 
        }, 2000);
    }, 2000); 

    

}, 10000);

