console.log("Start");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".bell-1").style.backgroundColor = "#1f232f";
  document.querySelector(".bell-2").style.backgroundColor = "#1f232f";
  document.querySelector(".bell-3").style.backgroundColor = "#1f232f";

  setTimeout(() => {
    document.querySelector(".bell-1").style.backgroundColor =
      "rgb(249, 176, 30)";
  }, 1500);
  setTimeout(() => {
    document.querySelector(".bell-2").style.backgroundColor =
      "rgb(249, 176, 30)";
  }, 500);
  setTimeout(() => {
    document.querySelector(".bell-3").style.backgroundColor =
      "rgb(249, 176, 30)";
  }, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  let burger = document.querySelector("#menuButton");
  let menu = document.querySelector("#menu");

  burger.addEventListener("click", () => {
    console.log("burger clicked!");
    burger.classList.toggle("burger--open");
    menu.classList.toggle("menu--open");
  });
});

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
