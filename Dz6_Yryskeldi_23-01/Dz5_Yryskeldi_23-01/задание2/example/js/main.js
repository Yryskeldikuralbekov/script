const tabsParent = document.querySelector(".tabheader__items");
const tabs = document.querySelectorAll(".tabheader__item");
const tabContent = document.querySelectorAll(".tabcontent");
let currentTab = 0;

const hideTabContent = (i = 0) => {
  tabContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });

  tabContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};

const autoTab = () => {
  currentTab++;
  if (currentTab === 4) {
    currentTab = 0;
  }
  hideTabContent(currentTab);
};

let updTab = setInterval(autoTab, 3000);

tabs.forEach((item, i) => {
  item.onclick = () => {
    currentTab = i;
    hideTabContent(currentTab);
    clearInterval(updTab);
    updTab = setInterval(autoTab, 3000);
  };
});

hideTabContent();

const openModalBtn = document.querySelector(".btn_white");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");

const openModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};

openModalBtn.addEventListener("click", openModal);

const closeModal = (event) => {
  const target = event.target;
  if (target === modal || target === modalCloseBtn) {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }
};

modalCloseBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

window.addEventListener("scroll", () => {
  let currentHeight = document.documentElement.scrollHeight - window.scrollY;

  if (currentHeight === document.documentElement.clientHeight) {
    openModal();
  }
});

const forms = document.querySelectorAll("form");

const postData = (form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const obj = {};
    formData.forEach((item, name) => {
      obj[name] = item;
    });
    // const json = JSON.stringify(obj);
    // const request = new XMLHttpRequest();
    // request.open("POST", "server.php");
    // request.setRequestHeader("Content-Type", "application/json");
    // request.send(json);

    fetch("server.php", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then((request) => {
      const modal2 = document.querySelector(".modal2");
      const modal__message = document.querySelector(".modal__message");
      const p = document.createElement("p");
      const img = document.createElement("img");
      const img__inner = "";
      if (200 <= request.status || request.status <= 399) {
        img.style.width = "100px";
        img.style.height = "100px";
        img.style.marginTop = "20px";
        p.style.fontSize = "25px";
        modal.classList.add("hide");
        modal.classList.remove("show");
        modal2.classList.add("show");
        modal2.classList.remove("hide");
        p.innerHTML = "Успешно! Все данные получены!";
        img__inner.innerHTML = img.setAttribute("src", "./icons/success.png");
        // img__inner.innerHTML = img.setAttribute("src", "./icons/success2.png");

        modal__message.append(p);
        modal__message.append(img);
      } else if (400 <= request.status || request.status <= 599) {
        modal.classList.add("hide");
        modal.classList.remove("show");
        modal2.classList.add("show");
        modal2.classList.remove("hide");
        p.innerHTML = "Ошибка! Данные потеряны.";
        img__inner.innerHTML = img.setAttribute("src", "./icons/unsuccess.png");
        modal__message.append(p);
        modal__message.append(img);
      }
      const modalCloseBtn1 = document.querySelector(".modal__close_1");
      const closeModal = (event) => {
        const target = event.target;
        if (target === modal2 || target === modalCloseBtn1) {
          modal2.classList.add("hide");
          modal2.classList.remove("show");
          document.body.style.overflow = "";
        }
      };

      modalCloseBtn1.addEventListener("click", closeModal);
      modal2.addEventListener("click", closeModal);
    });
  });
};
// })
// .then((data) => {

// })

forms.forEach((item) => {
  postData(item);
});
