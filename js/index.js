const test = document.querySelector(".js-test");
const btn = document.querySelector(".js-btn");
const reset = document.querySelector(".js-reset");


btn.addEventListener('click', () => {
    test.insertAdjacentHTML("beforeend", "Молодец что нажал)) ");
    console.log('hello');
})


reset.addEventListener("click", () => {
    test.innerHTML = " ";
  console.log("good bay)");
});