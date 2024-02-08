// Function to change the title and favicon when the tab becomes visible
function changeTitleAndFavicon() {
  document.title = "Veteran Media LLP | Best Brand Design Agency in Nashik";
  document.querySelector("link[rel*='icon']").href = "favicon.ico";
}

// Function to restore the original title and favicon when the tab becomes hidden
function restoreTitleAndFavicon() {
  document.title = "Missing you already";
  document.querySelector("link[rel*='icon']").href = "sad.ico";
}

// Check if the Page Visibility API is supported
if (document.hidden !== undefined) {
  // Add event listeners for visibility changes
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      restoreTitleAndFavicon(); // Tab is hidden
    } else {
      changeTitleAndFavicon(); // Tab is visible again
    }
  });
} else {
  console.log("Page Visibility API not supported.");
}

// ******************* Soft Scroll **************************
var navMenuAnchorTags = document.querySelectorAll(".nav-item .nav-link");

for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionID = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionID);
    console.log(targetSection);
    var interval = setInterval(function () {
      var targetSectionCoordinates = targetSection.getBoundingClientRect();
      if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0, 50);
    }, 20);
  });
}

function handleFileUpload() {
  const fileInput = document.getElementById("file-input");
  const fileName = fileInput.files[0].name;

  alert("File uploaded: " + fileName);
  // You can perform additional actions with the uploaded file here
}

let speed = 2000,
  position = 0,
  bodyDiv = document.body;
window.addEventListener("wheel", (e) => {
  speed += e.deltaY * 0.001;
});

function raf() {
  position += speed;
  speed *= 0.97;

  let maxTranslateValue = (document.documentElement.scrollHeight - window.innerHeight) * 0.5;

  // Stop the animation when reaching the bottom
  if (position > maxTranslateValue) {
    position = maxTranslateValue;
  }

  let translateValue = position * 50;
  bodyDiv.style.transform = `translate(0,-${translateValue}px)`;

  if (position < maxTranslateValue) {
    window.requestAnimationFrame(raf);
  }
}

raf();



// ********************* Text Fade-in *********************


