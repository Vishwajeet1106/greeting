let d = new Date();
console.log(d);
var h = d.getHours();
if (h > 5 && h < 12) {
  document.getElementById("tell").innerHTML = "Good Morning";
  document.getElementById("first").style.background = "rgb(207, 189, 203)";
  document.getElementById("first").style.color = "white";
} else if (h < 17 && h >= 12) {
  document.getElementById("tell").innerHTML = "Good Afternoon";
  document.getElementById("first").style.background = "rgb(229, 219, 138)";
  document.getElementById("first").style.color = "black";
} else if (h < 8 && h >= 17) {
  document.getElementById("tell").innerHTML = "Good Evening";
  document.getElementById("first").style.background = "rgb(154, 233, 171)";
  document.getElementById("first").style.color = "blue";
} else {
  document.getElementById("tell").innerHTML = "Good night";
  document.getElementById("first").style.background = "rgb(48, 58, 48)";
  document.getElementById("first").style.color = "red";
}
