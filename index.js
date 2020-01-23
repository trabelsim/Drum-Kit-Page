var list = document.querySelectorAll(".drum")

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", clickButton);
}

function clickButton() {
  alert("You clicked me!");
}
