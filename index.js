const myButton = document.getElementById("button");

function addingEventListener() {
  myButton.addEventListener("click", function () {
    alert("I was clicked!");
  });
}

addingEventListener();
