const overlayCheck = document.querySelector("#check");
const overlay = document.querySelector(".overlay");

overlayCheck.addEventListener("click", () => {
  overlay.classList.toggle("show-nav");
});
document.querySelector("#check").addEventListener("click", function () {
  document.body.classList.toggle("no-scroll");
});
