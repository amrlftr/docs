console.log("custom.js is loaded");

const urlParams = new URLSearchParams(window.location.search);
const chainId = urlParams.get("chainid");
const chain = urlParams.get("chain");
console.log("Found chainId param:", chainId);
console.log("Found chain param:", chain);

if (chain) {
  localStorage.setItem("chain", chain);
}

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
