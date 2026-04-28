// gallery.js

// List your drawings in an array (newest first if you prefer).
// Each entry is the filename in your 'drawings/' folder.
const drawings = [
  "fotifoti35.jpg",
  "fotifoti109.jpg",
  "fotifoti71.jpg",
  "fotifoti88.jpg",
  "fotifoti50.jpg",
  "fotifoti105.jpg",
  "fotifoti91.jpg",
  "fotifoti03.jpg",
  "fotifoti05.jpg",
  "fotifoti19.jpg",
  "fotifoti23.jpg",
  "fotifoti74.jpg",
  "fotifoti73.jpg",
  "fotifoti08.jpg",
  "fotifoti60.jpg",
  "fotifoti06.jpg",
  "fotifoti14.jpg",
  "fotifoti72.jpg",
  "fotifoti42.jpg",
  "fotifoti98.jpg",
  "fotifoti36.jpg",
  "fotifoti46.jpg",
  "fotifoti09.jpg",
  "fotifoti75.jpg",
  "fotifoti57.jpg",
  "fotifoti95.jpg",
  "fotifoti90.jpg",
  "fotifoti26.jpg",
  "fotifoti30.jpg",
  "fotifoti37.jpg",
  "fotifoti93.jpg",
  "fotifoti79.jpg",
  "fotifoti24.jpg",
  "fotifoti17.jpg",
  "fotifoti38.jpg",
  "fotifoti61.jpg",
  "fotifoti67.jpg",
  "fotifoti43.jpg",
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
