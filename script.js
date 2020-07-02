var burger = document.querySelector("#hamburger");
console.log(burger);
burger.addEventListener("click", () => {
  var links = document.getElementById("links");
  console.log("clicked");

  links.classList.toggle("show");
  burger.classList.toggle("toggle");
});

console.log("added");
