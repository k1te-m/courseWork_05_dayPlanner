$(document).ready(function () {

  //capture time from momentjs
  const time = moment().format("MMMM do YYYY");

  //display time in current day HTML section
  let currentD = $("#currentDay");
  currentD.text(time);
  
  let currentH24 = parseInt(moment().format("kk")); // gives hour in 24 hour format
  let currentH12 = parseInt(moment().format("H")); // gives hour in 12 hour format


  

  //for loop to build daily calendar rows beginning at 9AM to 5PM, 12 + 5 = 17
  for (let hour = 9; hour <= 17; hour++) {
    //build rows
    let rowD = $("<div>");
    rowD.addClass("row calendar-row time-block");
    rowD.attr("hour-index", hour);

    //build hour/time column
    let timeOfDayDiv = $("<div>");
    timeOfDayDiv.addClass("col-md-2 toD");

    //hour span
    const hourDaySpan = $("<span>");
    hourDaySpan.addClass("hour");
    

    //hour-index/hour display conversion takes the hour-index attr from rowDiv, converts to actual hour and dipslays PM for anything after 12, sets equal to index for AM as the hours match
    let plannerHour = 0;
    let mornAft = "";
    // if (hour > 12) {
    //   plannerHour = hour - 12;
    //   mornAft = "pm";
    // } else {
    //   plannerHour = hour;
    //   mornAft = "am";
    // }
    if (hour > 12) {
        plannerHour = hour -12;
        mornAft = "pm";
    } else if (hour === 12) {
        plannerHour = hour;
        mornAft = "pm";
    } else if (hour < 12) {
        plannerHour = hour;
        mornAft = "am";
    }
    

    //add hour display to hourDaySpan
    hourDaySpan.text(plannerHour + mornAft);
    $("#planner").append(rowD);
    rowD.append(timeOfDayDiv);
    timeOfDayDiv.append(hourDaySpan);

    //add input section for user todos
    userInput = $("<textarea>");
    userInput.attr("type", "text");
    if (hour < currentH24) {
        userInput.addClass("past");
    } else if (hour === currentH24) {
        userInput.addClass("present");
    } else {
        userInput.addClass("future");
    }
    userInput.addClass("description");
    userInput.attr("ppf-index", hour);
    userInputDiv = $("<div>");
    userInputDiv.addClass("col-md-9 pr-0 mr-0 pl-0 ml-0");
    
    rowD.append(userInputDiv);
    userInputDiv.append(userInput);

    //set-up save button column
    saveBtnDiv = $("<div>");
    saveBtnDiv.addClass("col-md-1 saveSec pl-0 ml-0");

    //add save button
    let saveBtn = $("<i>");
    saveBtn.attr("class", "fas fa-save saveBtn");

    //add save button to row
    rowD.append(saveBtnDiv);
    saveBtnDiv.append(saveBtn);

    // updatePPF(currentH24, plannerHour);
    // console.log(plannerHour);
    // console.log(hour);
    // console.log(currentH24);

  }
// update past present or future based on time of day - need to utilize H24 and H12 based on plannerHour
//   function updatePPF (currentH24, plannerHour) {
//       if (plannerHour == currentH24) {
//           userInput.addClass("present");
//       } else if (plannerHour < currentH24) {
//           userInput.addClass("past");
//       } else if (plannerHour > currentH24) {
//           userInput.addClass("future");
//       }
//   }





});
