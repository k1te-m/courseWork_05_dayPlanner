$(document).ready(function () {
  //capture time from momentjs
  const time = moment().format("MMMM Do YYYY");

  //display time in current day HTML section
  let currentD = $("#currentDay");
  currentD.text(time);

  let currentH24 = parseInt(moment().format("hh")); // gives hour in 24 hour format

  
  let todos = JSON.parse(localStorage.getItem("todos"));
  console.log(todos);
  //local storage items
  if (todos !== null) {
    plannerArr = todos;
    } else {
    plannerArr = new Array(9);
    plannerArr[4] = "Test";
    }
  

  //for loop to build daily calendar rows beginning at 9AM to 5PM, 12 + 5 = 17
  for (let hour = 9; hour <= 17; hour++) {
    //build rows
    let x = hour - 9;
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

    if (hour > 12) {
      plannerHour = hour - 12;
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

    //add input section for user todos, utilizes the hh format from moment.js, 0-23 hour format instead of , to assign past, present, future classes
    userInput = $("<textarea>");
    userInput.attr("id", "textarea-"+x);
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
    saveBtn.attr("id", "saveMe-"+x);
    saveBtn.attr("save-index", x);

    //add save button to each row
    rowD.append(saveBtnDiv);
    saveBtnDiv.append(saveBtn);
  }

  $(document).on("click", "i", function(event){
    event.preventDefault();
    let index = $(this).attr("save-index");
    let inputNum = "#textarea-"+index;
    console.log(inputNum);
    let inputValue = $(inputNum).val();
    console.log(inputValue);  
    plannerArr[index] = inputValue;
    localStorage.setItem("todos", JSON.stringify(plannerArr));
  })

  

  
  
  
  
  

  


});
