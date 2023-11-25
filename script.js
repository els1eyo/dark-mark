const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const navmenu = document.querySelector(".navmenu");

hamburger.addEventListener("click", function () {
  hamburger.style.visibility = "hidden";
  closeIcon.style.visibility = "visible";

  navmenu.classList.add("active");
});

closeIcon.addEventListener("click", function () {
  closeIcon.style.visibility = "hidden";
  hamburger.style.visibility = "visible";

  navmenu.classList.remove("active");
});
