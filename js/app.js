const ham = document.getElementById('hamburger')
const navList = document.getElementById('nav-List')

function toogleBtn() {
    navList.classList.toggle('show')

}

ham.addEventListener('click', toogleBtn)