const label = () => {
  const inForm = document.querySelector(".wpcf7-form");
  const inEmail = inForm.querySelector('input[type="email"]');
  const inLabel = inForm.querySelector("label");
  const inSpan = inForm.querySelector(".wpcf7-not-valid-tip");
  inEmail.addEventListener("focus", (e) => {
    inLabel.style = "top: 12%;";
  });
  var mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.target.classList.contains("invalid")) {
        inLabel.style = "opacity: 0;";
        inEmail.addEventListener("focus", (e) => {
          inLabel.style = "opacity: 0;";
        });
      } else {
        inLabel.style = "opacity: 1;";
        inEmail.addEventListener("focus", (e) => {
          inLabel.style = "top: 12%;";
        });
      }
    });
  });
  mutationObserver.observe(inForm, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true,
  });
};
label();
