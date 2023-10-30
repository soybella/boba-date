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
    matchaTea.src = "/boba-date/images/matcha-tea.png";
    // document.body.appendChild(matchaTea);

    let jasmineTea = new Image();
    jasmineTea.src = "/boba-date/images/jasmine-tea.png";
    // document.body.appendChild(jasmineTea);

    document.querySelector(".quiz-question").outerHTML =
      "<div class='drink-display-section'> <h1>Try these milk teas! </h1> <div class='drink-display-grid'> <div> <img src='/boba-date/images/matcha-tea.png' width='200' height='230'/> <p> Matcha milk tea </p> </div> <div> <img src='/boba-date/images/jasmine-tea.png' width='200' height='230'/> <p> Jasmine milk tea <p> </div> </div>";
  }

  function fruitTeaSelection() {
    document.querySelector(".quiz-question").outerHTML =
      "<h1>Try these fruit teas! </h1> <ul> <li> Honeydew green tea </li> <li> Grapefruit green tea </li> </ul>";
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
      "<h1>Try these milk teas! </h1> <ul> <li> Okinawa milk tea </li> <li> Brown sugar milk tea </li> </ul>";
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
