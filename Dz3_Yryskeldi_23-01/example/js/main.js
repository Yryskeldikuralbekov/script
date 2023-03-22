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
