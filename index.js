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
      "<div class='drink-display-section'> <h1>Try these milk teas! </h1> <div class='drink-display-grid'> <div> <img src='isabellalizarde-boba-date/images/matcha-milk-tea.jpeg' width='200' height='300'/> <p class='drink-header'> Matcha milk tea </p> <p class='drink-description'> Earthy and nutty flavor with the right amount of sweetness. Popular for its unique green color. </p> </div> <div> <img src='isabellalizarde-boba-date/images/jasmine-milk-tea.jpeg' width='200' height='300'/> <p class='drink-header'> Jasmine milk tea <p> <p class='drink-description'> Creamy and floral flavor with delicate sweet notes. </p> </div> </div> <div class='restart-button'> <a href='https://isabellalizarde-boba-date.netlify.app/' class='button'> ↻ Restart </a> </div>";
  }

  function fruitTeaSelection() {
    document.querySelector(".quiz-question").outerHTML =
      "<div class='drink-display-section'> <h1>Try these fruit teas! </h1> <div class='drink-display-grid'> <div> <img src='isabellalizarde-boba-date/images/mango-fruit-tea.jpeg' width='200' height='300'/> <p class='drink-header'> Mango green tea </p> <p class='drink-description'> Sweet and tart flavor with a light caffeine boost. </p> </div> <div> <img src='isabellalizarde-boba-date/images/guava-fruit-tea.jpeg' width='200' height='300'/> <p class='drink-header'> Guava green tea <p> <p class='drink-description'> Fruity and floral flavor with an earthy aftertaste. </p> </div> </div> <div class='restart-button'> <a href='https://isabellalizarde-boba-date.netlify.app/' class='button'> ↻ Restart </a> </div>";
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
      "<div class='drink-display-section'> <h1>Try these milk teas! </h1> <div class='drink-display-grid'> <div> <img src='isabellalizarde-boba-date/images/thai-milk-tea.jpeg' width='200' height='300'/> <p class='drink-header'> Thai milk tea </p> <p class='drink-description'> A perfect blend of earthy, sweet, and spice flavors. Popular for its distinctive orange color.  </p> </div> <div> <img src='isabellalizarde-boba-date/images/taro-milk-tea.jpeg' width='200' height='300'/> <p class='drink-header'> Taro milk tea </p> <p class='drink-description'>  Unique flavor similar to that of a sweet potato with hints of vanilla. Well known for its bright purple color. </p> </div> </div> <div class='restart-button'> <a href='https://isabellalizarde-boba-date.netlify.app/' class='button'> ↻ Restart </a> </div>";
  }

  function fruitTeaSelection() {
    document.querySelector(".quiz-question").outerHTML =
      "<div class='drink-display-section'> <h1>Try these fruit teas! </h1> <div class='drink-display-grid'> <div> <img src='isabellalizarde-boba-date/images/strawberry-fruit-tea.jpeg' width='200' height='300'/> <p class='drink-header'> Strawberry black tea </p> <p class='drink-description'> Classic sweet strawberry flavor with hints of floral. </p> </div> <div> <img src='isabellalizarde-boba-date/images/peach-fruit-tea.jpeg' width='200' height='300'/> <p class='drink-header'> Peach black tea </p> <p class='drink-description'> Refreshing juicy peach flavor with earthy hints. </p> </div> </div> <div class='restart-button'> <a href='https://isabellalizarde-boba-date.netlify.app/' class='button'> ↻ Restart </a> </div>";
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
