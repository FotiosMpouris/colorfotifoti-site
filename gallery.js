// gallery.js

// List your drawings in an array (newest first if you prefer).
// Each entry is the filename in your 'drawings/' folder.
const drawings = [
    
  
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
