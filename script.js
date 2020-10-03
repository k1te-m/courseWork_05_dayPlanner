$(document).ready(function () {


//capture time from momentjs
const time = moment().format('MMMM do YYYY');

//display time in current day HTML section
let currentD = $("#currentDay");
currentD.text(time);

//build daily calendar rows
for (let hour = 9; hour <=17; hour++) {

    //build rows
    let rowD = $("<div>");
    rowD.addClass("row calendar-row");
    rowD.attr("hour-index", hour);
    rowD.text("test");

    $("#planner").append(rowD);

}












});