// ---------------------------------------- (c) Steffen Stieler 2025 ----------------------------------
let image = document.querySelector('img'); 
let text = document.querySelector('#text'); 
let choices = document.querySelector('ul'); 
let inputField = document.querySelector('input'); 
let button = document.querySelector('#next'); 


let pageIndex = 0; 

let code = ''; 
let testCode = [];

// -- dynamic content 

let answers = [
  {
    text: `Du schaust dich im Raum um und findest einen aufgeschlagenen Ordner, der die Beschreibungen für die Flucht aus dem Bunker enthält. 
Bei genaueren Hinsehen entdeckst du mit Schrecken, dass die Aufzeichnungen die sich hier befunden haben, 
alle vernichtet wurden. Übrig geblieben ist nur eine handschriftliche Notitz: "Um zu entkommen, 
musst du das Licht verstehen. Berechne die Farbmischungen und erkenne, welche Farbe verschwindet!" -- 
Du siehst drei Lichtquellen mit den Grundfarben des additiven Farbmodells: \r\n
Rot (R) = 1 \r\n
Grün (G) = 2 \r\n
Blau (B) = 3 \r\n 
Drei Farbmischungen erscheinen: \r\n
Rot + Grün \r\n
Grün + Blau \r\n
Rot + Blau \r\n
Berechne zunächst die Mischfarben, welche sich durch die Farbaddition ergeben und notiere dir deren Werte. -- \r\n 
Zusätzlich gibt es einen Farbfilter, der eine bestimmte Farbe absorbiert. Der Filter ist cyanfarben. -- \r\n 
Bestimme, die Farbe deren Anteile durch den Filter verschwinden. Finde diese Farbe in der Liste mit den Grundfarben des additiven Farbmodells. 
Ziehe diesen Wert von den Werten der Mischfarben ab, welche du dir zuvor notiert hast. \r\n
Addiere nun die drei Werte die du errechnet hast und trage deren Quersumme in das Eingabefeld ein. 
`,  
    imgPath: './img/mystery/workers_mystery.jpg', 
    background: 'workers', 
    answers: {
      1: 'Quersumme 1 ergibt sich aus den Farben', 
      2: 'Quersumme 2 ergibt sich aus den Farben', 
      3: 'Quersumme 6 ergibt sich aus den Farben', 
      4: 'Quersumme 8 ergibt sich aus den Farben'
    }, 
    correct: 1, 
    audioPath: 'wastelands(darkC64)'
  }, 
  {
    text: `Nachdem du die Gänge entlanggeeilt bist, gelangst du in einen verlassenen Besprechungsraum.
    Du suchst nach Hinweisen und nach einiger Zeit erblickst du eine Konstruktion mit einem Zettel. 
    Du betätigst den Schalter und ein Licht fängt an zu leuchten. 
    Doch was hat es mit dem Zettel auf sich? \r\n 
    Die Konstruktion, die du gesehen hast, kommt dir bekannt vor. 
Als wäre es ein Gegenstand aus deinem früheren Schulalltag. 
Die Konstruktion besteht aus einem Licht, zwei Karten, 
einer Linse mit einer Brennweite von 10 cm und einer Leinwand. 
Was passiert wohl, wenn man das Licht einschaltet? `, 
    imgPath: './img/mystery/meeting_mystery.jpg', 
    background: 'meeting-room', 
    answers: {
      1: 'Die Zahl die erscheint ist 6 -> Antwortmöglichkeit 1', 
      2: 'Die Zahl die erscheint ist 5 -> Antwortmöglichkeit 2', 
      3: 'Die Zahl die erscheint ist 8 -> Antwortmöglichkeit 3', 
      4: 'Die Zahl die erscheint ist 9 -> Antwortmöglichkeit 4'
    }, 
    correct: 1, 
    audioPath: 'toxic-rain'
  }, 
  {
    text: `Du gelangst in einen steinernen Gang und siehst Waffenschränke an der Seite. 
Das sind wohl die Waffen, die das CIA zurückgelassen hat. Als du genauer hinguckst, siehst du, 
dass sie aber alles andere als normal aussehen, sondern irgendeinen Glasaufsatz haben, 
der dich an eine Linse erinnert. Unten an einer von den Waffen steht "high voltage, heavy light, do not touch!". 
Anscheinend bündeln diese Waffen also sehr starkes Licht. Du überlegst, wie die Waffen gelabelt sind. 
Vielleicht könnten sie ja noch nützlich werden. Auf einem Waffenschrank steht #11a7af. \r\n
Da fällt es dir ein: Das sind Hexadezimalzahlen. \r\n
Jede von den Stellen geht von 0 bis f und jedes Zahlenpaar(z. B. 11) repräsentiert die Helligkeit von rot, grün oder blau, also #rrggbb. 
#ffffff entspricht also z. B. weiß. Das additive Farbmodell hast du ja schon gelöst. -- \r\n
Auf einem kleinen Zettel, den jemand in Hektik auf den Schrank geklebt haben muss, steht, "In Cyan ist die Keycard, 
um die Tür zu öffnen, wenn alles schief läuft". \r\n
Mit "Wenn alles schief läuft" bist wohl du gemeint ... -- \r\n
Welches Fach ist Cyan? `, 
    imgPath: './img/mystery/following_waepon_cabinet.png', 
    background: 'following', 
    answers: {
      1: 'Cyan ist #000000 ', 
      2: 'Cyan ist #ffaabb', 
      3: 'Cyan ist #00ffff', 
      4: 'Cyan ist #01f256' 
    }, 
    correct: 3, 
    audioPath: 'broken-news(factory-pulse)'
  }, 
  {
    text: `Du zwängst dich durch den leichten Spalt in der Tür und gelangst in einen Tunnel. 
    Grelles Licht scheint dir entgegen und du musst deine Augen leicht schließen, 
    um dich an die ungewohnte Helligkeit zu gewöhnen. 
    Irgendwo hörst du etwas von der Decke tropfen. 
    Doch als du deine Augen langsam wieder öffnest, 
    bemerkst du die bunten Farben an der Wand. 
    Daneben kannst du chemenhaft ein Bild erkennen, 
    dass dich stocken lässt. Als du näher trittst wird dir klar, 
    dass du noch nicht das Ende deines Ausbruchs erreicht hast, 
    denn es zeigt ein weiteres Rätsel und das, obwohl dir langsam die Zeit ausgeht. -- 
    Finde heraus, wie oft das Licht in dem Regentropfen gebrochen wird, 
    bis es aus dem Regentropfen austritt und als Regenbogen erscheint.`, 
    imgPath: './img/mystery/tunnel_mystery.jpg', 
    background: 'tunnel', 
    answers: {
      1: 'Das Licht wird 1 mal in dem Regentropfen gebrochen ', 
      2: 'Das Licht wird 2 mal in dem Regentropfen gebrochen ', 
      3: 'Das Licht wird 3 mal in dem Regentropfen gebrochen ', 
      4: 'Das Licht wird 4 mal in dem Regentropfen gebrochen '
    }, 
    correct: 2, 
    audioPath: 'water-in-the-vault'
  }, 
];

