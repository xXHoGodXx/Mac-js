let btn = document.querySelector('#whiten')
let btn1 = document.querySelector('#space_gray')
let content = document.querySelector('h4')
let sum = document.querySelector('h3')
let img = document.querySelector('img')
let value = document.querySelector('h3')
let button3 = document.querySelector('.btn3')
let button4 = document.querySelector('.btn4')
let button5 = document.querySelector('.btn5')
let button6 = document.querySelector('.btn6')



btn1.onclick = () => {
    img.setAttribute('src', './img/mbp14-spacegray-select-202110 1.png')
    btn1.classList.add('active')
    btn.classList.add('active1')
    content.textContent = "Space Gray"
}

btn.onclick = () => {
    img.setAttribute('src', './img/mbp14-silver-select-202110 1.png')
    btn1.classList.add('active1')

    content.textContent = "White"
}

button3.onclick = () => {
    sum.innerHTML = "$1,999"
    
}
button4.onclick = () => {

   sum.innerHTML = "$2,199"
}
button5.onclick = () => {
    
    sum.innerHTML =  "$2,599"
}
button6.onclick = () => {
    sum.innerHTML = "$3,199"

}