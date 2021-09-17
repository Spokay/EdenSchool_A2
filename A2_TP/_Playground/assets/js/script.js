let heures = parseInt(prompt('heures'));
let minutes = parseInt(prompt('minutes'));
let secondes = parseInt(prompt('secondes'));

function uneSecPlusTard(heures, minutes, secondes){
    if(heures > 23){
        console.log('cette heure n\'est pas valide');
        return false;
    }
    secondes++;
    if(secondes === 60){
        minutes++;
        secondes = 0;
        if(minutes === 60){
            heures++;
            minutes = 0;
            secondes = 0;
            if(heures === 24){
                heures = 0;
                minutes = 0;
                secondes = 0;
            }
        }
    }
    console.log(heures + 'h ' + minutes + 'm ' + secondes + 's');
}
uneSecPlusTard(heures, minutes, secondes);