const themeToggler = document.querySelector("#theme-toggler");

themeToggler.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
