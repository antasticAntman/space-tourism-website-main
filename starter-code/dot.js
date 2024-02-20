const dotlist = document.querySelector('[role="dotList"]')
const dots = document.querySelectorAll('[role="dot"]')

const keydownLeft = 37;
const keydownRight = 39;

let currentDot = 0

// We are going to set the current dotindex to -1, once we move left or right, we adjust the focus,
// and set the current dotindex to 0
dotlist.addEventListener('keydown', changeDotFocus)

// dotlist.addEventListener('click', (e) => {
//     const targetDot = e.target
//     console.log('click', targetDot)
//     const targetPanel = targetDot.getAttribute('aria-control')
//     const targetImage = targetDot.getAttribute('data-image')

//     const dotContainer = targetDot.parentNode
//     console.log('dotCOntainer', dotContainer)
// })

dots.forEach((dot)=>{
    dot.addEventListener('click', (e) => {
        console.log('click')
        const targetDot = e.target
        console.log('target',targetDot)
        const targetPanel = targetDot.getAttribute('aria-controls')
        // console.log('targetpanel',targetPanel)
        const targetImage = targetDot.getAttribute('data-image')
        const dotContainer = targetDot.parentNode
        const mainDotContainer = dotContainer.parentNode

        mainDotContainer.querySelectorAll('[role="dotpanel"]').forEach((panel)=> {
            panel.setAttribute('hidden', true)
        })

        mainDotContainer.querySelector(`#${targetPanel}`).removeAttribute('hidden')

        
    })
})

function changeDotFocus(e){
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
}