let btnMenu = document.querySelector('.btn_menu')
let Menu = document.querySelector('.menu')

btnMenu.addEventListener('click',abrirFecharMenu)

function abrirFecharMenu(){
    Menu.classList.toggle('show')
}
