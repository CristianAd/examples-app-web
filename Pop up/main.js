const showPopupButton = document.getElementById("showPopup");
const popupContainer = document.getElementById("popupContainer");
const closeButton = document.getElementById("closeButton");

showPopupButton.addEventListener("click", () => {
  popupContainer.style.display = "block";
});

closeButton.addEventListener("click", () => {
  popupContainer.style.display = "none";
});
