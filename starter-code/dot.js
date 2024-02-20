const dotlist = document.querySelector('[role="dotList"]')
const dots = document.querySelectorAll('[role="dot"]')

const keydownLeft = 37;
const keydownRight = 39;

let currentDot = 0

// We are going to set the current dotindex to -1, once we move left or right, we adjust the focus,
// and set the current dotindex to 0
dotlist.addEventListener('keydown', (e)=>{
    if(e.keyCode === keydownLeft || e.keyCode === keydownRight){
        dots[currentDot].setAttribute('dotindex', '-1')
        if(e.keyCode === keydownRight){
            if(currentDot >= dots.length-1){
                currentDot = 0
            } else {
                currentDot++
            }
        } else {
            if(currentDot <=0){
                currentDot = dots.length-1
            } else {
                currentDot--
            }
        }
    }
    dots[currentDot].setAttribute('dotindex','0')
    dots[currentDot].focus()
})