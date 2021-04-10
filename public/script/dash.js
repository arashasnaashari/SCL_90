const btn = document.querySelector('#btn_open_menu')
const menu = document.querySelector('#menu')

btn.addEventListener("click",() => {
    menu.classList.remove("hidden")
})