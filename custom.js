console.log("custom.js is loaded");

const urlParams = new URLSearchParams(window.location.search);
const chainId = urlParams.get("chainid");
console.log("Found chainId param:", chainId);

// Wait for DOM hydration (for .chainid element to appear)
const interval = setInterval(() => {
  const placeholders = document.querySelectorAll(".chainid");

  if (placeholders.length > 0) {
    console.log("Found .chainid elements, updating...");

    placeholders.forEach((el) => {
      el.textContent = chainId || "unknown";
    });

    clearInterval(interval); // Stop checking once updated
  }
}, 200); // check every 200ms
