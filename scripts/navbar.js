const menuBtn = document.querySelectorAll(".btn");
menuBtn.forEach((val) => {
  val.addEventListener("click", () => {
    val.classList.toggle("active");
  });
});
