document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    if (email !== "" && name !== "") {
      document.getElementById("coupon-status").textContent =
        "Купон: Активовано скидка 15%";
    } else {
      document.getElementById("coupon-status").textContent =
        "Купон: Не активовано";
    }
  });

function showBlocks(option) {
  var blocks = document.getElementById("main-sectione");
  blocks.innerHTML = ""; // Очистити вміст перед додаванням нових блоків

  var texts = getTexts(option);
  texts.forEach(function (text) {
    var div = document.createElement("div");
    div.className = "block";
    div.textContent = text;
    blocks.appendChild(div);
  });
}

function getTexts(option) {
  // Ваш код для визначення масиву текстів на основі вибраної опції
  // Наприклад, тут можна використати switch або if/else для різних опцій
  switch (option) {
    case "option1":
      return ["Block 1-1", "Block 1-2", "Block 1-3", "Block 1-4", "Block 1-5"];
    case "option2":
      return ["Block 2-1", "Block 2-2", "Block 2-3", "Block 2-4", "Block 2-5"];
    case "option3":
      return ["Block 3-1", "Block 3-2", "Block 3-3", "Block 3-4", "Block 3-5"];
    case "option4":
      return ["Block 4-1", "Block 4-2", "Block 4-3", "Block 4-4", "Block 4-5"];
    case "option5":
      return ["Block 5-1", "Block 5-2", "Block 5-3", "Block 5-4", "Block 5-5"];
    // Додайте інші опції тут
    default:
      return []; // Повернути порожній масив, якщо опція не визначена
  }
}
