const inputCheck = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')

inputCheck.addEventListener('click',() => {
    const modo = inputCheck.checked ? 'dark' : 'light'   //se estiver checado é dark, se não for checado é light 
    elemento.setAttribute("data-bs-theme", modo)                      //adiciona a class no body para mudar o
})