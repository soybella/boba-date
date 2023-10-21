function handleButton() {
  document.querySelector(".quiz-question").style.display = "block";
  document.querySelector("#button").style.display = "none";
}

function handleSelectedIcon() {
  let greenTeaIcon = document.querySelector(".green-tea");
  if (icon === greenTeaIcon) {
    header.outerHTML = "<h1>Milk tea or Fruit tea?</h1>";
    greenTeaIcon.outerHTML =
      "<div> <button class='button milk-tea'> <h1>🥛 Milk</h1> </button> <button class='button fruit-tea'> <h1>🍓 Fruit </button> </div>";

    document.querySelector(".black-tea").style.display = "none";
    // document.querySelector(".tea-question").style.display = "none";

    function milkTeaSelection() {
      //   console.log("milk-tea test");
      //   document.querySelector(".milk-tea").outerHTML = "test";
      //   document.querySelector(".fruit-tea").style.display = "none";
      // figure out how to display green tea boba selection
    }

    // document.querySelector(".fruit").style.display = "none";
    // document.querySelector(".milk").style.display = "none";

    // const teaSelection = document.querySelector(".milk-tea");
    // teaSelection.addEventListener("click", milkTeaSelection);
  }
}

let header = document.querySelector(".header");

const icon = document.querySelector(".icon");
icon.addEventListener("click", handleSelectedIcon);

const button = document.querySelector("#button");
button.addEventListener("click", handleButton);
