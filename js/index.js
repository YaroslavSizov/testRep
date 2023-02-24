const refs = {
  test: document.querySelector(".js-test"),
  btn: document.querySelector(".js-btn"),
  reset: document.querySelector(".js-reset"),
};

let a = 0;

refs.btn.addEventListener("click", add);

refs.reset.addEventListener("click", remove);

function add() {
  a += 1;
  refs.test.innerHTML = `Молодец что нажал ${a} раз `;
  console.log("hello");
}

function remove() {
  refs.test.innerHTML = " ";
  console.log("good bay)");
}