let Next = document.querySelector(".next");
let Prev = document.querySelector(".prev");

Next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".list").appendChild(items[0]);
});
Prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".list").prepend(items[items.length - 1]);
});
