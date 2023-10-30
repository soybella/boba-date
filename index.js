function handleButton() {
  document.querySelector(".quiz-question").style.display = "block";
  document.querySelector("#button").style.display = "none";
}

function handleGreenTeaIcon() {
  header.outerHTML = "<h1>Milk tea or Fruit tea?</h1>";
  greenTeaIcon.outerHTML =
    "<div> <button class='button milk-tea'> 🥛 Milk </button> <button class='button fruit-tea'> 🍓 Fruit </button> </div>";

  document.querySelector(".black-tea").style.display = "none";

  function milkTeaSelection() {
    let matchaTea = new Image();
    matchaTea.src = "/boba-date/images/matcha-milk-tea.jpeg";
    // document.body.appendChild(matchaTea);

    let jasmineTea = new Image();
    jasmineTea.src = "/boba-date/images/jasmine-milk-tea.jpeg";
    // document.body.appendChild(jasmineTea);

    document.querySelector(".quiz-question").outerHTML =
      "<div class='drink-display-section'> <h1>Try these milk teas! </h1> <div class='drink-display-grid'> <div> <img src='/boba-date/images/matcha-milk-tea.jpeg' width='200' height='300'/> <p> Matcha milk tea </p> </div> <div> <img src='/boba-date/images/jasmine-milk-tea.jpeg' width='200' height='300'/> <p> Jasmine milk tea <p> </div> </div>";
  }

  function fruitTeaSelection() {
    let mangoTea = new Image();
    mangoTea.src = "/boba-date/images/mango-fruit-tea.png";
    // document.body.appendChild(matchaTea);

    let guavaTea = new Image();
    guavaTea.src = "/boba-date/images/guava-fruit-tea.png";
    // document.body.appendChild(jasmineTea);

    document.querySelector(".quiz-question").outerHTML =
      "<div class='drink-display-section'> <h1>Try these fruit teas! </h1> <div class='drink-display-grid'> <div> <img src='/boba-date/images/mango-fruit-tea.jpeg' width='200' height='300'/> <p> Mango fruit tea </p> </div> <div> <img src='/boba-date/images/guava-fruit-tea.jpeg' width='200' height='300'/> <p> Guava milk tea <p> </div> </div>";
  }

  const milkSelection = document.querySelector(".milk-tea");
  milkSelection.addEventListener("click", milkTeaSelection);

  const fruitSelection = document.querySelector(".fruit-tea");
  fruitSelection.addEventListener("click", fruitTeaSelection);
}

function handleBlackTeaIcon() {
  header.outerHTML = "<h1>Milk tea or Fruit tea?</h1>";
  blackTeaIcon.outerHTML =
    "<div> <button class='button milk-tea'> 🥛 Milk </button> <button class='button fruit-tea'> 🍓 Fruit </button> </div>";

  document.querySelector(".green-tea").style.display = "none";

  function milkTeaSelection() {
    document.querySelector(".quiz-question").outerHTML =
      "<h1>Try these milk teas! </h1> <ul> <li> Thai milk tea </li> <li> Taro milk tea </li> </ul>";
  }

  function fruitTeaSelection() {
    document.querySelector(".quiz-question").outerHTML =
      "<h1>Try these fruit teas! </h1> <ul> <li> Passion fruit black tea </li> <li> Peach Oolong tea </li> </ul>";
  }

  const milkSelection = document.querySelector(".milk-tea");
  milkSelection.addEventListener("click", milkTeaSelection);

  const fruitSelection = document.querySelector(".fruit-tea");
  fruitSelection.addEventListener("click", fruitTeaSelection);
}

let header = document.querySelector(".header");

const greenTeaIcon = document.querySelector(".green-tea");
greenTeaIcon.addEventListener("click", handleGreenTeaIcon);

const blackTeaIcon = document.querySelector(".black-tea");
blackTeaIcon.addEventListener("click", handleBlackTeaIcon);

const button = document.querySelector("#button");
button.addEventListener("click", handleButton);
