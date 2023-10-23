function handleButton() {
  document.querySelector(".quiz-question").style.display = "block";
  document.querySelector("#button").style.display = "none";
}

function handleSelectedIcon() {
  let greenTeaIcon = document.querySelector(".green-tea");
  if (icon === greenTeaIcon) {
    header.outerHTML = "<h1>Milk tea or Fruit tea?</h1>";
    greenTeaIcon.outerHTML =
      "<div> <button class='button milk-tea'> 🥛 Milk </button> <button class='button fruit-tea'> 🍓 Fruit </button> </div>";

    document.querySelector(".black-tea").style.display = "none";

    function milkTeaSelection() {
      // console.log("milk-tea test");
      document.querySelector(".quiz-question").outerHTML =
        "<h1>Try these milk teas! </h1> <ul> <li> Matcha milk tea </li> <li> Jasmine milk tea </li> </ul>";

      document.querySelector(".milk-tea").outerHTML = "test";
      document.querySelector(".fruit-tea").style.display = "none";
    }

    const milkSelection = document.querySelector(".milk-tea");
    milkSelection.addEventListener("click", milkTeaSelection);
  }
}

let header = document.querySelector(".header");

const icon = document.querySelector(".icon");
icon.addEventListener("click", handleSelectedIcon);

const button = document.querySelector("#button");
button.addEventListener("click", handleButton);
