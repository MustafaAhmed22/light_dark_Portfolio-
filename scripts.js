let switchElement=  document.querySelector('.switch')
switchElement.addEventListener('click',darkTheme)
function darkTheme(){
    document.body.classList.toggle('dark')
}