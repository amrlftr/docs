document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const chainId = urlParams.get("chainid");

  if (chainId) {
    // Find all elements with the class 'chainid'
    console.log(chainId)
    document.querySelectorAll(".chainid").forEach((el) => {
      el.textContent = chainId;
    });
  }
});
