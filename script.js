$(document).ready(function () {


//capture time from momentjs
const time = moment().format('MMMM do YYYY');

//display time in current day HTML section
let currentD = $("#currentDay");
currentD.text(time);














});