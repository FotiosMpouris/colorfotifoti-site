// gallery.js

// List your drawings in an array (newest first if you prefer).
// Each entry is the filename in your 'drawings/' folder.
const drawings = [
  "fotifoti82.jpg",
  "fotifoti06.jpg",
  "fotifoti52.jpg",
  "fotifoti13.jpg",
  "fotifoti44.jpg",
  "fotifoti33.jpg",
  "fotifoti25.jpg",
  "fotifoti70.jpg",
  "fotifoti80.jpg",
  "fotifoti11.jpg",
  "fotifoti22.jpg",
  "fotifoti87.jpg",
  "fotifoti62.jpg",
  "fotifoti47.jpg",
  "fotifoti14.jpg",
  "fotifoti49.jpg",
  "fotifoti01.jpg",
  "fotifoti53.jpg",
  "fotifoti37.jpg",
  "fotifoti20.jpg",
  "fotifoti04.jpg",
  "fotifoti08.jpg",
    
  
];

// The ID of the HTML container where we display them
const galleryContainer = document.getElementById("gallery");

// Generate gallery items
drawings.forEach(filename => {
  // Create a wrapper div
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("gallery-item");

  // Create the image element
  const img = document.createElement("img");
  img.src = `drawings/${filename}`;
  img.alt = filename;

  // Add image to the div
  itemDiv.appendChild(img);

  // Optional: add a link or button if you want
  // e.g., a "Download" link
  const downloadLink = document.createElement("a");
  downloadLink.href = `drawings/${filename}`;
  downloadLink.download = filename; // prompts download
  downloadLink.textContent = "Download";
  itemDiv.appendChild(document.createElement("br"));
  itemDiv.appendChild(downloadLink);

  // Append the div to the gallery container
  galleryContainer.appendChild(itemDiv);
});
