const refs = {
  test: document.querySelector(".js-test"),
  btn: document.querySelector(".js-btn"),
  reset: document.querySelector(".js-reset"),
  body: document.querySelector(".body"),
};

let counter = 0;
refs.btn.addEventListener("click", addStep);
refs.reset.addEventListener("click", remove);

function addStep() {
  counter += 1;
  if (counter < 10) {
    firstStep();
    return;
  }

  if (counter < 25) {
    secondStep();
    return;
  }

  thirdStep();

  if (counter >= 50) {
    refs.btn.disabled = true;
    refs.btn.textContent = "Доигрался? 😄";
    refs.test.innerHTML = "Ну что получится еще разок?";
  }
}

function firstStep() {
  refs.test.innerHTML = `Молодец что нажал ${counter} раз `;
}

function secondStep() {
  refs.btn.textContent = "может хватит уже??";
  refs.test.innerHTML = ` Это уже не смешно, что ты нажал ${counter} раз `;
  refs.body.style.fontSize = "24px";
}

function thirdStep() {
  refs.btn.textContent = "Мне придется принять меры";
  refs.test.innerHTML = `ОГО! Ото у тебя терпение, не каждый может нажать ${counter} раз `;
  refs.body.style.backgroundColor = "red";
  refs.body.style.fontSize = "34px";
}

function remove() {
  refs.btn.disabled = false;
  counter = 0;
  refs.test.innerHTML = "";
  refs.body.style.backgroundColor = "#fff";
  refs.body.style.fontSize = "14px";
  refs.btn.textContent = "click me";
}
