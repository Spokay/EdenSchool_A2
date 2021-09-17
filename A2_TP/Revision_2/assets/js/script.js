let week = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
let months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septiembre', 'Octobre', 'Novembre', 'Décembre'];
let container = document.querySelector('.container');

//  function to get the date
function getTodayDate(){
    let date = new Date();
    let dateYear = date.getFullYear();
    let dateMonth = date.getMonth() + 1;
    let dateDayOfMonth = date.getDate();
    let dateDayOfWeek = date.getDay();
    let hoursOfDay = date.getHours();
    let minutesOfHours = date.getMinutes();
    let secondsOfMinutes = date.getSeconds();
    return [dateDayOfMonth, dateDayOfWeek, dateMonth, dateYear, hoursOfDay, minutesOfHours, secondsOfMinutes];
}



//intervals to update and display the date
setInterval(function(){
    let actualDate = getTodayDate();
    container.innerText = week[actualDate[1]] + ' ' + actualDate[0] + ' ' + months[actualDate[2]] + ' ' + actualDate[3] + ' ' + actualDate[4] + ' heures ' + actualDate[5] + ' minutes ' + actualDate[6] + ' seconds';
}, 100);