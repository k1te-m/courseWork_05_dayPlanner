$(document).ready(function () {
  //capture time from momentjs
  const time = moment().format("MMMM Do YYYY");

  //display time in current day HTML section
  let currentD = $("#currentDay");
  currentD.text(time);

  let currentH24 = parseInt(moment().format("kk")); // gives hour in hour 1-24 format

  //Local Storage Array
  let todos = JSON.parse(localStorage.getItem("todos")); //creates a variable for stored items
  if (todos !== null) { // if the value of the array is not null, the array will be populated with the todos stored items
    plannerArr = todos;
  } else { // otherwise populate a blank array with a placeholder
    plannerArr = new Array(9);
    plannerArr[1] = "Class Begins";
  }

  //for loop to build daily calendar rows beginning at 9AM to 5PM, 12 + 5 = 17
  for (let hour = 9; hour <= 17; hour++) {
    //build rows
    let x = hour - 9; //establish index that will correspond to planner array and moment.js time
    let rowD = $("<div>"); //creates new div element
    rowD.addClass("row calendar-row time-block"); // adds class to that div element
    rowD.attr("hour-index", hour); //adds hour-index for 12/24HR conversions

    //build hour/time column
    let timeOfDayDiv = $("<div>");
    timeOfDayDiv.addClass("col-md-2 toD");

    //hour span
    const hourDaySpan = $("<span>");
    hourDaySpan.addClass("hour");

    //hour-index/hour display conversion takes the hour-index attr from rowDiv, converts to actual hour and dipslays PM for anything after 12, sets equal to index for AM as the hours match
    let plannerHour = 0;
    let mornAft = "";

    // Logic for 12/24HR clock conversion, ensures 9-11AM, 12-5PM. plannerHour to be displayed in span
    if (hour > 12) { // If hour(24 hour clock) > 12, plannerHour(to be displayed) is reduced by 12 to ensure 12 hour clock format and PM is added
      plannerHour = hour - 12; 
      mornAft = "pm";
    } else if (hour === 12) { //Needed in order to avoid noon showing as 12AM
      plannerHour = hour;
      mornAft = "pm";
    } else if (hour < 12) { //If hour (24 hour clock) is less than 12, plannerHour(to be displayed) is set equal and AM is added
      plannerHour = hour;
      mornAft = "am";
    }

    //add hour display to hourDaySpan
    hourDaySpan.text(plannerHour + mornAft);
    $("#planner").append(rowD);
    rowD.append(timeOfDayDiv);
    timeOfDayDiv.append(hourDaySpan);

    //add input section for user todos, utilizes the hh format from moment.js, 0-23 hour format instead of 1-24, to assign past, present, future classes
    userInput = $("<textarea>");
    userInput.attr("id", "textarea-" + x);
    userInput.val(plannerArr[x]);
    if (hour < currentH24) {
      userInput.addClass("past");
    } else if (hour === currentH24) {
      userInput.addClass("present");
    } else {
      userInput.addClass("future");
    }
    userInput.addClass("description");
    userInputDiv = $("<div>");
    userInputDiv.addClass("col-md-9 pr-0 mr-0 pl-0 ml-0");

    rowD.append(userInputDiv);
    userInputDiv.append(userInput);

    //set-up save button column
    saveBtnDiv = $("<div>");
    saveBtnDiv.addClass("col-md-1 saveSec pl-0 ml-0");

    //add save button, source FontAwesome
    let saveBtn = $("<i>");
    saveBtn.attr("class", "fas fa-save saveBtn");
    saveBtn.attr("id", "saveMe-" + x);
    saveBtn.attr("save-index", x);

    //add save button to each row
    rowD.append(saveBtnDiv);
    saveBtnDiv.append(saveBtn);
  }
  //on click event for save icon
  $(document).on("click", "i", function (event) {
    event.preventDefault();
    let indexS = $(this).attr("save-index"); //pulls the save-index number from save button, corresponds to the textarea- id established in loop
    let inputNum = "#textarea-" + indexS; //pulls the id of the corresponding textarea
    let inputValue = $(inputNum).val(); //extracts the text value from the textarea user input
    plannerArr[indexS] = inputValue; //inserts the user input value into the planner array at the index correspodning to save-index and text-area ID
    localStorage.setItem("todos", JSON.stringify(plannerArr)); //stores todos in local storage
  });
});
