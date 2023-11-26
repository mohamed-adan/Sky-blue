const container = document.querySelector(".container")
const navmenu = document.querySelector(".nav-menu")

container.addEventListener("click", () => {
    container.classList.toggle("active")
    navmenu.classList.toggle("active")


})