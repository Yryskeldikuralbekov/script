const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
btn.addEventListener("click", () => {
  const request = new XMLHttpRequest();
  request.open("GET", "json/data.json");
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
  request.addEventListener("load", () => {
    const catalog = JSON.parse(request.response);
    catalog.data.map((item) => {
      console.log(item);
      const block = document.createElement("div");
      const p = document.createElement("p");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const img = document.createElement("img");
      const img_inner = " ";

      p.style.textAlign = "center";
      p1.style.textAlign = "center";
      p2.style.textAlign = "center";
      p.style.color = "#121212";
      p1.style.color = "#121212";
      p2.style.color = "#121212";
      p.style.fontSize = "20px";
      p1.style.fontSize = "20px";
      p2.style.fontSize = "20px";
      img.style.width = "160px";
      img.style.height = "160px";
      img.style.marginTop = "10px";
      img.style.marginLeft = "65px";
      block.style.height = "450px";
      block.style.width = "300px";
      block.style.borderRadius = "10px";

      block.style.border = "1px solid";
      block.style.marginTop = "30px";
      block.style.marginLeft = "45px";

      img_inner.innerHTML = img.setAttribute("src", item.img);
      p.innerHTML = "Название:" + " " + item.title;
      p1.innerHTML = "Цена:" + " " + item.price;
      p2.innerHTML = "Описание:" + " " + item.description;

      block.append(img);
      block.append(p);
      block.append(p1);
      block.append(p2);
      content.append(block);
    });
    const modal2 = document.querySelector(".modal2");
    const modal__message = document.querySelector(".modal__message");
    const p4 = document.createElement("p");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");
    const img__inner = "";
    if (200 <= request.status || request.status <= 399) {
      img2.style.width = "100px";
      img2.style.height = "100px";
      img2.style.marginTop = "20px";
      img3.style.width = "100px";
      img3.style.height = "100px";
      img3.style.marginTop = "20px";
      p4.style.fontSize = "25px";
      modal2.classList.add("show");
      modal2.classList.remove("hide");
      p4.innerHTML = "Успешно! Все данные получены!";
      img__inner.innerHTML = img2.setAttribute("src", "./img/success.png");
      img__inner.innerHTML = img3.setAttribute("src", "./img/success2.png");

      modal__message.append(p4);
      modal__message.append(img2);
      modal__message.append(img3);
    } else if (400 <= request.status || request.status <= 599) {
      modal2.classList.add("show");
      modal2.classList.remove("hide");
      p4.innerHTML = "Ошибка! Данные потеряны.";
      img__inner.innerHTML = img2.setAttribute("src", "./img/unsuccess.png");
      modal__message.append(p4);
      modal__message.append(img2);
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