let currentTrack = new Audio(); 
currentTrack.src = './audio/' + answers[0].audioPath + '.mp3'; 

getAudioPermission('Entkomme, bevor hier alles in die Luft fliegt', 'GO'); 

// -- load current content 
loadContent(pageIndex, image, text, answers, choices); 

// -- load first audio 



// -- continue to next page 
button.addEventListener('click', () => {
  pageCompletion(); 
}); 

window.addEventListener('keydown', (key) => {
  if(key.key === 'Enter') {
    pageCompletion(); 
  } 
}); 

function pageCompletion() {
  if(pageIndex < (answers.length - 1)){ 
    // -- check if input is in the correct format 
  next(); 
  } 

  // -- add last character 
  else { 
    // -- make sure it is only inserted at the last index 
    testCode[answers.length - 1] = inputField.value.toString(); 
    // -- do not increase the page index beyond the highest possible value 
    pageIndex = answers.length; 
    // -- stop current track 
    currentTrack.pause(); 
    // -- generate the end screen for code checking 
    constructEnd(testCode, 'door_2', answers); 
    
  }
}

function loadContent(pageIndex, image, text, answers, choicesList) {
  image.src = '#'; 
  
  
  // -- current mystery 
  let currentObject = answers[pageIndex]; 

  image.src = currentObject.imgPath; 
  text.textContent = currentObject.text; 
  document.body.style.backgroundImage = 'url(' + './img/' + currentObject.background + '.png' + ')'; 

  // -- present answer possibilities 
  for (const currentAnswer in currentObject.answers) {
    let listItem = document.createElement('li'); 
    listItem.textContent = currentObject.answers[currentAnswer]; 
    choicesList.appendChild(listItem); 
  } 

  // -- audio 
  if(currentTrack){ 
    
    currentTrack.pause(); 
  } 
  let currentAudioSource = './audio/' + currentObject.audioPath + '.mp3';
  currentTrack = new Audio(currentAudioSource); 
  currentTrack.play(); 

  //        -- fade current audio out 
  //        -- set audio path as new source 
  //        -- fade new audio in 
  

} 

function next() { 
  // -- input sanitization 
    if(inputField.value < 10 && !isNaN(inputField.value) && inputField.value != '') { 
      // -- add input field value to the code 
    testCode.push(inputField.value.toString()); 
    // -- increase index 
      pageIndex++; 
    // -- clear previous list entries and clear the input field 
    clearList(choices); 
    inputField.value = ''; 
    // -- load new content 
    loadContent(pageIndex, image , text, answers, choices); 
    
    } 

    else {
      alert('gib nur einstellige Zahlen ein'); 
    }
}

function clearList(list) {
  while(list.firstChild) {
    list.removeChild(list.lastChild);
  } 
}

// -- code checking 

