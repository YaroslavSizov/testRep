const refs = {
  test: document.querySelector(".js-test"),
  btn: document.querySelector(".js-btn"),
  reset: document.querySelector(".js-reset"),
  body: document.querySelector(".body"),
};

let a = 0;
refs.btn.addEventListener("click", add);
refs.reset.addEventListener("click", remove);

function add() {
  a += 1;
  if (a < 10) {
    first();
      return;
  }

  if (a < 20) {
    second();
    return
  }

  third();
}

function remove() {
  refs.test.innerHTML = " ";
  console.log("good bay)");
}

function firstStep() {
refs.test.innerHTML = `Молодец что нажал ${a} раз `;
}

function secondStep() {
refs.btn.textContent = "может хватит уже??";
refs.test.innerHTML = ` Это уже не смешно, что ты нажал ${a} раз `;
refs.body.style.fontSize = "24px";
}

function thirdStep() {
refs.test.innerHTML = `ОГО! Ото у тебя терпение, не каждый может нажать ${a} раз `;
console.log("hello");
refs.body.style.backgroundColor = "red";
refs.body.style.fontSize = "34px";
}