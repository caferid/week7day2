let deyis1 = document.querySelector('#main')
const imgItems = document.querySelectorAll('.item img')

imgItems.forEach(element => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        deyis1.setAttribute('src', e.target.getAttribute('src'))
    })
})


deyis1.addEventListener('click', () => {

})