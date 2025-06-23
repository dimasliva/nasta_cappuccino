document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".page .slide");
  const arrow = document.querySelector(".page .arrow");
  let currentIndex = 0;
  let intervalId;

  function showSlide(nextIndex) {
    if (nextIndex === currentIndex) return;

    const currentSlide = slides[currentIndex];
    const nextSlide = slides[nextIndex];

    // Добавим классы анимации
    currentSlide.classList.add("slide-out");
    nextSlide.classList.add("slide-in");
    nextSlide.classList.add("active");

    // После окончания анимации убираем старые классы
    currentSlide.addEventListener("animationend", function handler() {
      currentSlide.classList.remove("active", "slide-out");
      currentSlide.removeEventListener("animationend", handler);
    });

    nextSlide.addEventListener("animationend", function handler() {
      nextSlide.classList.remove("slide-in");
      nextSlide.removeEventListener("animationend", handler);
    });

    currentIndex = nextIndex;
  }

  function nextSlide() {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  // Автоматическое перелистывание каждые 3 секунды
  intervalId = setInterval(nextSlide, 3000);

  // При клике на стрелку перелистываем на следующий слайд и сбрасываем таймер
  arrow.addEventListener("click", () => {
    nextSlide();
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 3000);
  });
});
