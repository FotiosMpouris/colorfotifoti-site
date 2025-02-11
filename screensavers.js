// screensavers.js

// 1. List your colored images (screensavers). 
// Newest first if you want.
const screensavers = [
  "screensaver6.png",
  "screensaver5.png",
  "screensaver4.png",  
  "screensaver3.png",
  "screensaver2.png",
  "screensaver1.png"
];

// 2. Grab the gallery container from screensavers.html
const screensaverContainer = document.getElementById("screensaver-gallery");

// 3. Loop through the array and create "cards"
screensavers.forEach(filename => {
  // Create a wrapper div
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("screensaver-item");

  // Create an img element
  const img = document.createElement("img");
  // The path: "screensavers/filename"
  img.src = `screensavers/${filename}`;
  img.alt = filename;

  itemDiv.appendChild(img);

  // Optional: Add a "Download" link
  const downloadLink = document.createElement("a");
  downloadLink.href = `screensavers/${filename}`;
  downloadLink.download = filename;
  downloadLink.textContent = "Download";
  // Style or add line break
  itemDiv.appendChild(document.createElement("br"));
  itemDiv.appendChild(downloadLink);

  // Append itemDiv to the container
  screensaverContainer.appendChild(itemDiv);
});

