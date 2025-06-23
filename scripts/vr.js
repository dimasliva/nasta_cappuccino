document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn.get");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = "✓";
    });
  });
});
