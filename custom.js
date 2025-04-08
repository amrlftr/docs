// Function to get query parameters by name
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Retrieve the 'chainid' parameter from the URL
const chainId = getQueryParam('chainid');

// Make chainId globally accessible
window.chainId = chainId;
console.log(chainId);
console.log("hello world");
