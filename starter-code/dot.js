const dotlist = document.querySelector('[role="dotList"]')
const dots = document.querySelectorAll('[role="dot"]')

const keydownLeft = 37;
const keydownRight = 39;

let currentDot = 0

// We are going to set the current dotindex to -1, once we move left or right, we adjust the focus,
// and set the current dotindex to 0
dotlist.addEventListener('keydown', changeDotFocus)

// I want for each dot to change the information and image that matches to the dot

dots.forEach((dot)=>{
    dot.addEventListener('click', (e) => {
        const selectedDot = e.target
        // console.log('selected dot', selectedDot)
        const selectedPanel = selectedDot.getAttribute('aria-controls')
        // console.log('selected info', selectedPanel)
        const selectedImg = selectedDot.getAttribute('data-image')
        // console.log('selected image', selectedImg)
        const dotContainer = dot.parentNode
        const mainContainer = dotContainer.parentNode
        // console.log('container', mainContainer)

        // I want to change the info to the selected page
        hideSection(mainContainer, '[role="dotpanel"]')
        revealContent(mainContainer, `#${selectedPanel}`)
        // I want to reveal the image matching the page
        hideSection(mainContainer, '[role="dotImg"]')
        revealContent(mainContainer, `#${selectedImg}`)

        dotContainer.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false)
        dotContainer.querySelector(`[aria-controls=${selectedPanel}]`).setAttribute('aria-selected',true)
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

function hideSection(parent, content){
    parent.querySelectorAll(content).forEach((item)=>{
        item.setAttribute('hidden', true)
    })
}

function revealContent(parent, content) {
    parent.querySelector(content).removeAttribute('hidden')
}