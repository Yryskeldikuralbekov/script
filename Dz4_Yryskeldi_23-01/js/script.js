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
  });
});
