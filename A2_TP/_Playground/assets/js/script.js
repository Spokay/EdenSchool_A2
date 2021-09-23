/*
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
uneSecPlusTard(heures, minutes, secondes);*/


/*let currentPrice = 0;
let question = parseInt(prompt('combien de photocopies à effectuer'));
let i = 0;
while (i < question){
    if (i < 10){
        currentPrice += 0.10;
        console.log('+0.10');
    }else if (i < 30 && i >= 10){
        currentPrice += 0.09;
        console.log('+0.09');
    }else{
        currentPrice += 0.08;
        console.log('+0.08');
    }
    i++;
}
console.log(currentPrice);*/

/*
let c1 = parseInt(prompt('résultat candidat 1'));
let c2 = parseInt(prompt('résultat candidat 2'));
let c3 = parseInt(prompt('résultat candidat 3'));
let c4 = parseInt(prompt('résultat candidat 4'));

if (c1 > 50){
    console.log('élu');
}else if (c1 > 12.5 && c2 < 50 && c3 < 50 && c4 < 50){
    if (c1 > c2 && c1 > c3 && c1 > c4){
        console.log('ballotage favorable');
    }
    else{
        console.log('ballotage défavorable');
    }
}
else{
    console.log('battu');
}*/

let jour = parseInt(prompt('jour'));
let mois = parseInt(prompt('mois'));
let annee = parseInt(prompt('année'));

if (mois === 2 && annee % 4 === 0 && annee % 100 !== 0 || annee % 400 === 0){
    if (jour <= 29){
        console.log('la date est valide');
    }
    else{
        console.log('la date n\'est pas valide');
    }
}
else{
    if (mois === 2 && jour <= 28){
        console.log('la date est valide');
    }
    else if (mois !== 2 && jour <= 31 && mois === 1 || mois === 3 || mois === 5 || mois === 7 || mois === 8 || mois === 10 || mois === 12 ){
        console.log('la date est valide');
    }
    else{
        if (mois !== 2 && jour <= 30){
            console.log('la date est valide');
        }
        else{
            console.log('la date n\'est pas valide');
        }
    }
}
