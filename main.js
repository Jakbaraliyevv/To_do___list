const add__btn = document.getElementById("add__btn");
const box = document.querySelector(".box");
const input = document.querySelector("input");

add__btn.addEventListener("click", (event) => {
  event.preventDefault();
  let div = document.createElement("div");
  let button = document.createElement("button");
  button.textContent = "Delate";
  if (input.value.length) {
    div.textContent = input.value;
    div.append(button);

    box.append(div);

    button.addEventListener("click", () => {
      div.remove();
    });
  }

  input.value = "";
});
