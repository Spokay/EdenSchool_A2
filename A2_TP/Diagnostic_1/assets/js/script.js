let everyWordArray = ["desir", "performance", "extrinseque", "reve", "capacite", "retroaction", "benefice", "moteur", "enthousiasme", "depassement", "ambition", "reussir", "recompense", "chemin", "intention", "reussite", "objectifs", "but", "effort", "benefice" ,"confiance", "defi", "plaisir", "possible", "soutien", "entrainement", "dynamisme", "progres", "courage", "investissement", "courage", "creativite", "challenge", "appui", "positive", "discipline", "avenir", "cerveau", "perseverance", "engagement", "agir", "efficacite", "pratique", "moteur", "cout", "benefice", "actions", "croire", "exigence", "dynamique", "talent", "strategie" ,"dopamine", "erreur", "satisfaction"
];
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let lettersFound = [];
let splittedWordChosen;
let currentWord;
let currentLetter;
let checkup = false;
let failCount = 0;
// html selectors
let keyboard = document.querySelector('.keyboard');
let newGameLink = document.querySelector('.new-game');
let results = document.querySelector('.results');
let penduContainer = document.querySelector('.pendu');
let alertLose = document.querySelector('.loser-alert');
let alertWin = document.querySelector('.winner-alert');
let pendu;
let keyElements;
let resCase;

//keyboard display
keyboardDisplay();


// functions
function keyboardDisplay(){
    keyboard.innerHTML = '';
    for(let keyIndex = 0; keyIndex < alphabet.length; keyIndex++) {
        let keyboardElement = document.createElement('button');
        keyboardElement.innerText = alphabet[keyIndex];
        keyboardElement.classList.add('keyboard-element');
        keyboardElement.addEventListener('click', function (e){
            e.preventDefault();
            checkLetter(this.innerText.toLowerCase());
            console.log(this);
            this.classList.add('disabled');
        });
        keyboard.appendChild(keyboardElement);
    }
}
function chooseRandomWord(){
    let number = Math.floor(Math.random() * everyWordArray.length);
    let wordChosen = everyWordArray[number];
    splittedWordChosen = wordChosen.split('');
    console.log(splittedWordChosen);
    return splittedWordChosen;
}
function fail(){
    switch (failCount){
        case 1:
            pendu.src = 'assets/img/pendu_1.jpg';
            break;
        case 2:
            pendu.src = 'assets/img/pendu_2.jpg';
            break;
        case 3:
            pendu.src = 'assets/img/pendu_3.jpg';
            break;
        case 4:
            pendu.src = 'assets/img/pendu_4.jpg';
            break;
        case 5:
            pendu.src = 'assets/img/pendu_5.jpg';
            break;
        case 6:
            pendu.src = 'assets/img/pendu_6.jpg';
            break;
        case 7:
            pendu.src = 'assets/img/pendu_7.jpg';
            break;
        case 8:
            pendu.src = 'assets/img/pendu_8.jpg';
            break;
        case 9:
            pendu.src = 'assets/img/pendu_9.jpg';
            break;
        default:
            failCount = 0;
            loser();
    }
}
function loser(){
    alertLose.classList.remove('d-none');
    let resBoxes = document.querySelectorAll('.res-element');
    for (let fillIndex = 0; fillIndex < resBoxes.length; fillIndex++) {
        resBoxes[fillIndex].innerText = currentWord[fillIndex];
        resBoxes[fillIndex].classList.add('fill');
    }
    blockTheButtons();
}
function success(letter, indexLetter){
    let resBoxes = document.querySelectorAll('.res-element');
    resBoxes[indexLetter].innerText = letter;
    resBoxes[indexLetter].classList.add('found');
    lettersFound.push(letter);
}
function blockTheButtons(){
    for(let buttonsI = 0; buttonsI < keyElements.length; buttonsI++){
        keyElements[buttonsI].setAttribute('disabled', true);
    }
}
//new game function
function newGame() {
    keyboardDisplay();
    lettersFound = [];
    penduContainer.innerHTML = '';
    results.innerHTML = '';
    alertWin.classList.add('d-none');
    alertLose.classList.add('d-none');
    currentWord = chooseRandomWord();
    let penduElement = document.createElement('img');
    penduElement.src = 'assets/img/pendu_0.jpg';
    penduContainer.appendChild(penduElement);
    pendu = document.querySelector('.pendu > img');
    for (let lettersI = 0; lettersI < currentWord.length; lettersI++){
        let resElement = document.createElement('div');
        resElement.classList.add('res-element');
        results.appendChild(resElement);
    }
    resCase = document.querySelectorAll('.res-elements');
}
//verif function
function checkLetter(selectedLetter){
    currentLetter = selectedLetter;
    for (let checkI = 0; checkI < alphabet.length; checkI++){
        if (selectedLetter === alphabet[checkI]){
            for (let secondCheckI = 0; secondCheckI < currentWord.length; secondCheckI++){
                if (selectedLetter === currentWord[secondCheckI]){
                    let successI = currentWord.indexOf(selectedLetter, secondCheckI);
                    success(selectedLetter, successI);

                    checkup = true;
                }
            }
        }
    }
    keyElements = document.querySelectorAll('.keyboard-element');
    keyElements[alphabet.indexOf(selectedLetter)].setAttribute('disabled', true);
    console.log(checkup);

    //final verif
    if (checkup === true){
        checkup = false;
        if (lettersFound.length === currentWord.length){
            alertWin.classList.remove('d-none');
            blockTheButtons();
        }
        return true;
    }
    else if (checkup === false){
        failCount++
        fail();
        return false;
    }

}

// event listeners

newGameLink.addEventListener('click', newGame);