# courseWork_05_dayPlanner

[GitHub Pages Deployment](https://k1te-m.github.io/courseWork_05_dayPlanner/)

# Description
Using JQuery, the script.js file dynamically builds a daily planner for workday beginning at 9AM and ending at 5PM. Users are able to enter information into the textarea and when the save button is clicked, the value is stored within the browser's local storage for later retrieval. 

Each hour row highlights if it takes place in the past, present, or future by utilizing the moment.js to compare the current time to an established hour index. Any hour block occuring in the past will be grayed out, the current hour will highlight orange, and future blocks will appear green. 

# Future Development/To Update
I would like to incorporate a day/night mode toggle within this applciation along with the addition of further incremented time slots, perhaps a 15 or 30 minute increment. An additional layout for weekend planning would also be something to look into. 

Once we have learned more relating to APIs I would be interested to see how I could connect this planner to other information and have a full fledged calendar/planning application. 

# Reference Materials
I referenced the below two public repositories found online for ideas on how to build 12HR/24HR for past, present, and future assignments and local storage retrieval. All code written is my own, nothing was copy/pasted. 

[Ryan Ellingson Script](https://github.com/RyanEllingson/Day-Planner/blob/master/assets/js/script.js)
[Gabe Pettus Script](https://github.com/gabepettus/DayPlanner/blob/master/script.js)
