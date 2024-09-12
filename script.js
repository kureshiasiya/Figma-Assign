function showTab(tabName) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => (tab.style.display = "none"));

  document.getElementById(tabName).style.display = "block";

  const tabButtons = document.querySelectorAll(".tab");
  tabButtons.forEach((button) => button.classList.remove("active"));

  document
    .querySelector(`[onclick="showTab('${tabName}')"]`)
    .classList.add("active");
}

function addImage() {
  const gallery = document.querySelector(".images");
  const newImage = document.createElement("img");
  newImage.src = "new-placeholder.jpg"; // Replace with actual image source
  newImage.alt = "New Image";
  gallery.appendChild(newImage);
}

function navigateGallery(direction) {
  const gallery = document.querySelector(".images");
  const images = gallery.querySelectorAll("img");

  if (direction === "prev") {
    gallery.prepend(images[images.length - 1]);
  } else if (direction === "next") {
    gallery.append(images[0]);
  }
}
