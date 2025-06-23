document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".page .items .item");

  items.forEach((item) => {
    const btn = item.querySelector("button.btn:not(.buy)");
    if (!btn) return;

    btn.addEventListener("click", () => {
      // Заменяем кнопку на структуру с классом buy
      btn.classList.add("buy");
      btn.innerHTML = `
        <div>
          <img src="./svgs/collections/cart.svg" class="cart" />
        </div>
        <div class="count">
          <span class="minus">-</span>
          <span class="number">1</span>
          <span class="plus">+</span>
        </div>
        <div class="buy">купить</div>
      `;

      // Можно добавить обработчики для + и - внутри новой кнопки, если нужно
      const minus = btn.querySelector(".minus");
      const plus = btn.querySelector(".plus");
      const number = btn.querySelector(".number");

      let count = 1;

      minus.addEventListener("click", (e) => {
        e.stopPropagation();
        if (count > 1) {
          count--;
          number.textContent = count;
        }
      });

      plus.addEventListener("click", (e) => {
        e.stopPropagation();
        count++;
        number.textContent = count;
      });

      // Если нужно, обработчик клика по кнопке "купить"
      const buyDiv = btn.querySelector(".buy");
      buyDiv.addEventListener("click", (e) => {
        e.stopPropagation();
        alert(`Вы купили ${count} товара(ов).`);
      });
    });
  });
});
