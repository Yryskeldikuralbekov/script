
// Первая

const email = document.querySelector("#email");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const proverka1 = document.querySelector(".proverka1");
const proverka2 = document.querySelector(".proverka2");
const check = document.querySelector(".check");
const result = document.querySelector(".result");

const emailRegExp = /^[a-z0-9-!%#&$^*=+_-]+@[gmail]+\.[a-z]{2,5}$/i;
const parolRegExp = /(?=.*[a-z])(?=.*[A-Z])((?=.*[0-9])(?=.*[@#$%]).{8,40})/i;

proverka1.addEventListener("click", () => {
  if (emailRegExp.test(email.value) == true) {
    alert("Заполните пароль!");
  } else {
    alert("Почта неправильно заполнен!");
  }
});

proverka2.addEventListener("click", () => {
  if (parolRegExp.test(password1.value) == true) {
    alert("Подтвердите пароль");
  } else {
    alert(
      "Неправильно! Пароль должен содержать Заглавную и строчную букву, цифры, а также специальные символы и не менее 8 символов"
    );
  }
});

check.addEventListener("click", () => {
  if (
    parolRegExp.test(password2.value) == true &&
    password2.value === password1.value
  ) {
    result.innerText = " Вы зарегистрировались ";
    result.style.color = "green";
  } else {
    alert("Ошибка!");
  }
});

function showpassword1() {
  const passwordCheck1 = document.querySelector(".password_check1");
  const password1 = document.querySelector("#password1");
  passwordCheck1.addEventListener("click", () => {
    passwordCheck1.classList.toggle("active");

    if (password1.getAttribute("type") === "password") {
      password1.setAttribute("type", "text");
    } else {
      password1.setAttribute("type", "password");
    }
  });
}

function showpassword2() {
  const passwordCheck2 = document.querySelector(".password_check2");
  const password2 = document.querySelector("#password2");
  passwordCheck2.addEventListener("click", () => {
    passwordCheck2.classList.toggle("active");

    if (password2.getAttribute("type") === "password") {
      password2.setAttribute("type", "text");
    } else {
      password2.setAttribute("type", "password");
    }
  });
}
showpassword1();
showpassword2();


// Вторая

let position = 0;

function move() {
  position += 5;
  if (position > 500) return;
  document.querySelector(".block2").style.left = position + "px";
  setTimeout(move, 100);
}
move();
