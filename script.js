$(document).ready(function () {


//capture time from momentjs
const time = moment().format('MMMM do YYYY');

//display time in current day HTML section
let currentD = $("#currentDay");
currentD.text(time);

//build daily calendar rows beginning at 9AM to 5PM, 12 + 5 = 17
for (let hour = 9; hour <=17; hour++) {

    //build rows
    let rowDiv = $("<div>");
    rowD.addClass("row calendar-row");
    rowD.attr("hour-index", hour);
    // rowD.text("test");

    //build hour/time column
    let timeOfDayDiv = $("<div>")
    textC.addClass("col-md-2")

    // $("#planner").append(rowD);
    //hour span
    const hourDaySpan = $("<span>");
    hourDaySpan.addClass("hourDay");

    //hour-index/hour display conversion takes the hour-index attr from rowDiv, converts to actual hour and dipslays PM for anything after 12, sets equal to index for AM as the hours match
    let plannerHour = 0;
    let mornAft = "";
    if (hour>12) {
        plannerHour = hour -12;
        mornAft = "pm";
    } else {
        plannerHour = hour;
        mornAft = "am";
    }
   

}












});