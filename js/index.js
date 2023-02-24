const test = document.querySelector(".js-test");
const btn = document.querySelector(".js-btn");


btn.addEventListener('click', () => {
    test.insertAdjacentHTML("beforeend", "Молодец что нажал))");
    // test.innerHTML = "Молодец что нажал))";
    console.log('hello');
})
