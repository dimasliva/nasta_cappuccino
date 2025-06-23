const showContentBtn = document.getElementById("showContent");
const showBookBtn = document.getElementById("showBook");

const contentBlock = document.querySelector(".content");
const bookBlock = document.querySelector(".book_wrapper");

function showBlock(blockToShow, blockToHide, btnToActivate, btnToDeactivate) {
  // Скрываем блок, который нужно скрыть
  blockToHide.classList.add("hidden");
  blockToHide.classList.remove("show");

  // Показываем нужный блок
  blockToShow.classList.remove("hidden");
  blockToShow.classList.add("show");

  // Обновляем активные классы у ссылок
  btnToActivate.classList.add("active");
  btnToDeactivate.classList.remove("active");

  // Чтобы класс .show можно было повторно применять (перезапуск анимации),
  // убираем его через время анимации
  setTimeout(() => {
    blockToShow.classList.remove("show");
  }, 500);
}

showContentBtn.addEventListener("click", () => {
  if (contentBlock.classList.contains("hidden")) {
    showBlock(contentBlock, bookBlock, showContentBtn, showBookBtn);
  }
});

showBookBtn.addEventListener("click", () => {
  if (bookBlock.classList.contains("hidden")) {
    showBlock(bookBlock, contentBlock, showBookBtn, showContentBtn);
  }
});
const button = document.querySelector(".contact button");
const input = document.querySelector('.contact input[type="text"]');

button.addEventListener("click", () => {
  input.value = "";
});