function constructEnd(code, background, answers) { 

  // -- clear page 
  clearList(document.querySelector('#controls')); 
  document.body.style.background = 'black'; 


  // -- construct page elements 
  let endContainer = document.createElement('div'); 
  endContainer.style.backgroundImage = 'url(' + './img/' + background + '.png' + ')'; 
  endContainer.id = 'code-check'; 
  
  // -- text content 
  endText(endContainer, code); 
  
  // -- inputs 
  endInput(endContainer, code); 

  document.body.append(endContainer); 

  // -- submit button -- after page load for querying elements 
  endButton(endContainer, answers); 

  currentTrack = new Audio('./audio/wanted-music.mp3'); 
  currentTrack.play();
}

function endText(endContainer, code) {
  let textContainer = document.createElement('div'); 
  textContainer.id = 'text-container'; 
  let textElement = document.createElement('p'); 
  textElement.id = 'text-element'; 
  textElement.textContent = `Aha, du bist also bis hier gekommen. 
  Ich hatte dich schon von Anfang an im Blick und habe alles, was du gemacht hast, gesehen. 
  Du willst also wirklich raus?
   Gucken wir uns doch mal deine Antworten an, du denkst also wirklich: `; 
  textContainer.appendChild(textElement); 
  let answersList = document.createElement('ul'); 
  answersList.id = 'answers-list'; 
  
  // -- answers for list  
  let codeIndex = 0; 
  for(const answer of code) {
    let listElement = document.createElement('li'); 
    listElement.textContent = answers[codeIndex].answers[answer]; 
    answersList.appendChild(listElement); 
    codeIndex++; 
  } 
  
  textContainer.appendChild(answersList); 
  endContainer.appendChild(textContainer); 
} 

function endInput(endContainer, code) {
  let inputContainer = document.createElement('div'); 
  inputContainer.id = 'inputContainer'; 
  
  for(const character of code) {
    let characterInputField = document.createElement('input'); 
    characterInputField.placeholder = character + ' -'; 
    characterInputField.value = character; 
    inputContainer.appendChild(characterInputField); 
  } 

  endContainer.appendChild(inputContainer); 
}

function endButton(endContainer, answers) {
  let finalButton = document.createElement('div'); 
  finalButton.id = 'final-button'; 
  finalButton.classList.add('button'); 
  let inputContainer = document.querySelector('#inputContainer'); 
  let inputs = inputContainer.querySelectorAll('input'); 
  console.log(inputs);
  finalButton.addEventListener('click', checkCode.bind(null, answers, inputs, endContainer)); 
  finalButton.textContent = 'finish'; 
  endContainer.appendChild(finalButton); 
} 


function checkCode(answers, inputs, endContainer) { 
  
  // -- create array of current inputs 
  let comparingCode = '';
  for(const input of inputs) {
    comparingCode += input.value; 
    console.log(comparingCode); 
  } 
  
  // -- construct real code from answers.correct fields 
  let realCode = '';
  for(const answer of answers) {
    realCode += answer.correct; 
  } 

  // -- check if the digits match the correct digits 

  if(comparingCode == realCode) { 
    // -- code correct -- go to the final page 
    window.location.href = './final.html'; 
  } 

  else { 

    // -- code not correct -- show explosion and play sound 
    document.body.style.background = 'red'; 
    console.log('red'); 
    showWarningWindow(endContainer); 
  }
  
  
} 

function showWarningWindow(endContainer) {
  let windowElement = document.createElement('div'); 
  windowElement.id = 'warning'; 
  let warningImage = document.createElement('img'); 
  warningImage.src = './img/nuclear-sign.png';
  let text = document.createElement('p'); 
  text.id = 'warning-text'; 
  text.textContent = 'Du hast falsch geantwortet -- Detonation wird ausgeführt'; 
  windowElement.appendChild(warningImage); 
  windowElement.appendChild(text); 
  endContainer.append(windowElement); 

  // -- show credits after some time 
  setTimeout(() => { 
    
    clearList(document.body); 
    document.body.style.background = 'white'; 
    // -- explosion audio 
    currentTrack.pause(); 
    currentTrack = new Audio('./audio/tinnitus.mp3');
    currentTrack.play(); 
    setTimeout(() => { 
      let creditsContainer = document.createElement('div'); 
      creditsContainer.id = 'credits-container'; 
      let title = document.createElement('h1'); 
      title.textContent = 'Du bist gestorben'; 
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
    }, 2000);
  }, 10000); 

  

}

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
    
    currentTrack.play(); 
    // -- audio endless loop 
    currentTrack.addEventListener('ended', () => {
      currentTrack.play()
    }); 
  }); 
  popUp.appendChild(askMessage); 
  popUp.appendChild(confirmButton); 
  popUpContainer.append(popUp); 
  document.body.append(popUpContainer); 
} 

/*
Die Konstruktion, die du gesehen hast, kommt dir bekannt vor. 
Als wäre es ein Gegenstand aus deinem früheren Schulalltag. 
Die Konstruktion besteht aus einem Licht, zwei Karten, 
einer Linse mit einer Brennweite von 10 cm und einer Leinwand. 
Was passiert wohl, wenn man das Licht einschaltet? 
Du siehst den Zettel den du verwenden willst neben dir. 
*/ 