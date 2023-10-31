function handleButton() {
  document.querySelector(".quiz-question").style.display = "block";
  document.querySelector("#button").style.display = "none";
}

function handleGreenTeaIcon() {
  header.outerHTML = "<h1>Add milk or fruit tea?</h1>";
  greenTeaIcon.outerHTML =
    "<div> <button class='selection button milk-tea'> 🥛 Milk </button> <button class='selection button fruit-tea'> 🍓 Fruit </button> </div>";

  document.querySelector(".black-tea").style.display = "none";

  function milkTeaSelection() {
    document.querySelector(".quiz-question").outerHTML =
      "<div class='drink-display-section'> <h1>Try these milk teas! </h1> <div class='drink-display-grid'> <div> <img src='/boba-date/images/matcha-milk-tea.jpeg' width='200' height='300'/> <p> Matcha milk tea </p> <p class='drink-description'> Earthy and nutty flavor with the right amount of sweetness. </p> </div> <div> <img src='/boba-date/images/jasmine-milk-tea.jpeg' width='200' height='300'/> <p> Jasmine milk tea <p> <p class='drink-description'> Creamy and floral flavor with delicate sweet notes. </p> </div> </div> <div class='restart-button'> <a href='/boba-date/index.html' class='button'> ↻ Restart </a> </div>";
  }

  function fruitTeaSelection() {
    document.querySelector(".quiz-question").outerHTML =
      "<div class='drink-display-section'> <h1>Try these fruit teas! </h1> <div class='drink-display-grid'> <div> <img src='/boba-date/images/mango-fruit-tea.jpeg' width='200' height='300'/> <p> Mango green tea </p> </div> <div> <img src='/boba-date/images/guava-fruit-tea.jpeg' width='200' height='300'/> <p> Guava green tea <p> </div> </div> <div class='restart-button'> <a href='/boba-date/index.html' class='button'> ↻ Restart </a> </div>";
  }

  const milkSelection = document.querySelector(".milk-tea");
  milkSelection.addEventListener("click", milkTeaSelection);

  const fruitSelection = document.querySelector(".fruit-tea");
  fruitSelection.addEventListener("click", fruitTeaSelection);
}

function handleBlackTeaIcon() {
  header.outerHTML = "<h1>Add milk or fruit tea?</h1>";
  blackTeaIcon.outerHTML =
    "<div> <button class='selection button milk-tea'> 🥛 Milk </button> <button class='selection button fruit-tea'> 🍓 Fruit </button> </div>";

  document.querySelector(".green-tea").style.display = "none";

  function milkTeaSelection() {
    document.querySelector(".quiz-question").outerHTML =
      "<div class='drink-display-section'> <h1>Try these milk teas! </h1> <div class='drink-display-grid'> <div> <img src='/boba-date/images/thai-milk-tea.jpeg' width='200' height='300'/> <p> Thai milk tea </p> </div> <div> <img src='/boba-date/images/taro-milk-tea.jpeg' width='200' height='300'/> <p> Taro milk tea </p> </div> </div> <div class='restart-button'> <a href='/boba-date/index.html' class='button'> ↻ Restart </a> </div>";
  }

  function fruitTeaSelection() {
    document.querySelector(".quiz-question").outerHTML =
      "<div class='drink-display-section'> <h1>Try these fruit teas! </h1> <div class='drink-display-grid'> <div> <img src='/boba-date/images/strawberry-fruit-tea.jpeg' width='200' height='300'/> <p> Strawberry black tea </p> </div> <div> <img src='/boba-date/images/peach-fruit-tea.jpeg' width='200' height='300'/> <p> Peach black tea </p> </div> </div> <div class='restart-button'> <a href='/boba-date/index.html' class='button'> ↻ Restart </a> </div>";
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
