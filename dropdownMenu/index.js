const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdown.addEventListener("click", () => {
  dropdownMenu.classList.contains("isOpen")
    ? dropdownMenu.classList.remove("isOpen")
    : dropdownMenu.classList.add("isOpen");
});
