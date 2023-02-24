const refs = {
  test: document.querySelector(".js-test"),
  btn: document.querySelector(".js-btn"),
  reset: document.querySelector(".js-reset"),
};

refs.btn.addEventListener("click", add);

refs.reset.addEventListener("click", remove);

function add() {
  refs.test.insertAdjacentHTML("beforeend", "Молодец что нажал)) ");
  console.log("hello");
}

function remove() {
  refs.test.innerHTML = " ";
  console.log("good bay)");
}