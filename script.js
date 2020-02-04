var m = moment();

var currentDate = document.getElementById("currentDate");
// formatで出力!
var output = m.format("YYYY/MM/DD HH:mm:ss dddd");
console.log(output);
$("#currentDate").text(output);

$(".planButton").on("click", function(e) {
  console.log(this);
  //   console.log(e.target);
  var textarea = this.parentElement.querySelector("textarea");
  localStorage.setItem(textarea.id, textarea.value);
  //   var planObj = JSON.parse(localStorage.getItem("plans"))
});

function getPlan(time) {
  var text = localStorage.getItem(time);
  $("#" + time).text(text);
  if (moment(time.toLowerCase(), "ha").isBefore(m)) {
    document.getElementById(time).style.backgroundColor = "lightgray";
  } else {
    document.getElementById(time).style.backgroundColor = "rgb(245, 192, 201)";
  }
}

getPlan("9AM");
getPlan("10AM");
getPlan("11AM");
getPlan("12PM");
getPlan("1PM");
getPlan("2PM");
getPlan("3PM");
getPlan("4PM");
getPlan("5PM");

// localStorage = {

//         "4": {
//             "9AM": "stuff",
//             "10AM": "more stuff"
//         },
//         "5": {
//             "9AM": "stuff",
//             "10AM": "more stuff"
//         },

// }
