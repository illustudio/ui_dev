const buttons = document.querySelectorAll(".button");
const accItems = document.querySelectorAll(".accordion-item");
buttons.forEach((button, index) =>
  button.addEventListener("click", () => {
    buttons.forEach((button) => button.classList.remove("active"));
    accItems.forEach((acc) => acc.classList.remove("active"));
    button.classList.add("active");
    accItems[index].classList.add("active");
  })
);

const title = document.getElementById("title");
const chars = title.innerText.split("");
// console.log(chars);

title.innerText = "";

chars.forEach((char, index) => {
  const textNode = document.createElement("span");
  textNode.innerText = char;
  textNode.dataset.content = char;
  setTimeout(() => {
    textNode.classList.add("active");
  }, 50 * index);
  title.appendChild(textNode);
});
