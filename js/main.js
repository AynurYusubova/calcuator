const buttons = document.querySelectorAll(".bottom .button");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const operation = document.querySelector(".operation");
const equals = document.querySelector(".equals");



for (let i = 0; i < buttons.length; i++) {
    buttons[4].addEventListener("click", function () {
        num1.innerHTML = buttons[4].innerHTML;
        num1.classList.toggle("active");
        num2.innerHTML = buttons[4].innerHTML;
        num2.classList.toggle("active");
    });


    buttons[5].addEventListener("click", function () {
        num1.innerHTML = buttons[5].innerHTML;
        num1.classList.toggle("active");
        num2.innerHTML = buttons[5].innerHTML;
        num2.classList.toggle("active");
    });

    buttons[6].addEventListener("click", function () {
        num1.innerHTML = buttons[6].innerHTML;
        num1.classList.toggle("active");
        num2.innerHTML = buttons[6].innerHTML;
        num2.classList.toggle("active");
    });

    buttons[8].addEventListener("click", function () {
        num1.innerHTML = buttons[8].innerHTML;
        num1.classList.toggle("active");
        num2.innerHTML = buttons[8].innerHTML;
        num2.classList.toggle("active");
    });

    buttons[9].addEventListener("click", function () {
        num1.innerHTML = buttons[9].innerHTML;
        num1.classList.toggle("active");
        num2.innerHTML = buttons[9].innerHTML;
        num2.classList.toggle("active");
    });

    buttons[10].addEventListener("click", function () {
        num1.innerHTML = buttons[10].innerHTML;
        num1.classList.toggle("active");
        num2.innerHTML = buttons[10].innerHTML;
        num2.classList.toggle("active");
    });

    buttons[12].addEventListener("click", function () {
        num1.innerHTML = buttons[12].innerHTML;
        num1.classList.toggle("active");
        num2.innerHTML = buttons[12].innerHTML;
        num2.classList.toggle("active");
    });

    buttons[13].addEventListener("click", function () {
        num1.innerHTML = buttons[13].innerHTML;
        num1.classList.toggle("active");
        num2.innerHTML = buttons[13].innerHTML;
        num2.classList.toggle("active");
    });

    buttons[14].addEventListener("click", function () {
        num1.innerHTML = buttons[14].innerHTML;
        num1.classList.toggle("active");
        num2.innerHTML = buttons[14].innerHTML;
        num2.classList.toggle("active");
    });

    buttons[16].addEventListener("click", function () {
        num1.innerHTML = buttons[16].innerHTML;
        num1.classList.toggle("active");
        num2.innerHTML = buttons[16].innerHTML;
        num2.classList.toggle("active");
    });

    buttons[2].addEventListener("click", function () {
        operation.innerHTML = buttons[2].innerHTML;
        operation.classList.toggle("active");
    });


    buttons[3].addEventListener("click", function () {
        operation.innerHTML = buttons[3].innerHTML;
        operation.classList.toggle("active");
    });

    buttons[7].addEventListener("click", function () {
        operation.innerHTML = buttons[7].innerHTML;
        operation.classList.toggle("active");
    });

    buttons[11].addEventListener("click", function () {
        operation.innerHTML = buttons[11].innerHTML;
        operation.classList.toggle("active");
    });

    buttons[15].addEventListener("click", function () {
        operation.innerHTML = buttons[15].innerHTML;
        operation.classList.toggle("active");
    });

    buttons[0].addEventListener("click", function () {
        num1.classList.remove("active");
        num2.classList.remove("active");
        operation.classList.remove("active");
        equals.classList.remove("active");
    });

    buttons[18].addEventListener("click", function () {
        equals.innerHTML = buttons[18].innerHTML;
        equals.classList.toggle("active");

    });
}











