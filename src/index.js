//import "./styles.css";
var slider = document.getElementById("slide");
var txt = document.getElementById("txt");
slider.addEventListener("click", function () {
  if (document.body.style.background === "white") {
    document.body.style.background = "black";
    txt.style.color = "white";
  } else {
    document.body.style.background = "white";
    txt.style.color = "black";
  }
});
