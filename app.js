var istatus = document.querySelector("h4");
var btn = document.querySelector("#btn");
var flag = 0

btn.addEventListener("click", function () {
  if (flag == 0) {
    istatus.innerHTML = "Friend";
    istatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    btn.style.backgroundColor = "red"
    flag = 1
  }
  else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    btn.style.color = "white"
    btn.style.backgroundColor = "blue"
    flag = 0
  }
});


//checking 
