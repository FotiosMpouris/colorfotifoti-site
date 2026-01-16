// gallery.js

// List your drawings in an array (newest first if you prefer).
// Each entry is the filename in your 'drawings/' folder.
const drawings = [
  "fotifoti10.jpg",
  "fotifoti01.jpg",
  "fotifoti89.jpg",
  "fotifoti12.jpg",
  "fotifoti16.jpg",
  "fotifoti81.jpg",
  "fotifoti85.jpg",
  "fotifoti83.jpg",
  "fotifoti64.jpg",
  "fotifoti48.jpg",
  "fotifoti32.jpg",
  "fotifoti15.jpg",
  "fotifoti84.jpg",
  "fotifoti28.jpg",
  "fotifoti59.jpg",
  "fotifoti39.jpg",
  "fotifoti41.jpg",
  "fotifoti20.jpg",
  "fotifoti25.jpg",
  "fotifoti18.jpg",
  "fotifoti31.jpg",
  "fotifoti40.jpg",
  "fotifoti87.jpg",
  "fotifoti80.jpg",
  "fotifoti07.jpg",
  "fotifoti58.jpg",
  "fotifoti62.jpg",
  "fotifoti63.jpg",
  "fotifoti56.jpg",
  "fotifoti52.jpg",
  "fotifoti44.jpg",
  
    
  
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
