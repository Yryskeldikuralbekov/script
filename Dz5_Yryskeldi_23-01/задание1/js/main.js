const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const euro = document.querySelector("#euro");

const convert = (elem, target1, target2, isTrue) => {
  elem.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "json/data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();

    request.addEventListener("load", () => {
      const data = JSON.parse(request.response);
      if (isTrue == 1) {
        (target1.value = (elem.value / data.usd).toFixed(2))(
          (target2.value = (elem.value / data.euro).toFixed(2))
        );
      } else if (isTrue == 2) {
        (target1.value = (elem.value * data.usd).toFixed(2))(
          (target2.value = (elem.value * data.usd_to_euro).toFixed(2))
        );
      } else if (isTrue == 3) {
        (target1.value = (elem.value * data.euro).toFixed(2))(
          (target2.value = (elem.value * data.euro_to_usd).toFixed(2))
        );
      }

      (elem.value === "" && (target1.value = "")) || (target2.value = "");
    });
  });
};

convert(som, usd, euro, 1);
convert(usd, som, euro, 2);
convert(euro, som, usd, 3);
